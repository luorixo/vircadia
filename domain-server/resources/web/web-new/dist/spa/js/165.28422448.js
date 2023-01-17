"use strict";(globalThis["webpackChunkvircadia_domain_dashboard"]=globalThis["webpackChunkvircadia_domain_dashboard"]||[]).push([[165],{5593:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(7483),a=n(8563),i=function(e,t,n,o){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{u(o.next(e))}catch(t){i(t)}}function l(e){try{u(o["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):a(e.value).then(s,l)}u((o=o.apply(e,t||[])).next())}))};const s=n(52),l=[],u={getValues(){return i(this,void 0,void 0,(function*(){let e={};try{const t="settings.json",n=yield(0,o.YW)(t);return e=n.values,e}catch(t){const e=(0,o.GD)(t);console.log(e)}return e}))},getDescriptions(){return i(this,void 0,void 0,(function*(){let e=[];try{const t="settings.json",n=yield(0,o.YW)(t);return e=n.descriptions,e}catch(t){const e=(0,o.GD)(t);console.log(e)}return e}))},commitSettings(e){return s.post("/settings.json",JSON.stringify(e)).then((()=>(a.Z.info(a.Z.types.DOMAIN,"Successfully committed settings."),!0))).catch((e=>(a.Z.error(a.Z.types.DOMAIN,`Failed to commit settings to Domain: ${e}`),!1)))},automaticCommitSettings(e){l.forEach(((e,t)=>{clearTimeout(e),l.splice(t,1)})),l.push(window.setTimeout(this.commitSettings,5e3,e))},createNewDomainID(e){return i(this,void 0,void 0,(function*(){try{const t=`label=${e}`,n=yield s.post("/api/domains",t);if("failure"===n.data.status)return"";const o=n.data.domain.domainId;return o}catch(t){return console.log(t),""}}))},getDomains(){return i(this,void 0,void 0,(function*(){let e=[];try{const t="api/domains",n=yield(0,o.YW)(t);return e=n.data.domains,e}catch(t){console.log(t)}return e}))}}},7483:(e,t,n)=>{n.d(t,{ge:()=>c,YW:()=>r,GD:()=>l});var o=n(52),a=n.n(o);const i="http://localhost:40100/";var s=function(e,t,n,o){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{u(o.next(e))}catch(t){i(t)}}function l(e){try{u(o["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):a(e.value).then(s,l)}u((o=o.apply(e,t||[])).next())}))};function l(e){if("string"===typeof e)return e;const t=e;return"message"in t?t.message:`Error: ${JSON.stringify(e)}`}function u(e,t){return(null!==t&&void 0!==t?t:i)+e}function r(e,t){var n;return s(this,void 0,void 0,(function*(){const o=u(e,t);let i="";try{const t=yield a().get(o);if(t&&t.status){if(200===t.status)return t.data;i=`${null!==(n=t.statusText)&&void 0!==n?n:"unspecified"}`}else i=`Poorly formed response to GET ${e}: ${JSON.stringify(t)}`}catch(s){const t=l(s);i=`Exception on GET ${e}: ${t}`,console.log(i)}throw new Error(i)}))}function c(e,t){var n;return s(this,void 0,void 0,(function*(){const o=u(e,t);let i="";try{const t=yield a()["delete"](o);if(t&&t.status){if(200===t.status)return;i=`${null!==(n=t.statusText)&&void 0!==n?n:"unspecified"}`}else i=`Poorly formed response to DELETE ${e}: ${JSON.stringify(t)}`}catch(s){const t=l(s);i=`Exception on DELETE ${e}: ${t}`,console.log(i)}throw new Error(i)}))}},5165:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q});var o=n(3673);const a={class:"q-pa-md"};function i(e,t,n,i,s,l){const u=(0,o.up)("AutomaticContentArchivesSettings");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(u)])}var s=n(2323);const l=(0,o._)("div",{class:"text-h5 text-center text-weight-bold q-mb-sm"},"Automatic Content Archives",-1),u=(0,o._)("p",{class:"q-mb-xs text-body1 text-weight-bold"},"Rolling Backup Rules",-1),r=(0,o._)("div",{class:"q-mt-xs text-caption text-grey-5"},"Define how frequently to create automatic content archives.",-1),c={class:"text-h6 text-bold text-white full-width"},d={class:"text-warning"},m=(0,o._)("p",{class:"text-body2"},"WARNING: This cannot be undone.",-1);function p(e,t,n,a,i,p){const f=(0,o.up)("q-separator"),w=(0,o.up)("q-th"),h=(0,o.up)("q-tr"),g=(0,o.up)("q-td"),v=(0,o.up)("q-btn"),b=(0,o.up)("q-input"),x=(0,o.up)("q-icon"),k=(0,o.up)("q-table"),D=(0,o.up)("q-card-section"),y=(0,o.up)("q-card"),_=(0,o.up)("q-avatar"),W=(0,o.up)("q-card-actions"),R=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(y,{class:"my-card"},{default:(0,o.w5)((()=>[(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[l,(0,o.Wm)(f),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[u,r,(0,o.Wm)(k,{dark:"",class:"bg-grey-9",rows:e.rows},{header:(0,o.w5)((()=>[(0,o.Wm)(h,{class:"bg-primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{class:"text-left"},{default:(0,o.w5)((()=>[(0,o.Uk)("Name")])),_:1}),(0,o.Wm)(w,{class:"text-left"},{default:(0,o.w5)((()=>[(0,o.Uk)("Backup Interval in Seconds")])),_:1}),(0,o.Wm)(w,{class:"text-left"},{default:(0,o.w5)((()=>[(0,o.Uk)("Max Rolled Backup Versions")])),_:1}),(0,o.Wm)(w,{"auto-width":""})])),_:1})])),body:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.backupRules,((t,n)=>((0,o.wg)(),(0,o.j4)(h,{key:t.Name},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(t.Name),1)])),_:2},1024),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(t.backupInterval),1)])),_:2},1024),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(t.maxBackupVersions),1)])),_:2},1024),(0,o.Wm)(g,{class:"text-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{size:"sm",color:"negative",icon:"delete",class:"q-px-xs",onClick:o=>e.onShowConfirmDeleteDialogue("backupRules",n,t.Name),round:""},null,8,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),"bottom-row":(0,o.w5)((()=>[(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,{modelValue:e.newRowNames.backupRules.Name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.newRowNames.backupRules.Name=t),class:"no-margin no-padding text-subtitle2 text-white",standout:"bg-primary text-white",label:"New Backup Rule Name",dense:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,{modelValue:e.newRowNames.backupRules.backupInterval,"onUpdate:modelValue":t[1]||(t[1]=t=>e.newRowNames.backupRules.backupInterval=t),class:"no-margin no-padding text-subtitle2 text-white",standout:"bg-primary text-white",label:"Backup Interval (seconds)",dense:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,{modelValue:e.newRowNames.backupRules.maxBackupVersions,"onUpdate:modelValue":t[2]||(t[2]=t=>e.newRowNames.backupRules.maxBackupVersions=t),class:"no-margin no-padding text-subtitle2 text-white",standout:"bg-primary text-white",label:"Maximum Rolled Backup Versions",dense:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(g,{class:"text-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{onClick:t[3]||(t[3]=t=>e.onAddRow("backupRules")),color:"positive"},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{name:"add",size:"sm"})])),_:1})])),_:1})])),_:1})])),_:1},8,["rows"])])),_:1})])),_:1}),(0,o.Wm)(R,{modelValue:e.confirmDeleteDialogue.show,"onUpdate:modelValue":t[6]||(t[6]=t=>e.confirmDeleteDialogue.show=t),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"bg-primary q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(D,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o._)("p",c,[(0,o.Wm)(_,{icon:"mdi-alert",class:"q-mr-sm","text-color":"warning",size:"20px","font-size":"20px"}),(0,o.Uk)("Delete "),(0,o._)("span",d,(0,s.zw)(e.confirmDeleteDialogue.thingToDelete),1),(0,o.Uk)("?")]),m])),_:1}),(0,o.Wm)(W,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{flat:"",label:"Cancel",onClick:t[4]||(t[4]=t=>e.onHideConfirmDeleteDialogue())}),(0,o.Wm)(v,{flat:"",label:"Delete",onClick:t[5]||(t[5]=t=>e.onDeleteRow(e.confirmDeleteDialogue.permissionType,e.confirmDeleteDialogue.index))})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])}var f=n(5593),w=function(e,t,n,o){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{u(o.next(e))}catch(t){i(t)}}function l(e){try{u(o["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):a(e.value).then(s,l)}u((o=o.apply(e,t||[])).next())}))};const h=(0,o.aZ)({name:"AutomaticContentArchivesSettings",data(){return{rows:[{}],isWordPressSettingsToggled:!1,values:{},newRowNames:{backupRules:{Name:"",backupInterval:0,maxBackupVersions:0}},confirmDeleteDialogue:{show:!1,thingToDelete:"",index:-1,permissionType:""}}},methods:{onShowConfirmDeleteDialogue(e,t,n){this.confirmDeleteDialogue={show:!0,thingToDelete:n,index:t,permissionType:e}},onHideConfirmDeleteDialogue(){this.confirmDeleteDialogue={show:!1,thingToDelete:"",index:-1,permissionType:""}},onDeleteRow(e,t){this.onHideConfirmDeleteDialogue();const n=[...this[e]];n.splice(t,1),this[e]=n},onAddRow(e){this[e]=[...this[e],this.newRowNames[e]],this.newRowNames[e]={Name:"",backupInterval:0,maxBackupVersions:0}},refreshSettingsValues(){return w(this,void 0,void 0,(function*(){this.values=yield f.Z.getValues()}))},saveSettings(){const e={automatic_content_archives:{backup_rules:this.backupRules}};f.Z.automaticCommitSettings(e)}},computed:{backupRules:{get(){var e,t;return null!==(t=null===(e=this.values.automatic_content_archives)||void 0===e?void 0:e.backup_rules)&&void 0!==t?t:[]},set(e){var t;"undefined"!==typeof(null===(t=this.values.automatic_content_archives)||void 0===t?void 0:t.backup_rules)&&(this.values.automatic_content_archives.backup_rules=e,this.saveSettings())}}},beforeMount(){this.refreshSettingsValues()}});var g=n(4260),v=n(151),b=n(5589),x=n(5869),k=n(3350),D=n(8186),y=n(2414),_=n(3884),W=n(8240),R=n(4842),N=n(4554),T=n(6778),Z=n(5096),V=n(9367),C=n(7518),S=n.n(C);const q=(0,g.Z)(h,[["render",p]]),A=q;S()(h,"components",{QCard:v.Z,QCardSection:b.Z,QSeparator:x.Z,QTable:k.Z,QTr:D.Z,QTh:y.Z,QTd:_.Z,QBtn:W.Z,QInput:R.Z,QIcon:N.Z,QDialog:T.Z,QAvatar:Z.Z,QCardActions:V.Z});const I=(0,o.aZ)({name:"Index",components:{AutomaticContentArchivesSettings:A}}),E=(0,g.Z)(I,[["render",i]]),Q=E}}]);