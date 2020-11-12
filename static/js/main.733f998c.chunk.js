(this["webpackJsonpsimple-interpolation-example"]=this["webpackJsonpsimple-interpolation-example"]||[]).push([[0],{387:function(e,t,a){},388:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),s=a(16),r=a.n(s),l=a(64),j=a(25),i=a(42),o=a(180),d=a.n(o),b=a(396),h=a(397),p=a(400),x=a(391),O=a(392),u=a(395),m=(a(261),a(262),a(68)),y=a(394),f=a(54),g=a(142),k=a.n(g),v=a(181),F=a(393),C=(a(399),a(398)),w=a(71),N=F.a.Item,I=F.a.useForm,R=["x1","x2","x3","y1","y2","y3"],Y=function(){var e=I(),t=Object(m.a)(e,1)[0],a=Object(n.useState)({}),s=Object(m.a)(a,2),r=s[0],l=s[1],j=[{whitespace:!1,validator:function(){var e=Object(v.a)(k.a.mark((function e(t,a){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),console.log(a),a&&!(a.length<2)){e.next=4;break}return e.abrupt("return",Promise.reject());case 4:return e.abrupt("return",Promise.resolve());case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}];return Object(c.jsxs)(F.a,{className:"code-box-demo",name:"linear-interpolation-form",form:t,onFinish:function(){var e=t.getFieldsValue(R);if(!Object.keys(e).find((function(t){return!e[t]})))return R.forEach((function(e){return Object(w.set)(r,e,"warning")})),void l(r)},children:[Object(c.jsx)(x.a,{gutter:[8,8],children:Object(c.jsx)(O.a,{span:24,children:"Linear Interpolation Calculator Example"})}),Object(c.jsxs)(x.a,{gutter:[8,8],children:[Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(N,{name:"x1",hasFeedback:!0,rules:j,children:Object(c.jsx)(C.a,{placeholder:"X1",type:"number"})})}),Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(N,{name:"y1",hasFeedback:!0,rules:j,children:Object(c.jsx)(C.a,{placeholder:"Y1",type:"number"})})})]}),Object(c.jsxs)(x.a,{gutter:[8,8],children:[Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(N,{name:"x2",hasFeedback:!0,rules:j,children:Object(c.jsx)(C.a,{placeholder:"X2",type:"number"})})}),Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(N,{name:"y2",hasFeedback:!0,rules:j,children:Object(c.jsx)(C.a,{placeholder:"Y2",type:"number"})})})]}),Object(c.jsxs)(x.a,{gutter:[8,8],children:[Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(N,{name:"x3",hasFeedback:!0,rules:j,children:Object(c.jsx)(C.a,{placeholder:"X3",type:"number"})})}),Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(N,{name:"y3",hasFeedback:!0,rules:j,children:Object(c.jsx)(C.a,{placeholder:"Y3",type:"number"})})})]}),Object(c.jsxs)(x.a,{gutter:8,children:[Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(u.a,{block:!0,shape:"round",type:"primary",htmlType:"submit",children:"Calculate"})}),Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(u.a,{block:!0,shape:"round",type:"default",onClick:function(){t.resetFields()},children:"Clear"})}),Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(u.a,{block:!0,shape:"round",type:"default",onClick:function(){var e=t.getFieldsValue(R),a=Object(w.sample)(R);Object(w.sortBy)(Object(w.range)(6).map((function(e){return Object(w.random)(0,100)}))).forEach((function(t,c){Object(w.isEqual)(R[c],a)?delete e[R[c]]:e[R[c]]=t})),t.resetFields(),t.setFieldsValue(e)},children:"Random"})})]})]})},z=F.a.Item,E=F.a.useForm,S=function(){var e=E(),t=Object(m.a)(e,1)[0];return Object(c.jsxs)(F.a,{className:"code-box-demo",name:"linear-interpolation-form",form:t,onFinish:function(){console.log("test")},children:[Object(c.jsx)(x.a,{gutter:[8,8],children:Object(c.jsx)(O.a,{span:24,children:"Bilinear Interpolation Calculator Example"})}),Object(c.jsxs)(x.a,{gutter:[8,8],children:[Object(c.jsx)(O.a,{span:6,offset:6,children:Object(c.jsx)(z,{name:"x1",children:Object(c.jsx)(C.a,{placeholder:"X1",type:"number"})})}),Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(z,{name:"x",children:Object(c.jsx)(C.a,{placeholder:"X",type:"number"})})}),Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(z,{name:"x3",children:Object(c.jsx)(C.a,{placeholder:"X3",type:"number"})})})]}),Object(c.jsxs)(x.a,{gutter:[8,8],children:[Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(z,{name:"y1",children:Object(c.jsx)(C.a,{placeholder:"Y1",type:"number"})})}),Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(z,{name:"z11",children:Object(c.jsx)(C.a,{placeholder:"Z11",type:"number"})})}),Object(c.jsx)(O.a,{span:6,offset:6,children:Object(c.jsx)(z,{name:"z12",children:Object(c.jsx)(C.a,{placeholder:"Z12",type:"number"})})})]}),Object(c.jsxs)(x.a,{gutter:[8,8],children:[Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(z,{name:"y",children:Object(c.jsx)(C.a,{placeholder:"Y",type:"number"})})}),Object(c.jsx)(O.a,{span:6,offset:6,children:Object(c.jsx)(z,{name:"z",children:Object(c.jsx)(C.a,{placeholder:"Z",type:"number"})})})]}),Object(c.jsxs)(x.a,{gutter:[8,8],children:[Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(z,{name:"y2",children:Object(c.jsx)(C.a,{placeholder:"Y2",type:"number"})})}),Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(z,{name:"z21",children:Object(c.jsx)(C.a,{placeholder:"Z21",type:"number"})})}),Object(c.jsx)(O.a,{span:6,offset:6,children:Object(c.jsx)(z,{name:"z22",children:Object(c.jsx)(C.a,{placeholder:"Z22",type:"number"})})})]}),Object(c.jsxs)(x.a,{gutter:8,children:[Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(u.a,{block:!0,shape:"round",type:"primary",htmlType:"submit",children:"Calculate"})}),Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(u.a,{block:!0,shape:"round",type:"default",onClick:function(){t.resetFields()},children:"Clear"})}),Object(c.jsx)(O.a,{span:6,children:Object(c.jsx)(u.a,{block:!0,shape:"round",type:"default",onClick:function(){},children:"Random"})})]})]})},X="#linear",Z="#bilinear",B=y.a.TabPane,G=X,H=Z,P=function(e){var t=e.location,a=t&&t.hash||G,s=Object(n.useState)(a),r=Object(m.a)(s,2),l=r[0],j=r[1];return Object(c.jsxs)(x.a,{className:"home-content",align:"middle",justify:"center",children:[Object(c.jsx)(O.a,{xs:24,md:8,children:Object(c.jsxs)(i.a,{type:"left",leaveReverse:!0,delay:100,children:[Object(c.jsx)(f.a,{type:"alpha",mode:"smooth",className:"title",delay:100,children:"Simple Interpolation"},"1"),Object(c.jsx)(f.a,{type:"alpha",mode:"smooth",className:"description",delay:100,children:"A simple interpolation module that construct new data points within the range of a discrete set of known data points"},"2")]})}),Object(c.jsx)(O.a,{xs:24,md:16,children:Object(c.jsxs)(y.a,{defaultActiveKey:l,onChange:function(e){j(e),window.location.hash=e},children:[Object(c.jsx)(B,{tab:"Linear Interpolation",children:Object(c.jsx)(Y,{})},G),Object(c.jsx)(B,{tab:"Bilinear Interpolation",children:Object(c.jsx)(S,{})},H)]})})]})},L=function(){return Object(c.jsxs)(x.a,{className:"forbidden-content",align:"middle",justify:"center",children:[Object(c.jsx)(O.a,{xs:24,md:12,children:Object(c.jsx)(i.a,{type:"left",leaveReverse:!0,delay:100,children:Object(c.jsx)(f.a,{type:"alpha",mode:"smooth",className:"title",delay:100,children:"403"},"1")})}),Object(c.jsx)(O.a,{xs:24,md:12,children:Object(c.jsxs)(i.a,{type:"right",leaveReverse:!0,delay:100,children:[Object(c.jsx)(f.a,{type:"alpha",mode:"smooth",className:"description",delay:100,children:"Sorry, you don't have access to this page or resource"},"2"),Object(c.jsx)(u.a,{type:"primary",shape:"round",ghost:!0,children:Object(c.jsx)(l.b,{to:"/",children:"Go Home"},"3")})]})})]})},T=function(){return Object(c.jsxs)(x.a,{className:"not-found-content",align:"middle",justify:"center",children:[Object(c.jsx)(O.a,{xs:24,md:12,children:Object(c.jsx)(i.a,{type:"left",leaveReverse:!0,delay:100,children:Object(c.jsx)(f.a,{type:"alpha",mode:"smooth",className:"title",delay:100,children:"404"},"1")})}),Object(c.jsx)(O.a,{xs:24,md:12,children:Object(c.jsxs)(i.a,{type:"right",leaveReverse:!0,delay:100,children:[Object(c.jsx)(f.a,{type:"alpha",mode:"smooth",className:"description",delay:100,children:"Sorry, the page could not be found"},"2"),Object(c.jsx)(u.a,{type:"primary",shape:"round",ghost:!0,children:Object(c.jsx)(l.b,{to:"/",children:"Go Home"},"3")})]})})]})},V=function(){return Object(c.jsx)(j.a,{to:"/404"})},A=h.a.Header,D=h.a.Content,J=h.a.Footer,_=function(){return p.a.open({duration:0,placement:"bottomLeft",message:"Github Help",description:Object(c.jsxs)(n.Fragment,{children:["I need your support, please click the button to help me",Object(c.jsx)(d.a,{type:"stargazers",namespace:"dmytropaduchak",repo:"simple-interpolation"})]})}),Object(c.jsxs)(h.a,{children:[Object(c.jsx)(A,{children:Object(c.jsx)(x.a,{children:Object(c.jsx)(O.a,{span:24,children:Object(c.jsx)(u.a,{type:"default",shape:"round",target:"_blank",ghost:!0,href:"https://github.com/dmytropaduchak/simple-interpolation",children:"Github"})})})}),Object(c.jsx)(D,{children:Object(c.jsx)(l.a,{basename:"/simple-interpolation-example",children:Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.b,{path:"/",component:P,exact:!0}),Object(c.jsx)(j.b,{path:"/403",component:L}),Object(c.jsx)(j.b,{path:"/404",component:T}),Object(c.jsx)(j.b,{component:V})]})})}),Object(c.jsx)(J,{children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)(O.a,{xs:24,md:12,children:Object(c.jsx)(i.a,{type:"left",leaveReverse:!0,delay:100,children:Object(c.jsx)(u.a,{href:"https://dmytropaduchak.github.io/simple-interpolation-example/",type:"link",children:"Copyright \xa9 ".concat((new Date).getFullYear()," Simple Interpolation")})})}),Object(c.jsx)(O.a,{xs:24,md:12,children:Object(c.jsx)(i.a,{type:"right",leaveReverse:!0,delay:100,children:Object(c.jsx)(u.a,{href:"https://github.com/dmytropaduchak",type:"link",target:"_blank",icon:Object(c.jsx)(b.a,{}),children:"Dmytro Paduchak"})})})]})})]})};a(387);r.a.render(Object(c.jsx)(_,{}),document.getElementById("root"))}},[[388,1,2]]]);
//# sourceMappingURL=main.733f998c.chunk.js.map