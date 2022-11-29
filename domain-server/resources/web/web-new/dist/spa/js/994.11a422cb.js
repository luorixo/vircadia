"use strict";(globalThis["webpackChunkvircadia_domain_dashboard"]=globalThis["webpackChunkvircadia_domain_dashboard"]||[]).push([[994],{7483:(e,t,n)=>{n.d(t,{ge:()=>u,YW:()=>c,GD:()=>l});var o=n(52),s=n.n(o);const i="http://localhost:40100/";var a=function(e,t,n,o){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{r(o.next(e))}catch(t){i(t)}}function l(e){try{r(o["throw"](e))}catch(t){i(t)}}function r(e){e.done?n(e.value):s(e.value).then(a,l)}r((o=o.apply(e,t||[])).next())}))};function l(e){if("string"===typeof e)return e;const t=e;return"message"in t?t.message:`Error: ${JSON.stringify(e)}`}function r(e,t){return(null!==t&&void 0!==t?t:i)+e}function c(e,t){var n;return a(this,void 0,void 0,(function*(){const o=r(e,t);let i="";try{const t=yield s().get(o);if(t&&t.status){if(200===t.status)return t.data;i=`${null!==(n=t.statusText)&&void 0!==n?n:"unspecified"}`}else i=`Poorly formed response to GET ${e}: ${JSON.stringify(t)}`}catch(a){const t=l(a);i=`Exception on GET ${e}: ${t}`,console.log(i)}throw new Error(i)}))}function u(e,t){var n;return a(this,void 0,void 0,(function*(){const o=r(e,t);let i="";try{const t=yield s()["delete"](o);if(t&&t.status){if(200===t.status)return;i=`${null!==(n=t.statusText)&&void 0!==n?n:"unspecified"}`}else i=`Poorly formed response to DELETE ${e}: ${JSON.stringify(t)}`}catch(a){const t=l(a);i=`Exception on DELETE ${e}: ${t}`,console.log(i)}throw new Error(i)}))}},2994:(e,t,n)=>{n.r(t),n.d(t,{default:()=>le});var o=n(3673);const s={class:"q-pa-md"};function i(e,t,n,i,a,l){const r=(0,o.up)("MetaverseSettings"),c=(0,o.up)("WebRTCSettings"),u=(0,o.up)("WordpressSettings");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(r),(0,o.Wm)(c),(0,o.Wm)(u)])}var a=n(2323);const l=(0,o._)("div",{class:"text-h5 text-center text-weight-bold"},"Your Metaverse Account",-1),r={key:0,class:"text-overline text-positive text-center"},c={key:1,class:"text-overline text-negative text-center"},u=(0,o._)("span",{class:"text-h5 q-mb-sm text-bold text-warning"},"Are you sure?",-1),d=(0,o._)("span",{class:"text-body2"},[(0,o.Uk)("This will remove your domain-server OAuth access token."),(0,o._)("br"),(0,o.Uk)(" This could cause your domain to appear offline and no longer be reachable via any place names.")],-1),m={class:"q-ml-xs q-mt-xs text-caption text-grey-5"},p=(0,o._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"This is your Metaverse domain ID. If you do not want your domain to be registered in the Metaverse you can leave this blank.",-1),h=(0,o._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},[(0,o.Uk)("This is the local port your domain-server binds to for UDP connections. Depending on your router, this may need to be changed to unique values for each domain-server in order to run multiple full automatic networking domain-servers in the same network."),(0,o._)("br"),(0,o.Uk)(" You can use the value 0 to have the domain-server select a random port, which will help in preventing port collisions.")],-1),v=(0,o._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Enable secure checksums on communication that uses the Metaverse protocol. Increases security with possibly a small performance penalty",-1),g=(0,o._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Allows your domain's metadata to be accessible on the public internet via direct HTTP connection to the domain server",-1),f=(0,o._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"This is the port where the Metaverse exporter accepts connections. It listens both on IPv4 and IPv6 and can be accessed remotely, so you should make sure to restrict access with a firewall as needed.",-1);function b(e,t,n,s,i,b){const w=(0,o.up)("q-btn"),x=(0,o.up)("q-icon"),y=(0,o.up)("q-card-section"),W=(0,o.up)("q-card-actions"),_=(0,o.up)("q-card"),k=(0,o.up)("q-dialog"),q=(0,o.up)("q-separator"),T=(0,o.up)("q-input"),V=(0,o.up)("q-toggle"),P=(0,o.up)("q-expansion-item"),C=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(_,{class:"my-card"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[l,e.isUserConnected?((0,o.wg)(),(0,o.iD)("div",r,"Metaverse Account Connected")):((0,o.wg)(),(0,o.iD)("div",c,"Account Not Connected")),(0,o.Wm)(W,{align:"center"},{default:(0,o.w5)((()=>[e.isUserConnected?((0,o.wg)(),(0,o.j4)(w,{key:1,onClick:t[0]||(t[0]=t=>e.confirmDisconnect=!0),class:"q-mb-sm",padding:"0.5em 1.5em",push:"",color:"negative",label:"Disconnect Account"})):((0,o.wg)(),(0,o.j4)(w,{key:0,onClick:e.onConnectAccount,class:"q-mb-sm",padding:"0.5em 2em",push:"",color:"positive",label:"Connect Metaverse Account"},null,8,["onClick"])),(0,o.Wm)(k,{modelValue:e.confirmDisconnect,"onUpdate:modelValue":t[1]||(t[1]=t=>e.confirmDisconnect=t),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{class:"bg-primary q-pa-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{class:"q-mb-sm q-mr-sm",name:"warning",color:"warning",size:"1.5rem"}),u,d])),_:1}),(0,o.Wm)(W,{align:"center"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(w,{flat:"",label:"Cancel",color:"white"},null,512),[[C]]),(0,o.wy)((0,o.Wm)(w,{onClick:e.onConnectAccount,flat:"",label:"Confirm",color:"white"},null,8,["onClick"]),[[C]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,o.Wm)(q),(0,o.Wm)(P,{modelValue:e.isMetaverseSettingsToggled,"onUpdate:modelValue":t[8]||(t[8]=t=>e.isMetaverseSettingsToggled=t),class:"q-mt-md text-subtitle1",popup:"",icon:"settings",label:"Advanced Settings"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.accessToken,"onUpdate:modelValue":t[2]||(t[2]=t=>e.accessToken=t),label:"Access Token"},null,8,["modelValue"]),(0,o._)("div",m,(0,a.zw)(e.descriptions[0].settings[0].help),1)])),_:1}),e.isUserConnected?((0,o.wg)(),(0,o.j4)(y,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.domainID,"onUpdate:modelValue":t[3]||(t[3]=t=>e.domainID=t),label:"Domain ID"},null,8,["modelValue"]),(0,o.Wm)(w,{class:"q-mt-xs",color:"primary",label:"new domain ID"}),(0,o.Wm)(w,{class:"q-mt-xs q-ml-xs",color:"primary",label:"choose from my domains"}),p])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.localUDPPort,"onUpdate:modelValue":t[4]||(t[4]=t=>e.localUDPPort=t),label:"Local UDP Port"},null,8,["modelValue"]),h])),_:1}),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(V,{modelValue:e.isPacketVerificationEnabled,"onUpdate:modelValue":t[5]||(t[5]=t=>e.isPacketVerificationEnabled=t),"checked-icon":"check",color:"positive",label:"Enable Packet Verification","unchecked-icon":"clear"},null,8,["modelValue"]),v])),_:1}),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(V,{modelValue:e.isHTTPMetadataEnabled,"onUpdate:modelValue":t[6]||(t[6]=t=>e.isHTTPMetadataEnabled=t),"checked-icon":"check",color:"positive",label:"Enable Metadata HTTP Availability","unchecked-icon":"clear"},null,8,["modelValue"]),g])),_:1}),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.metadataExporterPort,"onUpdate:modelValue":t[7]||(t[7]=t=>e.metadataExporterPort=t),label:"Metadata Exporter HTTP Port"},null,8,["modelValue"]),f])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])}var w=n(1959),x=n(7483),y=function(e,t,n,o){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{r(o.next(e))}catch(t){i(t)}}function l(e){try{r(o["throw"](e))}catch(t){i(t)}}function r(e){e.done?n(e.value):s(e.value).then(a,l)}r((o=o.apply(e,t||[])).next())}))};const W={getValues(){return y(this,void 0,void 0,(function*(){let e={};try{const t="settings.json",n=yield(0,x.YW)(t);return e=n.values,e}catch(t){const e=(0,x.GD)(t);console.log(e)}return e}))},getDescriptions(){return y(this,void 0,void 0,(function*(){let e=[];try{const t="settings.json",n=yield(0,x.YW)(t);return e=n.descriptions,e}catch(t){const e=(0,x.GD)(t);console.log(e)}return e}))}};var _=function(e,t,n,o){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{r(o.next(e))}catch(t){i(t)}}function l(e){try{r(o["throw"](e))}catch(t){i(t)}}function r(e){e.done?n(e.value):s(e.value).then(a,l)}r((o=o.apply(e,t||[])).next())}))};const k=(0,o.aZ)({name:"MetaverseSettings",data(){return{descriptions:[],isMetaverseSettingsToggled:(0,w.iH)(!1),confirmDisconnect:(0,w.iH)(!1),isUserConnected:!1,accessToken:"",domainID:"",localUDPPort:"",isPacketVerificationEnabled:!1,isHTTPMetadataEnabled:!1,metadataExporterPort:""}},methods:{onConnectAccount(){this.isUserConnected=!this.isUserConnected},onDisconnectAccount(){this.isUserConnected=!this.isUserConnected},onNewDomainID(){console.log("new domain ID")},onChooseFromDomains(){console.log("choose from domains")},refreshSettingsValues(){var e,t,n,o,s,i,a,l,r,c,u,d;return _(this,void 0,void 0,(function*(){const m=yield W.getValues();this.accessToken=null!==(t=null===(e=m.metaverse)||void 0===e?void 0:e.access_token)&&void 0!==t?t:"",this.isUserConnected=Boolean(this.accessToken),this.domainID=null!==(o=null===(n=m.metaverse)||void 0===n?void 0:n.id)&&void 0!==o?o:"test123 (ID not found)",this.localUDPPort=null!==(i=null===(s=m.metaverse)||void 0===s?void 0:s.local_port)&&void 0!==i?i:"test123 (local UDP port not found)",this.isPacketVerificationEnabled=null!==(l=null===(a=m.metaverse)||void 0===a?void 0:a.enable_packet_verification)&&void 0!==l&&l,this.isHTTPMetadataEnabled=null!==(c=null===(r=m.metaverse)||void 0===r?void 0:r.enable_metadata_exporter)&&void 0!==c&&c,this.metadataExporterPort=null!==(d=null===(u=m.metaverse)||void 0===u?void 0:u.metadata_exporter_port)&&void 0!==d?d:"not found"}))},getDescriptions(){return _(this,void 0,void 0,(function*(){this.descriptions=yield W.getDescriptions()}))}},beforeMount(){this.refreshSettingsValues(),this.getDescriptions()}});var q=n(4260),T=n(151),V=n(5589),P=n(9367),C=n(8240),D=n(6778),U=n(4554),S=n(5869),E=n(429),A=n(4842),I=n(8886),Z=n(677),R=n(7518),M=n.n(R);const Q=(0,q.Z)(k,[["render",b]]),L=Q;M()(k,"components",{QCard:T.Z,QCardSection:V.Z,QCardActions:P.Z,QBtn:C.Z,QDialog:D.Z,QIcon:U.Z,QSeparator:S.Z,QExpansionItem:E.Z,QInput:A.Z,QToggle:I.Z}),M()(k,"directives",{ClosePopup:Z.Z});const O=(0,o._)("div",{class:"text-h5 text-center text-weight-bold q-mb-sm"},"WebRTC",-1),H=(0,o._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Allow web clients to connect over WebRTC data channels.",-1),$=(0,o._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},'Use secure WebSocket (wss:// protocol) for WebRTC signaling channel. If "on", the key, cert, and CA files are expected to be in the local Vircadia app directory, in a /domain-server/ subdirectory with filenames vircadia-cert.key, vircadia-cert.crt, and vircadia-crt-ca.crt.',-1);function j(e,t,n,s,i,a){const l=(0,o.up)("q-separator"),r=(0,o.up)("q-toggle"),c=(0,o.up)("q-card-section"),u=(0,o.up)("q-card"),d=(0,o.up)("q-expansion-item");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(u,{class:"my-card q-mt-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[O,(0,o.Wm)(l),(0,o.Wm)(d,{modelValue:e.isWebRTCSettingsToggled,"onUpdate:modelValue":t[2]||(t[2]=t=>e.isWebRTCSettingsToggled=t),class:"q-mt-md text-subtitle1",popup:"",icon:"settings",label:"Advanced Settings"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,{modelValue:e.isWebRTCConnectionsEnabled,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isWebRTCConnectionsEnabled=t),"checked-icon":"check",color:"positive",label:"Enable WebRTC Client Connections","unchecked-icon":"clear"},null,8,["modelValue"]),H])),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,{modelValue:e.isWebsocketSSLEnabled,"onUpdate:modelValue":t[1]||(t[1]=t=>e.isWebsocketSSLEnabled=t),"checked-icon":"check",color:"positive",label:"Enable WebRTC WebSocket SSL","unchecked-icon":"clear"},null,8,["modelValue"]),$])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])}var N=function(e,t,n,o){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{r(o.next(e))}catch(t){i(t)}}function l(e){try{r(o["throw"](e))}catch(t){i(t)}}function r(e){e.done?n(e.value):s(e.value).then(a,l)}r((o=o.apply(e,t||[])).next())}))};const G=(0,o.aZ)({name:"WebRTCSettings",data(){return{isWebRTCSettingsToggled:(0,w.iH)(!1),isWebRTCConnectionsEnabled:!1,isWebsocketSSLEnabled:!1}},methods:{refreshSettingsValues(){var e,t,n,o;return N(this,void 0,void 0,(function*(){const s=yield W.getValues();this.isWebRTCConnectionsEnabled=null!==(t=null===(e=s.webrtc)||void 0===e?void 0:e.enable_webrtc)&&void 0!==t&&t,this.isWebsocketSSLEnabled=null!==(o=null===(n=s.webrtc)||void 0===n?void 0:n.enable_webrtc_websocket_ssl)&&void 0!==o&&o}))}},beforeMount(){this.refreshSettingsValues()}}),Y=(0,q.Z)(G,[["render",j]]),B=Y;M()(G,"components",{QCard:T.Z,QCardSection:V.Z,QSeparator:S.Z,QExpansionItem:E.Z,QToggle:I.Z});const J=(0,o._)("div",{class:"text-h5 text-center text-weight-bold q-mb-sm"},"WordPress OAuth2",-1),z=(0,o._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Allow a WordPress-based (miniOrange) OAuth2 service to assign users to groups based on their role with the service.",-1),F=(0,o._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"The URL that the Interface will use to login via OAuth2.",-1),K=(0,o._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},'The URL base that the domain server will use to make WordPress API calls. Typically "https://oursite.com/wp-json/". However, if using non-pretty permalinks or otherwise get a 404 error then try "https://oursite.com/?rest_route=/".',-1),X=(0,o._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"This is the client ID from the WordPress plugin configuration.",-1);function ee(e,t,n,s,i,a){const l=(0,o.up)("q-separator"),r=(0,o.up)("q-toggle"),c=(0,o.up)("q-card-section"),u=(0,o.up)("q-input"),d=(0,o.up)("q-card"),m=(0,o.up)("q-expansion-item");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(d,{class:"my-card q-mt-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[J,(0,o.Wm)(l),(0,o.Wm)(m,{modelValue:e.isWordPressSettingsToggled,"onUpdate:modelValue":t[4]||(t[4]=t=>e.isWordPressSettingsToggled=t),class:"q-mt-md text-subtitle1",popup:"",icon:"settings",label:"WordPress OAuth2 Settings"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,{modelValue:e.isOauth2AuthenticationEnabled,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isOauth2AuthenticationEnabled=t),"checked-icon":"check",color:"positive",label:"Enable OAuth2 Authentication","unchecked-icon":"clear"},null,8,["modelValue"]),z])),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.authenticationURL,"onUpdate:modelValue":t[1]||(t[1]=t=>e.authenticationURL=t),label:"Authentication URL"},null,8,["modelValue"]),F])),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.wordpressAPIURL,"onUpdate:modelValue":t[2]||(t[2]=t=>e.wordpressAPIURL=t),label:"WordPress API URL Base"},null,8,["modelValue"]),K])),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.wordpressPluginID,"onUpdate:modelValue":t[3]||(t[3]=t=>e.wordpressPluginID=t),label:"WordPress Plugin Client ID"},null,8,["modelValue"]),X])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])}var te=function(e,t,n,o){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{r(o.next(e))}catch(t){i(t)}}function l(e){try{r(o["throw"](e))}catch(t){i(t)}}function r(e){e.done?n(e.value):s(e.value).then(a,l)}r((o=o.apply(e,t||[])).next())}))};const ne=(0,o.aZ)({name:"WordpressSettings",data(){return{isWordPressSettingsToggled:(0,w.iH)(!1),isOauth2AuthenticationEnabled:!1,authenticationURL:"example.com",wordpressAPIURL:"examplewordpressapi.com",wordpressPluginID:"exampleID"}},methods:{refreshSettingsValues(){var e,t,n,o,s,i,a,l;return te(this,void 0,void 0,(function*(){const r=yield W.getValues();this.isOauth2AuthenticationEnabled=null!==(t=null===(e=r.authentication)||void 0===e?void 0:e.enable_oauth2)&&void 0!==t&&t,this.authenticationURL=null!==(o=null===(n=r.authentication)||void 0===n?void 0:n.oauth2_url_path)&&void 0!==o?o:"error",this.wordpressAPIURL=null!==(i=null===(s=r.authentication)||void 0===s?void 0:s.wordpress_url_base)&&void 0!==i?i:"error",this.wordpressPluginID=null!==(l=null===(a=r.authentication)||void 0===a?void 0:a.plugin_client_id)&&void 0!==l?l:"error"}))}},beforeMount(){this.refreshSettingsValues()}}),oe=(0,q.Z)(ne,[["render",ee]]),se=oe;M()(ne,"components",{QCard:T.Z,QCardSection:V.Z,QSeparator:S.Z,QExpansionItem:E.Z,QToggle:I.Z,QInput:A.Z});const ie=(0,o.aZ)({name:"Networking",components:{MetaverseSettings:L,WebRTCSettings:B,WordpressSettings:se},methods:{}}),ae=(0,q.Z)(ie,[["render",i]]),le=ae}}]);