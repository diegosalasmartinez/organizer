(this.webpackJsonporganizer_client=this.webpackJsonporganizer_client||[]).push([[0],{209:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(29),r=a.n(s),o=a(7),c=a(8),i=a(10),l=a(9),d=a(21),h=a(12),u=a(20),m=a(15),j=a.n(m),p=a(14),b=a(0);a(27).config();var O=new p.a,f=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t,a=e.target,s=a.name,r=a.value;n.setState((t={},Object(u.a)(t,s,r),Object(u.a)(t,"userFailed",!1),t))},n.login=function(e){e.preventDefault();var t=n.state,a=t.username,s=t.password;j.a.get("".concat("https://diegosalas-organizer.herokuapp.com","/users/login?username=").concat(a,"&password=").concat(s)).then((function(e){return e.data})).then((function(e){if(1===e.length){var t=e[0];O.set("id",t._id,{path:"/"}),O.set("username",t.username,{path:"/"}),O.set("name",t.name,{path:"/"}),O.set("lastName",t.lastName,{path:"/"}),O.set("email",t.email,{path:"/"}),window.location.href="./home"}else n.setState({userFailed:!0})})).catch((function(e){return console.log(e)}))},n.state={username:"",password:"",userFailed:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){O.get("username")&&(window.location.href="./home")}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:"Login"}),Object(b.jsx)("br",{}),Object(b.jsxs)("form",{onSubmit:this.login,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"usernameInput",children:"Username"}),Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",id:"usernameInput",name:"username",value:this.state.username,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"passwordInput",children:"Password"}),Object(b.jsx)("input",{type:"password",required:!0,className:"form-control",id:"passwordInput",name:"password",value:this.state.password,onChange:this.handleChange})]}),this.state.userFailed&&Object(b.jsx)("p",{style:{color:"red"},children:"User and password don't match"}),Object(b.jsxs)("div",{children:["\xbfDon't have an account?",Object(b.jsx)("span",{children:" "}),Object(b.jsx)(d.b,{to:"./register-user",children:"Sign up"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"submit",value:"Enter",className:"btn btn-primary"})})]})]})}}]),a}(n.Component),x=a(30),g=function(e,t){var a,n={};return e.name||(n.name="What's your name?"),e.lastName||(n.lastName="What's your lastname?"),t.includes(e.username)&&(n.username="This username is not available"),a=e.email,/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)||(n.email="Email is not valid"),e.password.length<8&&(n.password="Your password must contain at least 5 letters"),e.password!==e.passwordConfirmation&&(n.passwordConfirmation="Passwords don't match"),n},v=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,s=t.value;n.setState(Object(u.a)({},a,s));var r=n.state.errors;r[a]="",n.setState({errors:r})},n.showError=function(e){if(n.state.errors[e])return Object(b.jsx)("p",{style:{color:"red"},children:n.state.errors[e]})},n.onSubmit=function(e){e.preventDefault();var t=n.state,a=t.users,s=Object(x.a)(t,["users"]),r=(s.errors,Object(x.a)(s,["errors"])),o=g(r,a);Object.keys(o).length||n.props.createUser(r),n.setState({errors:o})},n.state={name:"",lastName:"",email:"",username:"",password:"",passwordConfirmation:"",users:[],errors:{name:"",lastName:"",email:"",username:"",password:"",passwordConfirmation:""}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat("https://diegosalas-organizer.herokuapp.com","/users")).then((function(t){var a=t.data.map((function(e){return e.username}));e.setState({users:a})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:"Create New User"}),Object(b.jsx)("br",{}),Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsxs)("div",{className:"form-row",children:[Object(b.jsxs)("div",{className:"form-group col-md-6",children:[Object(b.jsx)("label",{htmlFor:"nameInput",children:"Name"}),Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",id:"nameInput",name:"name",value:this.state.name,onChange:this.handleChange})]}),this.showError("name"),Object(b.jsxs)("div",{className:"form-group col-md-6",children:[Object(b.jsx)("label",{htmlFor:"lastNameInput",children:"Lastname"}),Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",id:"lastNameInput",name:"lastName",value:this.state.lastName,onChange:this.handleChange})]}),this.showError("lastName")]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"emailInput",children:"Email"}),Object(b.jsx)("input",{type:"email",required:!0,className:"form-control",id:"emailInput",name:"email",value:this.state.email,onChange:this.handleChange})]}),this.showError("email"),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"usernameInput",children:"Username"}),Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",id:"usernameInput",name:"username",value:this.state.username,onChange:this.handleChange})]}),this.showError("username"),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"passwordInput",children:"Password"}),Object(b.jsx)("input",{type:"password",required:!0,className:"form-control",id:"passwordInput",name:"password",value:this.state.password,onChange:this.handleChange})]}),this.showError("password"),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"passwordConfirmationInput",children:"Confirm password"}),Object(b.jsx)("input",{type:"password",required:!0,className:"form-control",id:"passwordConfirmationInput",name:"passwordConfirmation",value:this.state.passwordConfirmation,onChange:this.handleChange})]}),this.showError("passwordConfirmation"),Object(b.jsxs)("div",{children:["\xbfHave an account?",Object(b.jsx)("span",{children:" "}),Object(b.jsx)(d.b,{to:"./",children:"Log in"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"submit",value:"Create User",className:"btn btn-primary"})})]})]})}}]),a}(n.Component);a(27).config();var w=new p.a,k=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).createUser=function(e){e.passwordConfirmation;var t=Object(x.a)(e,["passwordConfirmation"]);j.a.post("".concat("https://diegosalas-organizer.herokuapp.com","/users/add"),t).then((function(e){var t=e.data;w.set("id",t._id,{path:"/"}),w.set("username",t.username,{path:"/"}),w.set("password",t.password,{path:"/"}),w.set("name",t.name,{path:"/"}),w.set("lastName",t.lastName,{path:"/"}),w.set("email",t.email,{path:"/"}),window.location.href="./home"})).catch((function(e){return console.log(e)}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){w.get("username")&&(window.location.href="./home")}},{key:"render",value:function(){return Object(b.jsx)(v,{createUser:this.createUser})}}]),a}(n.Component),N=new p.a,y=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).logout=function(e){e.preventDefault(),N.remove("id",{path:"/"}),N.remove("username",{path:"/"}),N.remove("name",{path:"/"}),N.remove("lastName",{path:"/"}),N.remove("email",{path:"/"}),window.location.href="./"},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(d.b,{to:"/home",className:"navbar-brand",children:"Organizer"}),Object(b.jsx)("div",{className:"collpase navbar-collapse",id:"navbarNavAltMarkup",children:Object(b.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(b.jsx)("li",{className:"navbar-item",children:Object(b.jsx)(d.b,{to:"/home",className:"nav-link",children:"Tasks"})}),Object(b.jsx)("li",{className:"navbar-item",children:Object(b.jsx)(d.b,{to:"/home/create",className:"nav-link",children:"Create Task"})}),Object(b.jsx)("li",{className:"navbar-item",children:Object(b.jsx)(d.b,{to:"/home/profile",className:"nav-link",children:"Profile"})})]})}),Object(b.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(b.jsx)("button",{onClick:this.logout,className:"btn btn-outline-success",children:"Log out"})})]})}),Object(b.jsx)("br",{})]})}}]),a}(n.Component),C=a(31),I=a(33),D=0,S=function(e,t){var a=e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2),n=t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2);D=a<n?-1:a>n?1:0},T=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).updateTask=function(){e.props.updateTask(e.props.task._id)},e.deleteTask=function(){e.props.deleteTask(e.props.task._id)},e.finishTask=function(){e.props.finishTask(e.props.task._id)},e.showImportance=function(){var t=e.props.task.importance;return Array.apply(null,Array(t)).map((function(e,t){return Object(b.jsx)(C.a,{icon:I.c},t)}))},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:this.props.task.title}),Object(b.jsx)("td",{children:this.props.task.description}),Object(b.jsx)("td",{children:this.props.task.duration}),Object(b.jsx)("td",{children:this.showImportance()}),Object(b.jsx)("td",{children:(e=new Date(this.props.task.due_date),("0"+e.getDate()).slice(-2)+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+e.getFullYear())}),Object(b.jsxs)("td",{children:[Object(b.jsx)(C.a,{onClick:this.updateTask,icon:I.b},1),Object(b.jsx)("span",{children:"   "}),Object(b.jsx)(C.a,{onClick:this.finishTask,icon:I.a},2),Object(b.jsx)("span",{children:"   "}),Object(b.jsx)(C.a,{onClick:this.deleteTask,icon:I.d},3),Object(b.jsx)("span",{children:"   "})]})]});var e}}]),a}(n.Component);a(27).config();var F=new p.a,P=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).deleteTask=function(e){window.confirm("\xbfAre you sure you want to delete this task?")&&(j.a.delete("".concat("https://diegosalas-organizer.herokuapp.com","/tasks/").concat(e)).then((function(t){n.setState({tasks:n.state.tasks.filter((function(t){return t._id!==e}))})})).catch((function(e){return console.log(e)})),alert("Task deleted!"))},n.finishTask=function(e){window.confirm("\xbfAre you sure you want complete this task?")&&(j.a.delete("".concat("https://diegosalas-organizer.herokuapp.com","/tasks/").concat(e)).then((function(t){n.setState({tasks:n.state.tasks.filter((function(t){return t._id!==e}))})})).catch((function(e){return console.log(e)})),alert("Task completed!"))},n.updateTask=function(e){window.location.href="./home/edit/"+e},n.sayHello=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h2",{children:["Welcome ",F.get("name")," ",F.get("lastName")]}),Object(b.jsx)("br",{})]})},n.tasksList=function(){return n.state.tasks.map((function(e){return Object(b.jsx)(T,{task:e,deleteTask:n.deleteTask,updateTask:n.updateTask,finishTask:n.finishTask},e._id)}))},n.state={tasks:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;F.get("username")?j.a.get("".concat("https://diegosalas-organizer.herokuapp.com","/tasks/").concat(F.get("id"))).then((function(t){t.data.length>0?(t.data.sort((function(e,t){return S(new Date(e.due_date),new Date(t.due_date)),0!==D?D:e.importance>t.importance?-1:e.importance<t.importance?1:0})),e.setState({tasks:t.data})):e.setState({tasks:[]})})).catch((function(e){return console.log(e)})):window.location.href="./"}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container",children:[this.sayHello(),Object(b.jsx)("div",{className:"table-responsive-sm",children:Object(b.jsxs)("table",{className:"table table-bordered",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Title"}),Object(b.jsx)("th",{scope:"col",children:"Description"}),Object(b.jsx)("th",{scope:"col",children:"Time"}),Object(b.jsx)("th",{scope:"col",children:"Imp"}),Object(b.jsx)("th",{scope:"col",children:"Due Date"}),Object(b.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(b.jsx)("tbody",{children:this.tasksList()})]})})]})}}]),a}(n.Component),_=new p.a,A=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){_.get("username")||(window.location.href="/organizer")}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(P,{})]})}}]),a}(n.Component),q=a(52),z=a.n(q),M=a(89),E=a(90),U=a.n(E),L=(a(124),new p.a),B=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,s=t.value;"number"===typeof n.state[a]&&(s=n.handleNumbers(a,s)),n.setState(Object(u.a)({},a,s))},n.handleNumbers=function(e,t){return t="duration"===e&&""===t?parseInt(0):parseInt(t)},n.onChangeDate=function(e){n.setState({due_date:e})},n.backHome=function(){console.log(window.location.href),window.location.href="../../home"},n.onSubmit=function(e){e.preventDefault();var t={userId:L.get("id"),title:n.state.title,description:n.state.description,duration:n.state.duration,importance:n.state.importance,due_date:n.state.due_date};n.state._id&&(t.id=n.state._id),n.props.onSubmit(t)},n.state={userId:"",title:"",description:"",duration:60,importance:1,registration_date:new Date,due_date:new Date},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(M.a)(z.a.mark((function e(){var t=this;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.get("username")||(window.location.href="./"),!this.props.id){e.next=4;break}return e.next=4,j.a.get("".concat("https://diegosalas-organizer.herokuapp.com","/tasks/byId/").concat(this.props.id)).then((function(e){var a=e.data,n=a._id,s=a.title,r=a.description,o=a.duration,c=a.importance,i=new Date(e.data.due_date);t.setState({_id:n,title:s,description:r,duration:o,importance:c,due_date:i})})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h2",{children:this.props.title}),Object(b.jsx)("br",{}),Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"nameInput",children:"Title"}),Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",id:"nameInput",name:"title",placeholder:"Eg. Became a Brawl Stars master",value:this.state.title,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"descriptionInput",children:"Description"}),Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",id:"descriptionInput",name:"description",placeholder:"Eg. Watch all Trebor's videos",value:this.state.description,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"durationInput",children:"Duration (in minutes)"}),Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",id:"durationInput",name:"duration",placeholder:"60",value:this.state.duration,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Importance"}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"importance",id:"importanceRadios1",value:"1",checked:1===this.state.importance,onChange:this.handleChange}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"importanceRadios1",children:"Low"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"importance",id:"importanceRadios2",value:"2",checked:2===this.state.importance,onChange:this.handleChange}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"importanceRadios2",children:"Medium"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"importance",id:"importanceRadios3",value:"3",checked:3===this.state.importance,onChange:this.handleChange}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"importanceRadios3",children:"High"})]})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"dueDateInput",children:"Due Date"}),Object(b.jsx)("div",{children:Object(b.jsx)(U.a,{id:"dueDateInput",name:"due_date",selected:this.state.due_date,onChange:this.onChangeDate,dateFormat:"dd/MM/yyyy",minDate:new Date})})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-primary mr-2",onClick:this.backHome,children:"Back"}),Object(b.jsx)("input",{type:"submit",value:this.props.textButton,className:"btn btn-primary"})]}),Object(b.jsx)("div",{className:"form-group"})]})]})]})}}]),a}(n.Component);a(27).config();var R=new p.a,Y=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).updateTask=function(e){console.log(e),j.a.patch("".concat("https://diegosalas-organizer.herokuapp.com","/tasks/").concat(e.id),e).then((function(e){window.location.href="../../home"})).catch((function(e){return console.log(e)}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){R.get("username")||(window.location.href="./")}},{key:"render",value:function(){return Object(b.jsx)(B,{onSubmit:this.updateTask,textButton:"Update",title:"Update Task",id:this.props.match.params.id})}}]),a}(n.Component);a(27).config();var H=new p.a,W=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).createTask=function(e){j.a.post("".concat("https://diegosalas-organizer.herokuapp.com","/tasks/add"),e).then((function(e){console.log(e.data),window.location.href="../home"})).catch((function(e){return console.log(e)}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){H.get("username")||(window.location.href="./")}},{key:"render",value:function(){return Object(b.jsx)(B,{onSubmit:this.createTask,textButton:"Create",title:"Create Task"})}}]),a}(n.Component),G=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){e.preventDefault(),console.log("UPDATING PASSWORD")},n.handleChange=function(e){var t=e.target,a=t.name,s=t.value;n.setState(Object(u.a)({},a,s))},n.toggleShowChangePassword=function(){n.setState({showChangaPassword:!n.state.showChangaPassword})},n.state={password:"",newPassword:"",confirmPassword:"",showChangaPassword:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("button",{className:"btn btn-primary",type:"button",onClick:this.toggleShowChangePassword,children:"Change password"})}),this.state.showChangaPassword?Object(b.jsx)("div",{className:"card card-body",children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"passwordInput",children:"Password"}),Object(b.jsx)("input",{type:"password",required:!0,className:"form-control",id:"passwordInput",name:"password",placeholder:"You're actual password",value:this.state.password,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"newPasswordInput",children:"New password"}),Object(b.jsx)("input",{type:"password",required:!0,className:"form-control",id:"newPasswordInput",name:"newPassword",placeholder:"You're new password",value:this.state.newPassword,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"confirmPasswordInput",children:"New password"}),Object(b.jsx)("input",{type:"confirmPassword",required:!0,className:"form-control",id:"confirmPasswordInput",name:"confirmPassword",placeholder:"Confirm your password",value:this.state.confirmPassword,onChange:this.handleChange})]})]})}):null]})}}]),a}(n.Component),J=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){e.preventDefault(),console.log("UPDATING DATA")},n.handleChange=function(e){var t=e.target,a=t.name,s=t.value;n.setState(Object(u.a)({},a,s))},n.state={name:"",lastName:"",email:"",password:"",newPassword:""},n}return Object(c.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsxs)("div",{className:"form-row",children:[Object(b.jsxs)("div",{className:"form-group col-md-6",children:[Object(b.jsx)("label",{htmlFor:"nameInput",children:"Name"}),Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",id:"nameInput",name:"name",placeholder:"You're name",value:this.state.name,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group col-md-6",children:[Object(b.jsx)("label",{htmlFor:"lastNameInput",children:"Last name"}),Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",id:"lastNameInput",name:"lastName",placeholder:"My last name",value:this.state.lastName,onChange:this.handleChange})]})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"emailInput",children:"Email"}),Object(b.jsx)("input",{type:"email",required:!0,className:"form-control ",id:"emailInput",name:"email",placeholder:"myemail@gmail.com",value:this.state.email,onChange:this.handleChange})]}),Object(b.jsx)(G,{})]})})]})}}]),a}(n.Component),Z=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(b.jsx)(d.a,{basename:"/organizer",children:Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{path:"/",exact:!0,component:f}),Object(b.jsx)(h.a,{path:"/home",exact:!0,component:A}),Object(b.jsx)(h.a,{path:"/home/edit/:id",exact:!0,component:Y}),Object(b.jsx)(h.a,{path:"/home/create",exact:!0,component:W}),Object(b.jsx)(h.a,{path:"/home/profile",exact:!0,component:J}),Object(b.jsx)(h.a,{path:"/register-user",component:k})]})})}}]),a}(n.Component),$=(a(208),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(b.jsx)(Z,{})}}]),a}(n.Component));r.a.render(Object(b.jsx)($,{}),document.getElementById("root"))}},[[209,1,2]]]);
//# sourceMappingURL=main.991ad10e.chunk.js.map