(this["webpackJsonpdemo-access-form"]=this["webpackJsonpdemo-access-form"]||[]).push([[0],{134:function(e,t,r){},135:function(e,t,r){},14:function(e,t,r){e.exports={block:"FormControl_block__1OG-O",largeWrap:"FormControl_largeWrap__3eIrk",shortWrap:"FormControl_shortWrap__DjRat",item:"FormControl_item__1Lg1u",indicator:"FormControl_indicator__33egd",fieldError:"FormControl_fieldError__3D0ir",textError:"FormControl_textError__2VPTL",selectPlaceholder:"FormControl_selectPlaceholder__1lIrh",label:"FormControl_label__3qiVO",moveLabel:"FormControl_moveLabel__2QoOp",areaItem:"FormControl_areaItem__3q34b",error:"FormControl_error__33HVk"}},271:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(21),c=r.n(o),i=(r(134),r(135),r(68)),s=r(40),l=r(52),m=r.n(l),u=r(82),d=r(9),b=r(69),j=b.create({withCredentials:!0,baseURL:"https://export.alt-test.ru/"}),p=function(){return b.all([j.get("api/v1/public/user_category/input_list"),j.get("api/v1/public/country/input_list"),j.get("api/v1/public/lang/input_list"),j.get("api/v1/public/industry/input_list")]).then(b.spread((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return{categories:t[0].data.data,countries:t[1].data.data,languages:t[2].data.data,industries:t[3].data.data}}))).catch((function(e){console.log("error:",e)}))},h=function(e){var t={company_name:e.company_name,corporate_email:e.corporate_email,country:e.markets.map((function(e){return e.value})),industry:e.industry.map((function(e){return e.value})),lang:e.lang,name:e.name,position:e.position,surname:e.surname,user_category:e.user_category,user_country:e.user_country};return j.post("api/v1/public/auth/registration_demo",{data:t})},_={categories:[],countries:[],languages:[],industries:[]},O=function(e){return{type:"export.link/demoForm/SET_FORM_DATA",data:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return"export.link/demoForm/SET_FORM_DATA"===t.type?Object(d.a)(Object(d.a)({},e),{},{categories:t.data.categories,countries:t.data.countries,languages:t.data.languages,industries:t.data.industries}):e},f=r(33),g=r(6),v=r.n(g),F=r(24),y=r(53),C=r(14),N=r.n(C),k=r(291),D=r(290),w=r(3),z=r(126),S=r(2),T=function(e){return Object(S.jsx)(w.p.DropdownIndicator,Object(d.a)(Object(d.a)({},e),{},{children:Object(S.jsx)("svg",{className:N.a.indicator,width:"7",height:"4",viewBox:"0 0 7 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(S.jsx)("path",{d:"M6.80358 0.186218C6.67916 0.0669523 6.51086 9.34599e-06 6.33543 9.34599e-06C6.16 9.34599e-06 6.125 0 6.125 0L3.4834 9.34599e-06L0.875 5.31672e-06C0.875 5.31672e-06 0.839995 9.34599e-06 0.664566 9.34599e-06C0.489137 9.34599e-06 0.320836 0.0669523 0.196421 0.186218C0.134182 0.245746 0.084781 0.316569 0.0510688 0.394602C0.0173566 0.472634 0 0.556331 0 0.640865C0 0.725398 0.0173566 0.809095 0.0510688 0.887128C0.084781 0.96516 0.134182 1.03598 0.196421 1.09551L3.01193 3.81059C3.07366 3.8706 3.14711 3.91824 3.22803 3.95075C3.30894 3.98326 3.39574 4 3.4834 4C3.57106 4 3.65785 3.98326 3.73877 3.95075C3.81969 3.91824 3.89313 3.8706 3.95486 3.81059L6.80358 1.09551C6.86582 1.03598 6.91522 0.96516 6.94893 0.887128C6.98264 0.809095 7 0.725398 7 0.640865C7 0.556331 6.98264 0.472634 6.94893 0.394602C6.91522 0.316569 6.86582 0.245746 6.80358 0.186218Z",fill:"#646B7D"})})}))},E=function(e){var t,r;window.innerWidth<=768?(t="47px",r="10px"):(t="56px",r="20px");var a={control:function(a,o){return Object(d.a)(Object(d.a)({},a),{},{backgroundColor:"#F8F9F9",borderRadius:"5px",minHeight:t,marginBottom:r,transition:"none",border:n(o,e.meta),boxShadow:(o.isFocused,0),"&:hover":{border:n(o,e.meta)}})}},n=function(e,t){return e.isFocused?"2px solid #66aad4":t.touched&&t.error?"2px solid #F77F82;":"1px solid #F4F4F6"};return Object(S.jsx)(z.a,{options:e.option,isMulti:e.multi,isClearable:!0,placeholder:Object(S.jsx)("div",{className:N.a.selectPlaceholder,children:e.label}),styles:a,components:{DropdownIndicator:T,IndicatorSeparator:function(){return null}},onChange:e.onChange,onBlur:e.setTouched})},W=["label","size"],L=["label","size","option","multi"],q=["label","size"],I=["children","className"],A=function(e){var t=e.label,r=e.size,a=Object(y.a)(e,W),n=Object(f.c)(a),o=Object(F.a)(n,2),c=o[0],i=o[1];return Object(S.jsxs)("div",{className:N.a["".concat(r,"Wrap")],children:[Object(S.jsx)("input",Object(d.a)(Object(d.a)({id:a.id||a.name,className:N.a.item+" "+(i.touched&&i.error&&N.a.fieldError),placeholder:t},c),a)),Object(S.jsx)("label",{htmlFor:a.id||a.name,className:N.a.label,children:t}),i.touched&&i.error?Object(S.jsx)("div",{className:N.a.error,children:i.error}):null]})},B=function(e){var t=e.label,r=e.size,a=e.option,n=e.multi,o=void 0!==n&&n,c=Object(y.a)(e,L),i=Object(f.c)(c),s=Object(F.a)(i,3),l=(s[0],s[1]),m=s[2],u=m.setValue,d=m.setTouched;return Object(S.jsxs)("div",{className:N.a["".concat(r,"Wrap")],children:[Object(S.jsx)(E,{option:a,meta:l,multi:o,label:t,onChange:function(e){u(e?e.value:""),Array.isArray(e)&&u(e||"")},setTouched:d}),l.touched&&l.error?Object(S.jsx)("div",{className:N.a.error,children:l.error}):null]})},P=function(e){var t=e.label,r=e.size,a=Object(y.a)(e,q),n=Object(f.c)(a),o=Object(F.a)(n,2),c=o[0],i=o[1];return Object(S.jsxs)("div",{className:N.a["".concat(r,"Wrap")],children:[Object(S.jsx)("textarea",Object(d.a)(Object(d.a)({className:N.a.item+" "+N.a.areaItem,placeholder:t},c),a)),i.touched&&i.error?Object(S.jsx)("div",{className:N.a.error,children:i.error}):null]})},R=function(e){var t=e.children,r=e.className,a=void 0===r?"":r,n=Object(y.a)(e,I),o=Object(f.c)(Object(d.a)(Object(d.a)({},n),{},{type:"checkbox"})),c=Object(F.a)(o,2),i=c[0],s=c[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(k.a,Object(d.a)(Object(d.a)(Object(d.a)({},i),n),{},{control:Object(S.jsx)(D.a,{color:"default",size:"small"})})),Object(S.jsx)("p",{className:a+" "+(s.touched&&s.error&&N.a.textError),children:t})]})},V=r(20),M=V.c({company_name:V.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").trim(),user_category:V.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),user_country:V.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),name:V.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").max(10,"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 - 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").trim(),surname:V.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").max(10,"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 - 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").trim(),position:V.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").trim(),corporate_email:V.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").email("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email").trim(),markets:V.a().min(1,"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),lang:V.d().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),industry:V.a().min(1,"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),check:V.b().oneOf([!0])}),X=function(e){var t=e.categories,r=e.countries,n=e.languages,o=e.industries,c=e.getFormData,i=e.submitForm;Object(a.useEffect)((function(){return c()}),[]);var s=t.map((function(e){return{value:e.id,label:e.name}})),l=r.map((function(e){return{value:e.id,label:e.name}})),m=n.map((function(e){return{value:e.id,label:e.name}})),u=o.map((function(e){return{value:e.id,label:e.name}}));return Object(S.jsxs)("section",{className:v.a.demoForm,children:[Object(S.jsx)("h1",{className:v.a.sectionTitle,children:"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u0435\u043c\u043e-\u0434\u043e\u0441\u0442\u0443\u043f"}),Object(S.jsx)("p",{className:v.a.discription,children:"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u0435\u043d \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u0435\u0439 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446 \u0438\u043b\u0438 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u0435\u0439"}),Object(S.jsxs)("div",{className:v.a.formWrap,children:[Object(S.jsx)("h2",{className:v.a.formTitle,children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(S.jsx)(f.b,{initialValues:{company_name:"",user_category:"",user_country:"",name:"",surname:"",position:"",corporate_email:"",markets:Array(0),lang:"",industry:Array(0),message:"",check:!1},validationSchema:M,onSubmit:function(e,t){var r=t.setSubmitting;r(!0),i(e),r(!1)},children:function(e){var t=e.isSubmitting;return Object(S.jsxs)(f.a,{className:v.a.form,children:[Object(S.jsx)("h3",{className:v.a.subtitle,children:"\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043b\u0438\u0446\u043e"}),Object(S.jsxs)("div",{className:v.a.block,children:[Object(S.jsx)(A,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043b\u0438\u0446\u0430*",size:"large",name:"company_name",type:"text"}),Object(S.jsx)(B,{label:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f*",size:"short",option:s,name:"user_category"}),Object(S.jsx)(B,{label:"\u0421\u0442\u0440\u0430\u043d\u0430*",size:"short",option:l,name:"user_country"})]}),Object(S.jsx)("h3",{className:v.a.subtitle,children:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044c \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043b\u0438\u0446\u0430"}),Object(S.jsxs)("div",{className:v.a.block,children:[Object(S.jsx)(A,{label:"\u0418\u043c\u044f*",size:"short",name:"name",type:"text"}),Object(S.jsx)(A,{label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f*",size:"short",name:"surname",type:"text"}),Object(S.jsx)(A,{label:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c*",size:"short",name:"position",type:"text"}),Object(S.jsx)(A,{label:"\u0412\u0430\u0448 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0439 e-mail*",size:"short",name:"corporate_email",type:"email"})]}),Object(S.jsx)("h3",{className:v.a.subtitle,children:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u044b"}),Object(S.jsxs)("div",{className:v.a.block,children:[Object(S.jsx)(B,{label:"\u0426\u0435\u043b\u0435\u0432\u044b\u0435 \u0440\u044b\u043d\u043a\u0438*",size:"short",option:l,multi:"true",name:"markets"}),Object(S.jsx)(B,{label:"\u041f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u044f\u0437\u044b\u043a*",size:"short",option:m,name:"lang"}),Object(S.jsx)(B,{label:"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u0435 \u043e\u0442\u0440\u0430\u0441\u043b\u0438*",size:"large",option:u,multi:"true",name:"industry"}),Object(S.jsx)(P,{label:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",size:"large",name:"message"})]}),Object(S.jsx)("div",{className:v.a.block,children:Object(S.jsx)(R,{className:v.a.confirmation,name:"check",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e, \u0447\u0442\u043e \u044f\u0432\u043b\u044f\u044e\u0441\u044c \u0443\u043f\u043e\u043b\u043d\u043e\u043c\u043e\u0447\u0435\u043d\u043d\u044b\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u0435\u043c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043b\u0438\u0446\u0430 \u0438\u043b\u0438 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044f"})}),Object(S.jsx)("div",{className:v.a.line}),Object(S.jsxs)("div",{className:v.a.block,children:[Object(S.jsx)("div",{className:v.a.shortWrap,children:Object(S.jsxs)("p",{className:v.a.conditions,children:["\u041d\u0430\u0436\u0438\u043c\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0443 \u201c\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u0435\u043c\u043e-\u0434\u043e\u0441\u0442\u0443\u043f\u201d \u0432\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442\u0435 ",Object(S.jsx)("a",{href:"#",children:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435"})," \u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u044b \u0441 ",Object(S.jsx)("a",{href:"#",children:"\u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})]})}),Object(S.jsx)("div",{className:v.a.shortWrap,children:Object(S.jsx)("button",{type:"submit",className:v.a.btn,disabled:t,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"})})]})]})}})]})]})},J=Object(s.c)(Object(i.b)((function(e){return{categories:e.demoForm.categories,countries:e.demoForm.countries,languages:e.demoForm.languages,industries:e.demoForm.industries}}),(function(e){return{getFormData:function(){e(function(){var e=Object(u.a)(m.a.mark((function e(t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:(r=e.sent)&&t(O(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},submitForm:function(t){var r;e((r=t,function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(r);case 3:e.sent&&console.log("success"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))}}})))(X);var U=function(e){return Object(S.jsx)("div",{className:"app-wrapper",children:Object(S.jsx)(J,{state:e.state})})},Z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,292)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),o(e),c(e)}))},H=r(125),Y=Object(s.b)({demoForm:x}),G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,Q=Object(s.d)(Y,G(Object(s.a)(H.a)));c.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(i.a,{store:Q,children:Object(S.jsx)(U,{state:Q.getState()})})}),document.getElementById("root")),Z()},6:function(e,t,r){e.exports={demoForm:"DemoForm_demoForm__32qFV",sectionTitle:"DemoForm_sectionTitle__3Zx4j",discription:"DemoForm_discription__26g4R",formWrap:"DemoForm_formWrap__2RL5X",formTitle:"DemoForm_formTitle__31fpa",form:"DemoForm_form__gYVSq",subtitle:"DemoForm_subtitle__3ISbO",block:"DemoForm_block__2OfXE",shortWrap:"DemoForm_shortWrap__2zY6J",confirmation:"DemoForm_confirmation__3BuZk",line:"DemoForm_line__SaUBS",conditions:"DemoForm_conditions__MmuPP",btn:"DemoForm_btn__h6BO-"}}},[[271,1,2]]]);
//# sourceMappingURL=main.15fff032.chunk.js.map