(self.webpackChunkFrontendReact=self.webpackChunkFrontendReact||[]).push([[7142],{37142:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>V});var n=r(86902),a=r.n(n),s=r(14310),o=r.n(s),l=r(20116),c=r.n(l),i=r(34074),u=r.n(i),d=r(78914),p=r.n(d),f=r(39649),m=r.n(f),E=r(20368),R=r.n(E),h=r(63978),S=r.n(h),g=r(1068),w=r.n(g),v=r(20530),P=r(26849),y=r(30081),Z=r(97647),T=r(81010),b=r(10891),O=r(71509),D=r(77766),A=r.n(D),C=r(67294),L=r(49140),N=r(44012),W=r(64593),F=r(43011),M=r(61156),x=r(76016),k=r(50045),_=r(33644),K=r(15094);const U=(0,r(50049).vU)({passwordPlaceholder:{id:"RESETPASSWORD.PLACEHOLDER_PASSWORD",defaultMessage:"Password",description:"Placeholder for reset password input"},title:{id:"RESETPASSWORD.TITLE",defaultMessage:"Password Reset",description:"Reset password page title"}});var B,G=r(56474),I=r.n(G);function q(e,t){var r=a()(e);if(o()){var n=o()(e);t&&(n=c()(n).call(n,(function(t){return u()(e,t).enumerable}))),r.push.apply(r,n)}return r}var V=(0,L.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r,n=null!=arguments[t]?arguments[t]:{};if(t%2)p()(r=q(Object(n),!0)).call(r,(function(t){(0,O.Z)(e,t,n[t])}));else if(m())R()(e,m()(n));else{var a;p()(a=q(Object(n))).call(a,(function(t){S()(e,t,u()(n,t))}))}}return e}({},(0,M.Bx)(e))}),{clearResetPasswordError:x.gQ,requestResetPassword:x.VK,clearResetPasswordState:x.oZ})(B=(0,F.Z)()(B=function(e){(0,Z.Z)(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!w())return!1;if(w().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(w()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,b.Z)(t);if(r){var a=(0,b.Z)(this).constructor;e=w()(n,arguments,a)}else e=n.apply(this,arguments);return(0,T.Z)(this,e)});function a(){var e,t;(0,v.Z)(this,a);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return t=n.call.apply(n,A()(e=[this]).call(e,s)),(0,O.Z)((0,y.Z)(t),"handleSubmit",(function(e){e.preventDefault(),(0,t.props.requestResetPassword)({password:t.password.value}),document.activeElement&&document.activeElement.blur()})),(0,O.Z)((0,y.Z)(t),"handleFromKeyup",(function(){var e=t.props,r=e.clearResetPasswordError;e.isError&&r()})),t}return(0,P.Z)(a,[{key:"componentWillUnmount",value:function(){this.props.clearResetPasswordState()}},{key:"render",value:function(){var e=this,t=this.props,r=t.intl,n=t.isFetching,a=t.resetKey,s=t.isError,o=t.isReset,l=t.username,c=r.formatMessage(U.title);return C.createElement(_.C,null,C.createElement("div",{className:"reset-password-container form-container"},C.createElement(W.Z,function(e){var t=e.title;return I()({title:t,meta:[{name:"robots",content:"noindex"}]})}({title:c})),o?C.createElement(C.Fragment,null,C.createElement("header",null,C.createElement("h1",{className:"title"},c)),C.createElement("p",null,C.createElement(N.Z,{id:"RESETPASSWORD.SUCCESS_MESSAGE",defaultMessage:"Congratulations! You have changed your password successfully",description:"Reset password page - success confirmation text"})),C.createElement(k.ZP,{className:"reset-password__action-button",contentType:k.Tr.LINK,linkProps:{url:"/"},type:k.V5.FILLED},C.createElement(N.Z,{id:"RESETPASSWORD.ACKNOWLEDGE_BUTTON",defaultMessage:"Proceed to Gfycat",description:"Reset password page - acknowledge button text"}))):a&&l||s?C.createElement(C.Fragment,null,C.createElement("header",null,C.createElement("h1",{className:"title"},C.createElement(N.Z,{id:"RESETPASSWORD.GREETING",defaultMessage:"Hello, {username}",values:{username:l},description:"Reset password page - greeting text"}))),C.createElement("form",{onSubmit:this.handleSubmit,onKeyUp:this.handleFromKeyup},C.createElement(K.ZP,{autoCapitalize:"off",autoCorrect:"off",autoComplete:"off",autoFocus:!0,className:"form-input",error:{value:s,message:C.createElement(N.Z,{id:"RESETPASSWORD.ERROR",defaultMessage:"Reset password error",description:"Reset password page - error text"})},fullWidth:!0,getRef:function(t){return e.password=t},minLength:"4",maxLength:"64",placeholder:r.formatMessage(U.passwordPlaceholder),type:"password",required:!0}),C.createElement(k.ZP,{className:"reset-password__action-button",disabled:s,pending:n,submit:!0,type:k.V5.FILLED},C.createElement(N.Z,{id:"RESETPASSWORD.RESET_BUTTON",defaultMessage:"Reset Password",description:"Reset password page - reset button text"})))):null))}}]),a}(C.Component))||B)||B}}]);