(this["webpackJsonpto-do-clone"]=this["webpackJsonpto-do-clone"]||[]).push([[0],{102:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},119:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},127:function(e,t,c){},128:function(e,t,c){},129:function(e,t,c){},130:function(e,t,c){},131:function(e,t,c){},132:function(e,t,c){},152:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),i=c(57),r=c.n(i),o=(c(67),c(68),c(11)),l=c(12),u=c(14),j=c(13),d=(c(69),function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"Background",children:this.props.children})}}]),c}(s.Component)),b=function(e){return e.children},h=(c(70),c(71),function(e){return Object(n.jsx)("div",{className:"Image"})}),p=(c(72),c(73),function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).changeHandler=function(t){var c=t.target.value;e.props.setData(c)},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(b,{children:Object(n.jsx)("div",{className:"Input",children:Object(n.jsxs)("div",{className:"Block",children:[Object(n.jsx)("label",{children:this.props.label}),Object(n.jsx)("input",{type:this.props.type,onChange:this.changeHandler,placeholder:this.props.placeholderText})]})})})}}]),c}(s.Component)),O=(c(74),c(75),function(e){return Object(n.jsx)(b,{children:Object(n.jsx)("button",{className:e.className,onClick:e.clicked,children:e.title})})}),f=c(58),m=c.n(f),x=c(10),v=c.n(x),k=v.a.get("access_token"),g=v.a.get("client"),y=v.a.get("uid"),w=m.a.create({baseURL:"http://herokutuan.herokuapp.com",headers:{Authorization:"Bearer ya29.a0AfH6SMC3w1tXe7lCUECmZhkZZ1tRIaeYTrcF1B9_Bk7PFJcfbuxds7nEqowZQNqBs4_JBrnA9a2dDuY_r58jnUl0zgtBUZz95iTKwlVhvVzWgpaJzsiqD7045KO-NdLCa1TT7ZhZcP6npf_Ofb_Y-fkN9ZVgGjG",uid:"".concat(y),"access-token":"".concat(k),client:"".concat(g),"Content-Type":"application/json"}}),N=(c(102),function(){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"Spinner",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})}),S=c(9),T=c(59),C=Object(T.a)({forceRefresh:!0}),D=c(27),L=c.n(D),_=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",placeholderEmail:"Email",placeholderPassword:"Enter Your Your Password",message:!1,loading:!1},e.setEmail=function(t){e.setState({email:t})},e.setPassword=function(t){e.setState({password:t})},e.loginHandler=function(){e.setState({loading:!0}),w.post("/auth/sign_in",e.state).then((function(t){e.setState({loading:!1});var c=t.headers;v.a.set("isLoggedIn",!0),v.a.set("access_token",c["access-token"]),v.a.set("client",c.client),v.a.set("uid",c.uid),C.push({pathname:"/"})})).catch((function(t){e.setState({loading:!1}),e.setState({message:t.response.data.errors})}))},e.keyPress=function(){e.loginHandler()},e}return Object(l.a)(c,[{key:"render",value:function(){return!0===v.a.get("isLoggedIn")?C.push("/"):Object(n.jsx)(b,{children:Object(n.jsx)(L.a,{handleKeys:["enter"],onKeyEvent:this.keyPress,children:Object(n.jsxs)("div",{className:"LoginForm",children:[Object(n.jsx)("h2",{className:"Title",children:"Login Form "}),this.state.message?this.state.message.map((function(e){return Object(n.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:"3px"},children:e},e)})):"",this.props.isRegistered?Object(n.jsx)("p",{style:{color:"#a8df65",textAlign:"center"},children:"Register Successfully, Log In to continue !"}):"",Object(n.jsx)(p,{className:"Email",placeholderText:this.state.placeholderEmail,label:"Email",type:"email",setData:this.setEmail}),Object(n.jsx)(p,{className:"Password",placeholderText:this.state.placeholderPassword,label:"Password",type:"password",setData:this.setPassword}),Object(n.jsxs)("div",{className:"ButtonGroup",children:[Object(n.jsx)(O,{className:"LoginButton",title:"Login",clicked:this.loginHandler}),Object(n.jsx)(O,{className:"RegisterButton",title:"Register",clicked:this.props.clickedRegisterButton})]}),this.state.loading?Object(n.jsx)("div",{className:"SpinnerContainer",children:Object(n.jsx)(N,{})}):""]})})})}}]),c}(s.Component),E=Object(S.f)(_),I=c(61),B=(c(106),function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).changeHandler=function(t){var c=t.target.value;e.props.setData(c)},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(b,{children:Object(n.jsx)("div",{className:"Input",children:Object(n.jsxs)("div",{className:"Block",children:[Object(n.jsx)("label",{children:this.props.label}),this.props.message?Object(n.jsx)("p",{}):Object(n.jsx)("p",{style:{color:"red"},children:"Password are not matching."}),Object(n.jsx)("input",{type:this.props.type,onChange:this.changeHandler,placeholder:this.props.placeholderText})]})})})}}]),c}(s.Component)),P=(c(107),function(e){return Object(n.jsx)(b,{children:Object(n.jsx)("button",{className:e.className,onClick:e.clicked,disabled:e.disabled,children:e.title})})}),A=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={firstName:"",lastName:"",email:"",password:"",placeholderFirstName:"Enter Your First Name",placeholderLastName:"Enter Your Last Name",placeholderEmail:"Example@gmail.com",placeholderPassword:"Enter Your Your Password",placeholderPasswordConfirm:"Confirm Your Password ",rightPassword:!0,loading:!1,message:!1,done:!1},e.setFirstname=function(t){e.setState({firstName:t})},e.setLastname=function(t){e.setState({lastName:t})},e.setEmail=function(t){e.setState({email:t})},e.setPassword=function(t){e.setState({password:t})},e.checkConfirm=function(t){0!==t.length&&e.setState({rightPassword:t===e.state.password})},e.registerHandler=function(){if(e.setState({loading:!0}),e.state.rightPassword){var t={name:e.state.firstName+e.state.lastName,email:e.state.email,password:e.state.password};w.post("/auth",t).then((function(t){e.setState({loading:!1}),v.a.set("successfulRegister",!0),e.setState({done:!0}),e.props.done(e.state.done)})).catch((function(t){e.setState({loading:!1});var c=t.response.data.errors.full_messages,s=Object.keys(c).map((function(e){return Number(e)})).map((function(e){return Object(I.a)(Array(c[e]))})).reduce((function(e,t){return e.concat(t)})).map((function(e){return Object(n.jsx)("p",{keys:e,style:{color:"red",textAlign:"center",marginTop:"3px"},children:e})}));e.setState({message:s})}))}},e.pressKey=function(){e.registerHandler()},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(b,{children:Object(n.jsx)(L.a,{handleKeys:["enter"],onKeyEvent:this.pressKey,children:Object(n.jsxs)("div",{className:"RegisterForm",children:[Object(n.jsx)("h2",{className:"Title",children:"Register Form"}),this.state.message,Object(n.jsx)(B,{label:"First Name",placeholderText:this.state.placeholderFirstName,type:"text",setData:this.setFirstname,message:!0}),Object(n.jsx)(B,{label:"Last Name",placeholderText:this.state.placeholderLastName,type:"text",setData:this.setLastname,message:!0}),Object(n.jsx)(B,{label:"Email",placeholderText:this.state.placeholderEmail,type:"email",setData:this.setEmail,message:!0}),Object(n.jsx)(B,{label:"Password",placeholderText:this.state.placeholderPassword,type:"password",setData:this.setPassword,message:!0}),Object(n.jsx)(B,{label:"Confirm Password",placeholderText:this.state.placeholderPasswordConfirm,type:"password",setData:this.checkConfirm,message:this.state.rightPassword}),Object(n.jsxs)("div",{className:"ButtonGroup",children:[Object(n.jsx)(P,{className:"RegisterButton",title:"Register",clicked:this.registerHandler}),Object(n.jsx)(P,{className:"LoginButton",clicked:this.props.clickedLoginButton,title:"Already have an account?"})]}),this.state.loading?Object(n.jsx)("div",{className:"SpinnerContainer",children:Object(n.jsx)(N,{})}):""]})})})}}]),c}(s.Component),R=function(e){return Object(n.jsx)("div",{className:"Main",children:e.show?Object(n.jsx)(E,{clickedRegisterButton:e.showRegisterForm,isRegistered:e.registered}):Object(n.jsx)(A,{clickedLoginButton:e.showLoginForm,done:e.successfulRegister})})},M=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={show:!0,successfulRegister:!1},e.showRegisterFormHandler=function(){e.setState({show:!1})},e.showLoginFormHandler=function(){e.setState({show:!0})},e.loginStep=function(t){t&&e.setState({show:!0,successfulRegister:!0})},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsxs)(b,{children:[Object(n.jsx)("div",{className:"Image",children:Object(n.jsx)(h,{})}),Object(n.jsx)("div",{className:"Welcome",children:Object(n.jsx)(R,{show:this.state.show,showRegisterForm:this.showRegisterFormHandler,showLoginForm:this.showLoginFormHandler,successfulRegister:this.loginStep,registered:this.state.successfulRegister})})]})}}]),c}(s.Component),H=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(d,{children:Object(n.jsx)(M,{})})}}]),c}(s.Component),F=c(35),Y=c(5),q=c.n(Y),J=c(8),W=c(2),K=(c(109),c(110),c(111),c(6)),Z=function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"Item",onClick:e.click,children:[Object(n.jsx)("div",{className:"Icon",children:Object(n.jsx)(K.a,{icon:e.icon,color:e.color})}),Object(n.jsx)("p",{className:"Label",children:e.label}),Object(n.jsx)("p",{className:"Number",children:e.number})]})})},z=c(3);var U=function(e){var t=!0,c=!1,s=!1;return 0===e.controller?(t=!0,c=!1,s=!1,!1):1===e.controller?(t=!1,c=!0,s=!1,!1):2===e.controller?(t=!1,c=!1,s=!0,!1):(t=!1,c=!1,s=!1,!0),Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"SideBar",children:[t?Object(n.jsx)(Z,{icon:z.c,label:"Todo",number:e.tasklists,color:"#000000",click:e.clickTodo}):Object(n.jsx)(Z,{icon:z.c,label:"Todo",number:e.tasklists,color:"white",click:e.clickTodo}),c?Object(n.jsx)(Z,{icon:z.e,label:"Inbox",number:e.shared,color:"#000000",click:e.clickInBox}):Object(n.jsx)(Z,{icon:z.e,label:"Inbox",number:e.shared,color:"white",click:e.clickInBox}),s?Object(n.jsx)(Z,{icon:z.f,label:"Share",number:e.share,color:"#000000",click:e.clickShare}):Object(n.jsx)(Z,{icon:z.f,label:"Share",number:e.share,color:"white",click:e.clickShare})]})})};c(114),c(115),c(116);var G=function(e,t){var c=Object(s.useState)(e.check),a=Object(W.a)(c,2),i=a[0],r=a[1],o=Object(s.useState)(!1),l=Object(W.a)(o,2),u=l[0],j=l[1],d=Object(s.useState)(e.name),h=Object(W.a)(d,2),p=h[0],O=h[1],f=Object(s.useState)(e.name),m=Object(W.a)(f,2),x=m[0],v=m[1],k=Object(s.useState)(!1),g=Object(W.a)(k,2),y=g[0],N=g[1];return Object(s.useEffect)((function(){function t(){return(t=Object(J.a)(q.a.mark((function t(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.patch("/task_lists/".concat(e.tasklistId,"/todos/").concat(e.id),{done:"".concat(i)});case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[i]),Object(n.jsx)(b,{children:y?"":Object(n.jsxs)("div",{className:"TodoMain",children:[Object(n.jsx)("div",{className:"TodoMainCheckbox",children:u?Object(n.jsx)("input",{className:"Task",type:"text",value:x,onChange:function(e){var t=e.target.value;v(t)}}):Object(n.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around"},children:[Object(n.jsx)("input",{type:"checkbox",checked:i,onChange:function(){return r(!i)}}),Object(n.jsx)("label",{className:"Task",style:{fontFamily:"inherit",fontWeight:"100"},children:p})]})}),Object(n.jsxs)("div",{className:"TodoMainIcon",children:[u?Object(n.jsx)(K.a,{className:"checkIcon",icon:z.b,style:{cursor:"pointer"},onClick:function(){w.patch("/task_lists/".concat(e.tasklistId,"/todos/").concat(e.id),{name:"".concat(x)}).then((function(e){j(!1),O(x)})).catch((function(e){console.log(e)}))}}):Object(n.jsx)(K.a,{className:"editIcon",icon:z.l,style:{cursor:"pointer"},onClick:function(){j(!0)}}),u?Object(n.jsx)(K.a,{className:"timesIcon",icon:z.k,"data-toggle":"tooltip","data-placement":"top",title:"Add a Task",style:{cursor:"pointer"},onClick:function(){j(!1),v(p)}}):Object(n.jsx)(K.a,{className:"cancelIcon","data-toggle":"tooltip","data-placement":"bottom",title:"Delete ToDo List",icon:z.m,style:{cursor:"pointer"},onClick:function(){w.delete("/task_lists/".concat(e.tasklistId,"/todos/").concat(e.id)).then((function(e){N(!0)})).catch((function(e){console.log(e)}))}})]})]})})};c(117);var Q=function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"AddTodoMain",children:[Object(n.jsx)("input",{type:"text","data-toggle":"tooltip","data-placement":"top",title:"add task name and press icon Plus to submit",placeholder:"Add Task...",onChange:function(t){var c=t.target.value;e.setData(c)},value:e.value}),Object(n.jsx)(K.a,{icon:z.g,onClick:e.click,className:"AddTodoMainBtn"})]})})};c(118);var V=function(e){var t=Object(s.useState)([]),c=Object(W.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)(!1),o=Object(W.a)(r,2),l=o[0],u=o[1],j=Object(s.useState)(e.name),d=Object(W.a)(j,2),h=d[0],p=d[1],O=Object(s.useState)(e.name),f=Object(W.a)(O,2),m=f[0],x=f[1],v=Object(s.useState)(!1),k=Object(W.a)(v,2),g=k[0],y=k[1],N=Object(s.useState)([]),S=Object(W.a)(N,2),T=(S[0],S[1],Object(s.useState)("")),C=Object(W.a)(T,2),D=C[0],L=C[1],_=Object(s.useState)(""),E=Object(W.a)(_,2),I=E[0],B=E[1],P=Object(s.useState)(!1),A=Object(W.a)(P,2),R=A[0],M=(A[1],Object(s.useState)(!1)),H=Object(W.a)(M,2),F=(H[0],H[1],Object(s.useState)("")),Y=Object(W.a)(F,2),Z=(Y[0],Y[1],Object(s.useState)([])),U=Object(W.a)(Z,2),V=(U[0],U[1]);Object(s.useEffect)((function(){function t(){return(t=Object(J.a)(q.a.mark((function t(){var c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.request("/task_lists/".concat(e.id,"/todos"));case 3:c=t.sent,i(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[l]),Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/users");case 3:t=e.sent,V(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){function t(){return(t=Object(J.a)(q.a.mark((function t(){var c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.request("/users");case 3:c=t.sent,c.data.map((function(t){t.id===e.user_id&&B(t.email)})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var X=function(e){y(!1),p(m)},$=function(e){""!==D&&(u(!0),w.post("/task_lists/".concat(e,"/todos"),JSON.stringify({name:"".concat(D)})).then((function(e){L(""),u(!1)})).catch((function(e){console.log(e)})))};return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"TaskListMain",children:[Object(n.jsxs)("div",{className:"TaskListMainName",children:[g?Object(n.jsx)("input",{type:"text",style:{opacity:"1"},value:h,onChange:function(e){var t=e.target.value;p(t)}}):Object(n.jsxs)("h2",{style:{opacity:"1"},children:[m," ",Object(n.jsxs)("span",{style:{color:"black",fontSize:"10px"},children:["(",a.length,")"]})]}),Object(n.jsxs)("div",{className:"TaskListMainNameIcon",children:[g?Object(n.jsx)(K.a,{className:"checkIcon",icon:z.b,onClick:function(){w.patch("/task_lists/".concat(e.id),{name:"".concat(h)}).then((function(e){y(!1),x(h)})).catch((function(e){console.log(e)}))}}):Object(n.jsx)(K.a,{className:"toolsIcon",icon:z.l,onClick:function(){y(!0)}}),g?Object(n.jsx)(K.a,{className:"timesIcon",icon:z.k,onClick:X}):Object(n.jsx)(K.a,{icon:z.k,onClick:X,style:{display:"none"}})]})]}),Object(n.jsx)("div",{className:"TodosMain",children:a.map((function(t){return Object(n.jsx)(G,{check:t.done,name:t.name,id:t.id+t.name,tasklistId:e.id},e.id)}))}),e.edit?Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(Q,{setData:L,click:function(){return $(e.id)},value:D}),Object(n.jsx)("div",{className:"DeleteBtn",children:Object(n.jsx)(K.a,{icon:z.n,color:"red",onClick:e.clickDeleteBtn})})]}),Object(n.jsx)("h6",{style:{opacity:"0"},children:"You have to permission to edit!!!"})]}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{style:{opacity:"0"},children:[Object(n.jsx)(Q,{setData:L,click:function(){return $(e.id)},value:D}),Object(n.jsx)("div",{className:"DeleteBtn",children:Object(n.jsx)(K.a,{icon:z.n,color:"red",onClick:e.clickDeleteBtn})})]}),Object(n.jsx)("h6",{style:{opacity:"1"},children:"You have to permission to edit!!!"})]}),e.user_id?Object(n.jsxs)("h6",{style:{textAlign:"center",color:"black"},children:["Shared by ",I]}):null,R?Object(n.jsxs)("h6",{style:{textAlign:"center",color:"black"},children:["Sharing with ",R]}):null]})})},X=c(153),$=c(154);var ee=function(e){var t=Object(s.useState)([e.tasklists]),c=Object(W.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)(!1),o=Object(W.a)(r,2),l=o[0],u=o[1];Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/task_lists");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[l]),Object(s.useEffect)((function(){function t(){return(t=Object(J.a)(q.a.mark((function t(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i(e.tasklists);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.tasklists]);var j=a.map((function(e){return Object(n.jsx)(X.a,{lg:3,children:Object(n.jsx)(V,{name:e.name,id:e.id,clickDeleteBtn:function(){return t=e.id,u(!0),void w.delete("/task_lists/".concat(t)).then((function(e){u(!1)})).catch((function(e){console.log(e)}));var t},edit:!0},e.id+e.name)},e.id)}));return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"MainDisplay",children:[e.children,Object(n.jsx)("div",{className:"TaskListArea",children:Object(n.jsx)($.a,{children:j})})]})})},te=(c(119),c(120),c(121),function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"DropMenuItem",onClick:e.clicked,children:[Object(n.jsx)(K.a,{icon:e.icon}),Object(n.jsx)("p",{children:e.label})]})})}),ce=function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"DropMenu",children:[Object(n.jsx)(te,{label:"Your Profile",icon:z.o}),Object(n.jsx)(te,{label:"Log Out",icon:z.j,clicked:e.clickedSignOutButton})]})})},ne=(c(122),function(e){return Object(n.jsx)(b,{children:Object(n.jsx)("div",{className:"Logo",onClick:e.clickedLogo,children:Object(n.jsx)("p",{children:"ToDo List"})})})}),se=(c(123),c(124),function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"Sayhi",children:[Object(n.jsx)("p",{children:e.name}),Object(n.jsx)("div",{className:"DropDown",onClick:e.clickedDropDown,children:Object(n.jsx)(K.a,{icon:z.a,color:"black"})})]})})}),ae=(c(125),function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"DrawerToggle",onClick:e.clicked,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})}),ie=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={showDropMenu:!1},e.showDropMenu=function(){e.setState({showDropMenu:!e.state.showDropMenu})},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"NavigationBar",children:[Object(n.jsx)(ae,{}),Object(n.jsx)(ne,{clickedLogo:this.props.refeshPage}),Object(n.jsx)(se,{clickedDropDown:this.showDropMenu,name:"Setting"}),this.state.showDropMenu?Object(n.jsx)(ce,{clickedSignOutButton:this.props.clickedSignOutButton}):""]})})}}]),c}(s.Component),re=(c(126),c(127),function(e){return Object(n.jsx)(b,{children:e.show?Object(n.jsx)("div",{className:"BackDrop",onClick:e.cancel}):null})}),oe=function(e){return Object(n.jsxs)(b,{children:[Object(n.jsx)(re,{show:e.show,cancel:e.cancel}),Object(n.jsx)("div",{className:"Modal",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]})};c(128),c(129);var le=function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"InputTaskListArea",children:[Object(n.jsx)("label",{children:e.name}),Object(n.jsx)("input",{type:"text",onChange:function(t){var c=t.target.value;e.setData(c)}})]})})},ue=(c(130),function(e){return Object(n.jsx)("p",{className:"AddButtonSubmit",onClick:e.click,children:"Submit"})});var je=function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"AddTaskListPanel",children:[Object(n.jsx)("h2",{children:"Quick Add Task"}),e.message?Object(n.jsx)("p",{style:{color:"red"},children:"You need to enter ToDo List name"}):null,Object(n.jsx)(le,{name:"ToDo List",setData:e.setTaskListName}),Object(n.jsx)(le,{name:"Task Name",setData:e.setTodo1Name}),Object(n.jsx)(ue,{click:e.submitHandler}),e.loading?Object(n.jsx)("div",{className:"SpinnerContainer",children:Object(n.jsx)(N,{})}):null]})})};c(131);var de=function(e){var t=Object(s.useState)([e.tasklists]),c=Object(W.a)(t,2),a=c[0],i=c[1];Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/shared");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var r=a.map((function(e){return Object(n.jsx)(X.a,{lg:3,children:Object(n.jsx)(V,{name:e.name,id:e.id,edit:e.is_write,user_id:e.user_id},e.id+e.name)},e.id)}));return Object(n.jsx)(b,{children:Object(n.jsx)("div",{className:"MainDisplay",children:Object(n.jsx)("div",{className:"TaskListArea",children:Object(n.jsx)($.a,{children:r})})})})},be=c(39);var he=function(e){var t=Object(s.useState)(e.is_write),c=Object(W.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)(!1),o=Object(W.a)(r,2),l=o[0],u=o[1],j=Object(s.useState)([]),d=Object(W.a)(j,2),b=d[0],h=d[1],p=e.user;Object(s.useEffect)((function(){function t(){return(t=Object(J.a)(q.a.mark((function t(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.put("/task_lists/".concat(e.taskListId,"/share/").concat(e.user_id),{share_task:{is_write:"".concat(a)}});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[a]),Object(s.useEffect)((function(){function t(){return(t=Object(J.a)(q.a.mark((function t(){var c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.request("/task_lists/".concat(e.taskListId,"/todos"));case 3:c=t.sent,h(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.taskListId]);var O=Object(n.jsxs)("div",{className:"TaskListMain",style:{width:"250px",margin:"10px"},children:[Object(n.jsx)("div",{className:"TaskListMainName",children:Object(n.jsxs)("h2",{children:[e.name,"  ",Object(n.jsxs)("span",{style:{color:"black",fontSize:"10px"},children:["(",b.length,")"]})]})}),Object(n.jsx)("div",{className:"TodosMain",children:b.map((function(t){return Object(n.jsx)(G,{check:t.done,name:t.name,id:t.id,tasklistId:e.id},e.id)}))}),Object(n.jsx)("span",{style:{color:"red",marginBottom:"20px"},children:p[e.id]}),Object(n.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around",width:"150px"},children:[Object(n.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return i(!a)}}),Object(n.jsx)("label",{style:{fontFamily:"inherit",fontWeight:"100"},children:"Edit Permission"})]}),Object(n.jsx)("div",{className:"DeleteBtn",children:Object(n.jsx)(K.a,{icon:z.n,color:"red",onClick:function(){try{w.delete("task_lists/".concat(e.taskListId,"/share/").concat(e.user_id)),u(!0)}catch(t){console.log(t)}}})})]});return l?null:O};var pe=function(e){var t=Object(s.useState)({}),c=Object(W.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)([]),o=Object(W.a)(r,2),l=o[0],u=o[1];Object(s.useEffect)((function(){function t(){return(t=Object(J.a)(q.a.mark((function t(){var c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.request("/task_lists/".concat(e.id,"/share"));case 3:c=t.sent,u(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t,c,n,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/users");case 3:t=e.sent,c=t.data,n=c.map((function(e){var t=e.id,c={id:e.email};return j(c,"id",t),c})),s=n.reduce((function(e,t){return Object(be.a)(Object(be.a)({},e),t)})),i(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var j=function(e,t,c){t!==c&&(Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(e,t)),delete e[t])},d=l.map((function(t){return Object(n.jsx)(he,{user:a,id:t.user_id,taskListId:t.task_list_id,is_write:t.is_write,name:e.name,user_id:t.user_id},t.user_id)}));return Object(n.jsx)(b,{children:Object(n.jsx)("div",{style:{marginBottom:"15px",padding:"10px",display:"flex",overflow:"scroll",maxWidth:"1200px"},children:d})})};var Oe=function(e){var t=Object(s.useState)([e.tasklists]),c=Object(W.a)(t,2),a=c[0],i=(c[1],a.reduce((function(e){return e})).map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(pe,{name:e.name,id:e.id},e.id+e.name)},e.id)})));return Object(n.jsx)(b,{children:Object(n.jsx)("div",{className:"MainDisplay",children:Object(n.jsx)("div",{className:"TaskListArea",children:i})})})};c(132);var fe=function(e){var t=!1;return e.correctEmail&&e.correctTaskList&&(t=!0),Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"AddTaskListPanel ShareTaskListPanel",children:[Object(n.jsx)("h2",{children:"Share ToDo List"}),e.message?Object(n.jsx)("p",{style:{color:"red"},children:"You need to enter ToDo name"}):null,Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(n.jsx)(le,{className:"share_title",name:"Email's Receiver",setData:e.setUserEmail}),e.correctEmail?Object(n.jsx)(K.a,{icon:z.b,color:"#00ff00"}):Object(n.jsx)(K.a,{icon:z.k,color:"#ff0000"})]}),Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(n.jsx)(le,{className:"share_title",name:"ToDo Name \xa0 \xa0 \xa0 \xa0 ",setData:e.setTasklistName}),e.correctTaskList?Object(n.jsx)(K.a,{icon:z.b,color:"#00ff00"}):Object(n.jsx)(K.a,{icon:z.k,color:"#ff0000"})]}),Object(n.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},onChange:function(t){var c=t.target.value;e.setData(c)}.bind(this),children:[Object(n.jsx)("label",{children:"Permission"}),Object(n.jsx)("input",{type:"radio",value:"editor",name:"name"}),"Write",Object(n.jsx)("input",{type:"radio",value:"watcher",name:"name"}),"Read Only"]}),Object(n.jsx)("button",{className:"share_button",onClick:e.submitHandler,disabled:!t,style:{width:"30%",padding:"5px",marginLeft:"70%",backgroundColor:"#5995fd",color:"white",outline:"none",border:"none"},children:"Submit"}),e.loading?Object(n.jsx)("div",{className:"SpinnerContainer",children:Object(n.jsx)(N,{})}):null]})})};c(133);var me=function(e){var t=Object(s.useState)([]),c=Object(W.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)(!1),o=Object(W.a)(r,2),l=o[0],u=o[1],j=Object(s.useState)(!1),d=Object(W.a)(j,2),h=d[0],p=d[1],O=Object(s.useState)(""),f=Object(W.a)(O,2),m=f[0],x=f[1],k=Object(s.useState)(""),g=Object(W.a)(k,2),y=g[0],N=g[1],S=Object(s.useState)(""),T=Object(W.a)(S,2),D=T[0],L=T[1],_=Object(s.useState)(!1),E=Object(W.a)(_,2),I=E[0],B=E[1],P=Object(s.useState)(""),A=Object(W.a)(P,2),R=(A[0],A[1],Object(s.useState)([])),M=Object(W.a)(R,2),H=M[0],F=M[1],Y=Object(s.useState)([]),Z=Object(W.a)(Y,2),G=Z[0],Q=Z[1],V=Object(s.useState)(0),X=Object(W.a)(V,2),$=X[0],te=X[1],ce=Object(s.useState)(!1),ne=Object(W.a)(ce,2),se=ne[0],ae=ne[1],re=Object(s.useState)(""),le=Object(W.a)(re,2),ue=(le[0],le[1],Object(s.useState)("")),be=Object(W.a)(ue,2),he=be[0],pe=be[1],me=Object(s.useState)(!1),xe=Object(W.a)(me,2),ve=xe[0],ke=xe[1],ge=Object(s.useState)(!1),ye=Object(W.a)(ge,2),we=ye[0],Ne=ye[1],Se=Object(s.useState)([]),Te=Object(W.a)(Se,2),Ce=Te[0],De=Te[1],Le=Object(s.useState)(!1),_e=Object(W.a)(Le,2),Ee=_e[0],Ie=_e[1],Be=Object(s.useState)(""),Pe=Object(W.a)(Be,2),Ae=Pe[0],Re=Pe[1],Me=Object(s.useState)(!1),He=Object(W.a)(Me,2);return He[0],He[1],Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/task_lists");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]),Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/task_lists");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t,c,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/task_lists");case 3:t=e.sent,c=t.data,n=[],c.map((function(e){if(0!==e.share_count){var t={id:e.id,name:e.name};n.push(t)}})),Q(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]),Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/shared");case 3:t=e.sent,F(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/users");case 3:t=e.sent,De(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"WorkPlace",children:[Object(n.jsx)(U,{clickTodo:function(){te(0)},clickInBox:function(){te(1)},clickShare:function(){te(2)},clickAdd:function(){te(3)},tasklists:a.length,share:G.length,shared:H.length,controller:$}),Object(n.jsxs)("div",{className:"ActionArea",children:[Object(n.jsx)(ie,{refeshPage:function(){C.push("/HomePage")},clickedSignOutButton:function(){v.a.set("isLoggedIn",!1),v.a.set("access_token",""),v.a.set("uid",""),v.a.set("client",""),C.push("/account")}}),0===$?Object(n.jsxs)(ee,{tasklists:a,children:[Object(n.jsx)(oe,{show:I,cancel:function(){p(!1),u(!1),B(!1)},children:Object(n.jsx)(je,{setTaskListName:function(e){x(e.trim())},setTodo1Name:function(e){N(e.trim())},setTodo2Name:function(e){L(e.trim())},submitHandler:function(){p(!0),""===m?(u(!0),p(!1)):w.post("/task_lists",JSON.stringify({name:"".concat(m)})).then((function(e){var t=e.data.id;if(""===y){if(""===D)return p(!1),u(!1),void B(!1);w.post("/task_lists/".concat(t,"/todos"),JSON.stringify({name:"".concat(D)})).then((function(e){p(!1),u(!1),B(!1)})).catch((function(e){console.log(e)}))}else w.post("/task_lists/".concat(t,"/todos"),JSON.stringify({name:"".concat(y)})).then((function(e){if(""===D)return p(!1),u(!1),void B(!1);w.post("/task_lists/".concat(t,"/todos"),JSON.stringify({name:"".concat(D)})).then((function(e){p(!1),u(!1),B(!1)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},loading:h,message:l})}),Object(n.jsx)(oe,{show:se,cancel:function(){p(!1),u(!1),ae(!1),Ne(!1),Ie(!1),pe(""),ke(!1),Re("")},children:Object(n.jsx)(fe,{setUserEmail:function(e){!0===Ee&&Ie(!1),Ce.map((function(t){t.email===e&&(Ie(!0),pe(t.id))}))},setTasklistName:function(e){var t=e;!0===we&&Ne(!1),a.map((function(e){if(e.name===t)return Ne(!0),void Re(e.id)}))},submitHandler:function(){p(!0),w.post("/task_lists/".concat(Ae,"/share"),{user_id:"".concat(he),is_write:"".concat(ve)}).then((function(e){p(!1),ae(!1)})).catch((function(e){console.log(e)}))},loading:h,correctTaskList:we,correctEmail:Ee,setData:function(e){"editor"===e?ke(!0):"watcher"===e&&ke(!1)}})}),Object(n.jsxs)("div",{className:"TaskListOption",children:[Object(n.jsxs)("div",{className:"AddToDo",children:[Object(n.jsx)("h3",{children:"Add"}),Object(n.jsx)(K.a,{className:"AddIcon","data-toggle":"tooltip","data-placement":"top",title:"Quick Add ToDo",icon:z.h,onClick:function(){B(!0)}})]}),Object(n.jsxs)("div",{className:"ShareToDo",children:[Object(n.jsx)("h3",{children:"Share"}),Object(n.jsx)(K.a,{className:"ShareIcon",icon:z.i,"data-toggle":"tooltip","data-placement":"top",title:"Share ToDo with Email",onClick:function(){ae(!0)}})]})]}),Object(n.jsxs)("div",{className:"Date",children:[Object(n.jsx)("span",{class:"simple_content",children:"Today"}),Object(n.jsx)("div",{id:"date"})]})]}):null,1===$?Object(n.jsx)(de,{tasklists:H}):null,2===$?Object(n.jsx)(Oe,{tasklists:G}):null]})]})})},xe=v.a.get("isLoggedIn"),ve=function(){return!1===xe?C.push("/account"):Object(n.jsx)("div",{className:"HomePage",children:Object(n.jsx)(me,{})})};var ke=function(){return Object(n.jsx)(F.a,{basename:"/ToDo-List-React-App",HashHistory:C,children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(S.c,{children:[Object(n.jsx)(S.a,{exact:!0,path:"/ToDo-List-React-App/account",component:H}),Object(n.jsx)(S.a,{exact:!0,path:"/ToDo-List-React-App/",component:ve})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(ke,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){}},[[152,1,2]]]);
//# sourceMappingURL=main.e0e36a8b.chunk.js.map