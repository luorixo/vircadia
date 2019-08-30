#include "LauncherState.h"

#include <array>

#include <QNetworkRequest>
#include <QNetworkReply>

#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>
#include <QUrlQuery>

#include <QDebug>
#include <QQmlEngine>

static const std::array<QString, LauncherState::UIState::UI_STATE_NUM> QML_FILE_FOR_UI_STATE =
    { { "qrc:/qml/SplashScreen.qml", "qrc:/qml/Login.qml", "qrc:/qml/DisplayName.qml",
        "qrc:/qml/Download.qml", "qrc:/qml/DownloadFinshed.qml", "qrc:/qml/Error.qml" } };

void LauncherState::ASSERT_STATE(LauncherState::ApplicationState state) const {
    if (_appState != state) {
        __debugbreak();
        exit(0);
    }
}

LauncherState::LauncherState() {
    requestBuilds();
}

QString LauncherState::getCurrentUISource() const {
    return QML_FILE_FOR_UI_STATE[getUIState()];
}

void LauncherState::declareQML() {
    qmlRegisterType<LauncherState>("HQLauncher", 1, 0, "LauncherStateEnums");
}

void LauncherState::setUIState(UIState state) {
    _uiState = state;
    emit updateSourceUrl(getCurrentUISource());
}

LauncherState::UIState LauncherState::getUIState() const {
    return _uiState;
}

void LauncherState::setLastLoginError(LastLoginError lastLoginError) {
    _lastLoginError = lastLoginError;
}

LauncherState::LastLoginError LauncherState::getLastLoginError() const {
    return _lastLoginError;
}

void LauncherState::requestBuilds() {
    ASSERT_STATE(ApplicationState::INIT);
    _appState = ApplicationState::REQUESTING_BUILDS;

    // TODO Show splash screen until this request is complete
    auto request = new QNetworkRequest(QUrl("https://thunder.highfidelity.com/builds/api/tags/latest/?format=json"));
    auto reply = _networkAccessManager.get(*request);

    QObject::connect(reply, &QNetworkReply::finished, this, &LauncherState::receivedBuildsReply);
}

void LauncherState::receivedBuildsReply() {
    auto reply = static_cast<QNetworkReply*>(sender());

    ASSERT_STATE(ApplicationState::REQUESTING_BUILDS);

    if (reply->error()) {
        qDebug() << "Error getting builds from thunder: " << reply->errorString();
    } else {
        qDebug() << "Builds reply has been received";
        auto data = reply->readAll();
        QJsonParseError parseError;
        auto doc = QJsonDocument::fromJson(data, &parseError);
        if (parseError.error) {
            qDebug() << "Error parsing response from thunder: " << data;
        } else {
            auto root = doc.object();
            if (!root.contains("default_tag")) {
                _appState = ApplicationState::REQUESTING_BUILDS_FAILED;
                setUIState(LauncherState::ERROR_SCREEN);
                return;
            }

            _latestBuilds.defaultTag = root["default_tag"].toString();

            auto results = root["results"];
            if (!results.isArray()) {
                _appState = ApplicationState::REQUESTING_BUILDS_FAILED;
                setUIState(LauncherState::ERROR_SCREEN);
                return;
            }

            for (auto result : results.toArray()) {
                auto entry = result.toObject();
                Build build;
                build.tag = entry["name"].toString();
                build.latestVersion = entry["latest_version"].toInt();
                build.buildNumber = entry["build_number"].toInt();
#ifdef Q_OS_WIN
                build.installerZipURL = entry["installers"].toObject()["windows"].toObject()["zip_url"].toString();
#elif defined(Q_OS_MACOS)
                build.installerZipURL = entry["installers"].toObject()["mac"].toObject()["zip_url"].toString();
#else
                #error "Launcher is only supported on Windows and Mac OS"
#endif
                _latestBuilds.builds.push_back(build);
            }
        }
    }
    _appState = ApplicationState::WAITING_FOR_LOGIN;
    setUIState(LauncherState::LOGIN_SCREEN);
}

void LauncherState::login(QString username, QString password) {
    ASSERT_STATE(ApplicationState::WAITING_FOR_LOGIN);

    _appState = ApplicationState::REQUESTING_LOGIN;

    qDebug() << "Got login: " << username << password;

    auto request = new QNetworkRequest(QUrl("https://metaverse.highfidelity.com/oauth/token"));

    request->setHeader(QNetworkRequest::ContentTypeHeader, "application/x-www-form-urlencoded");
    QUrlQuery query;
    query.addQueryItem("grant_type", "password");
    query.addQueryItem("username", username);
    query.addQueryItem("password", password);
    query.addQueryItem("scope", "owner");

    auto reply = _networkAccessManager.post(*request, query.toString().toUtf8());

    QObject::connect(reply, &QNetworkReply::finished, this, &LauncherState::receivedLoginReply);
}

Q_INVOKABLE void LauncherState::receivedLoginReply() {
    auto reply = static_cast<QNetworkReply*>(sender());

    ASSERT_STATE(ApplicationState::REQUESTING_LOGIN);

    qDebug() << "Got response for login: " << reply->readAll();


    download();
}

void LauncherState::download() {
    _appState = ApplicationState::DOWNLOADING_CONTENT;
    setUIState(LauncherState::DOWNLOAD_SCREEN);
}

void LauncherState::contentDownloadComplete() {
}

void LauncherState::clientDownloadComplete() {
}

void LauncherState::launchClient() {
    _appState = ApplicationState::LAUNCHING_HIGH_FIDELITY;
}
