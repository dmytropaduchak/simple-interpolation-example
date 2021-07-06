(this["webpackJsonpsimple-interpolation-example"]=this["webpackJsonpsimple-interpolation-example"]||[]).push([[0],{333:function(e,t,a){},334:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(25),n=a.n(c),s=a(59),l=a(24),i=a(39),j=a(173),o=a.n(j),b=a(344),d=a(342),u=a(182),h=a(337),p=a(338),x=a(343),O=a(56),m=a(340),y=a(48),v=a(82),f=a.n(v),g=a(105),k=a(106),F=a(28),Z=a(23),z=a(339),w=a(183),I=a(341),C=a(63),E=a(4),P=z.a.Item,V=z.a.useForm,N=[["x1","y1"],["x2","y2"],["x3","y3"]],R=Object(F.sortBy)(Object(F.flatten)(N)),B=function(){var e=V(),t=Object(O.a)(e,1)[0],a=[{validator:function(){var e=Object(g.a)(f.a.mark((function e(a,r){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.getFieldsValue(R),n=Object(F.values)(c).map((function(e){return e||Object(Z.isZero)(e)})).length<R.length-1,e.abrupt("return",r||Object(Z.isZero)(r)||!n?Promise.resolve():Promise.reject());case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}];return Object(E.jsxs)(z.a,{name:"linear-interpolation-form",form:t,onFinish:function(){try{var e=function(e){var t,a,r=e.getFieldsValue(R),c=N.map((function(e){return{x:{name:e[0],value:r[e[0]]},y:{name:e[1],value:r[e[1]]}}})),n=c.filter((function(e){var t=e.x,a=e.y;return(t.value||Object(Z.isZero)(t.value))&&(a.value||Object(Z.isZero)(a.value))})).map((function(e){var t=e.x,a=e.y;return{x:t.value,y:a.value}})),s=c.find((function(e){var t=e.x,a=e.y;return!t.value&&!Object(Z.isZero)(t.value)||!a.value&&!Object(Z.isZero)(a.value)}));if(!s)throw new Error("Please provide correct search params");return s.x.value||Object(Z.isZero)(s.x.value)||(t=s.x.name,a=Object(C.linearInterpolation)(n)({y:s.y.value})),s.y.value||Object(Z.isZero)(s.y.value)||(t=s.y.name,a=Object(C.linearInterpolation)(n)({x:s.x.value})),[t,a]}(t),a=Object(O.a)(e,2),r=a[0],c=a[1];if(!r||!c&&!Object(Z.isZero)(c))throw new Error("Please provide correct search params");t.getFieldInstance(r).focus(),t.setFieldsValue(Object(k.a)({},r,Math.round(c)))}catch(n){w.b.error(n.message)}},children:[Object(E.jsx)(h.a,{gutter:[8,8],children:Object(E.jsx)(p.a,{span:24,children:"Linear Interpolation Calculator Example"})}),Object(E.jsxs)(h.a,{gutter:[8,8],children:[Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(P,{name:"x1",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"X1",type:"number"})})}),Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(P,{name:"y1",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"Y1",type:"number"})})})]}),Object(E.jsxs)(h.a,{gutter:[8,8],children:[Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(P,{name:"x2",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"X2",type:"number"})})}),Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(P,{name:"y2",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"Y2",type:"number"})})})]}),Object(E.jsxs)(h.a,{gutter:[8,8],children:[Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(P,{name:"x3",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"X3",type:"number"})})}),Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(P,{name:"y3",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"Y3",type:"number"})})})]}),Object(E.jsxs)(h.a,{gutter:8,children:[Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(x.a,{block:!0,shape:"round",type:"primary",htmlType:"submit",children:"Calculate"})}),Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(x.a,{block:!0,shape:"round",type:"default",onClick:function(){t.resetFields()},children:"Clear"})}),Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(x.a,{block:!0,shape:"round",type:"default",onClick:function(){var e=t.getFieldsValue(R),a=Object(F.sample)(R);Object(F.sortBy)(Object(F.range)(6).map((function(){return Object(F.random)(0,1e3)}))).forEach((function(t,r){Object(F.isEqual)(R[r],a)?delete e[R[r]]:e[R[r]]=t})),t.resetFields(),t.setFieldsValue(e)},children:"Random"})})]})]})},Y=z.a.Item,X=z.a.useForm,H=[["x1","y1","z11"],["x1","y3","z13"],["x2","y2","z22"],["x3","y1","z31"],["x3","y3","z33"]],S=Object(F.sortBy)(Object(F.uniq)(Object(F.flatten)(H))),G=function(){var e=X(),t=Object(O.a)(e,1)[0],a=[{validator:function(){var e=Object(g.a)(f.a.mark((function e(a,r){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.getFieldsValue(S),n=Object(F.values)(c).map((function(e){return e||Object(Z.isZero)(e)})).length<S.length-1,e.abrupt("return",r||Object(Z.isZero)(r)||!n?Promise.resolve():Promise.reject());case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}];return Object(E.jsxs)(z.a,{name:"linear-interpolation-form",form:t,onFinish:function(){try{var e=function(e){var t,a,r=e.getFieldsValue(S),c=H.map((function(e){return{x:{name:e[0],value:r[e[0]]},y:{name:e[1],value:r[e[1]]},z:{name:e[2],value:r[e[2]]}}})),n=c.filter((function(e){var t=e.x,a=e.y,r=e.z;return(t.value||Object(Z.isZero)(t.value))&&(a.value||Object(Z.isZero)(a.value))&&(r.value||Object(Z.isZero)(r.value))})).map((function(e){var t=e.x,a=e.y,r=e.z;return{x:t.value,y:a.value,z:r.value}})),s=c.find((function(e){var t=e.x,a=e.y,r=e.z;return!t.value&&!Object(Z.isZero)(t.value)||!a.value&&!Object(Z.isZero)(a.value)||!r.value&&!Object(Z.isZero)(r.value)}));if(!s)throw new Error("Please provide correct search params");return s.x.value||Object(Z.isZero)(s.x.value)||(t=s.x.name,a=Object(C.bilinearInterpolation)(n)({y:s.y.value,z:s.z.value})),s.y.value||Object(Z.isZero)(s.y.value)||(t=s.y.name,a=Object(C.bilinearInterpolation)(n)({x:s.x.value,z:s.z.value})),s.z.value||Object(Z.isZero)(s.z.value)||(t=s.z.name,a=Object(C.bilinearInterpolation)(n)({x:s.x.value,y:s.y.value})),[t,a]}(t),a=Object(O.a)(e,2),r=a[0],c=a[1];if(!r||!c&&!Object(Z.isZero)(c))throw new Error("Please provide correct search params");t.getFieldInstance(r).focus(),t.setFieldsValue(Object(k.a)({},r,Math.round(c)))}catch(n){console.log(n),w.b.error(n.message)}},children:[Object(E.jsx)(h.a,{gutter:[8,8],children:Object(E.jsx)(p.a,{span:24,children:"Bilinear Interpolation Calculator Example"})}),Object(E.jsxs)(h.a,{gutter:[8,8],children:[Object(E.jsx)(p.a,{span:6,offset:6,children:Object(E.jsx)(Y,{name:"x1",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"X1",type:"number"})})}),Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(Y,{name:"x2",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"X",type:"number"})})}),Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(Y,{name:"x3",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"X2",type:"number"})})})]}),Object(E.jsxs)(h.a,{gutter:[8,8],children:[Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(Y,{name:"y1",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"Y1",type:"number"})})}),Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(Y,{name:"z11",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"Z11",type:"number"})})}),Object(E.jsx)(p.a,{span:6,offset:6,children:Object(E.jsx)(Y,{name:"z13",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"Z12",type:"number"})})})]}),Object(E.jsxs)(h.a,{gutter:[8,8],children:[Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(Y,{name:"y2",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"Y",type:"number"})})}),Object(E.jsx)(p.a,{span:6,offset:6,children:Object(E.jsx)(Y,{name:"z22",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"Z",type:"number"})})})]}),Object(E.jsxs)(h.a,{gutter:[8,8],children:[Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(Y,{name:"y3",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"Y2",type:"number"})})}),Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(Y,{name:"z31",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"Z21",type:"number"})})}),Object(E.jsx)(p.a,{span:6,offset:6,children:Object(E.jsx)(Y,{name:"z33",hasFeedback:!0,rules:a,children:Object(E.jsx)(I.a,{placeholder:"Z22",type:"number"})})})]}),Object(E.jsxs)(h.a,{gutter:8,children:[Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(x.a,{block:!0,shape:"round",type:"primary",htmlType:"submit",children:"Calculate"})}),Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(x.a,{block:!0,shape:"round",type:"default",onClick:function(){t.resetFields()},children:"Clear"})}),Object(E.jsx)(p.a,{span:6,children:Object(E.jsx)(x.a,{block:!0,shape:"round",type:"default",onClick:function(){var e=t.getFieldsValue(S),a=Object(F.sample)(["x2","y2","z22"]);Object(F.sortBy)(Object(F.range)(11).map((function(){return Object(F.random)(0,1e3)}))).forEach((function(t,r){Object(F.isEqual)(S[r],a)?delete e[S[r]]:e[S[r]]=t})),t.resetFields(),t.setFieldsValue(e)},children:"Random"})})]})]})},L="#linear",q="#bilinear",T=m.a.TabPane,A=L,D=q,J=function(e){var t=e.location,a=t&&t.hash||A,c=Object(r.useState)(a),n=Object(O.a)(c,2),s=n[0],l=n[1];return Object(E.jsxs)(h.a,{className:"home-content",align:"middle",justify:"center",children:[Object(E.jsx)(p.a,{xs:24,md:8,children:Object(E.jsxs)(i.a,{type:"left",leaveReverse:!0,delay:100,children:[Object(E.jsx)(y.a,{type:"alpha",mode:"smooth",className:"title",delay:100,children:"Simple Interpolation"},"1"),Object(E.jsx)(y.a,{type:"alpha",mode:"smooth",className:"description",delay:100,children:"A simple interpolation module that construct new data points within the range of a discrete set of known data points"},"2")]})}),Object(E.jsx)(p.a,{xs:24,md:16,children:Object(E.jsxs)(m.a,{defaultActiveKey:s,onChange:function(e){l(e),window.location.hash=e},children:[Object(E.jsx)(T,{tab:"Linear Interpolation",children:Object(E.jsx)(B,{})},A),Object(E.jsx)(T,{tab:"Bilinear Interpolation",children:Object(E.jsx)(G,{})},D)]})})]})},M=function(){return Object(E.jsxs)(h.a,{className:"forbidden-content",align:"middle",justify:"center",children:[Object(E.jsx)(p.a,{xs:24,md:12,children:Object(E.jsx)(i.a,{type:"left",leaveReverse:!0,delay:100,children:Object(E.jsx)(y.a,{type:"alpha",mode:"smooth",className:"title",delay:100,children:"403"},"1")})}),Object(E.jsx)(p.a,{xs:24,md:12,children:Object(E.jsxs)(i.a,{type:"right",leaveReverse:!0,delay:100,children:[Object(E.jsx)(y.a,{type:"alpha",mode:"smooth",className:"description",delay:100,children:"Sorry, you don't have access to this page or resource"},"2"),Object(E.jsx)(x.a,{type:"primary",shape:"round",ghost:!0,children:Object(E.jsx)(s.b,{to:"/",children:"Go Home"},"3")})]})})]})},_=function(){return Object(E.jsxs)(h.a,{className:"not-found-content",align:"middle",justify:"center",children:[Object(E.jsx)(p.a,{xs:24,md:12,children:Object(E.jsx)(i.a,{type:"left",leaveReverse:!0,delay:100,children:Object(E.jsx)(y.a,{type:"alpha",mode:"smooth",className:"title",delay:100,children:"404"},"1")})}),Object(E.jsx)(p.a,{xs:24,md:12,children:Object(E.jsxs)(i.a,{type:"right",leaveReverse:!0,delay:100,children:[Object(E.jsx)(y.a,{type:"alpha",mode:"smooth",className:"description",delay:100,children:"Sorry, the page could not be found"},"2"),Object(E.jsx)(x.a,{type:"primary",shape:"round",ghost:!0,children:Object(E.jsx)(s.b,{to:"/",children:"Go Home"},"3")})]})})]})},K=function(){return Object(E.jsx)(l.a,{to:"/404"})},Q=(a(331),a(332),d.a.Header),U=d.a.Content,W=d.a.Footer,$=function(){return u.a.open({duration:0,placement:"bottomLeft",message:"Github Help",description:Object(E.jsxs)(r.Fragment,{children:["I need your support, please click the button to HELP",Object(E.jsx)(o.a,{type:"stargazers",namespace:"dmytropaduchak",repo:"simple-interpolation"})]})}),Object(E.jsxs)(d.a,{children:[Object(E.jsx)(Q,{children:Object(E.jsx)(h.a,{children:Object(E.jsx)(p.a,{span:24,children:Object(E.jsx)(x.a,{type:"default",shape:"round",target:"_blank",ghost:!0,href:"https://github.com/dmytropaduchak/simple-interpolation",children:"Github"})})})}),Object(E.jsx)(U,{children:Object(E.jsx)(s.a,{basename:"/simple-interpolation-example",children:Object(E.jsxs)(l.d,{children:[Object(E.jsx)(l.b,{path:"/",component:J,exact:!0}),Object(E.jsx)(l.b,{path:"/403",component:M}),Object(E.jsx)(l.b,{path:"/404",component:_}),Object(E.jsx)(l.b,{component:K})]})})}),Object(E.jsx)(W,{children:Object(E.jsxs)(h.a,{children:[Object(E.jsx)(p.a,{xs:24,md:12,children:Object(E.jsx)(i.a,{type:"left",leaveReverse:!0,delay:100,children:Object(E.jsx)(x.a,{href:"https://dmytropaduchak.github.io/simple-interpolation-example/",type:"link",children:"Copyright \xa9 ".concat((new Date).getFullYear()," Simple Interpolation")})})}),Object(E.jsx)(p.a,{xs:24,md:12,children:Object(E.jsx)(i.a,{type:"right",leaveReverse:!0,delay:100,children:Object(E.jsx)(x.a,{href:"https://github.com/dmytropaduchak",type:"link",target:"_blank",icon:Object(E.jsx)(b.a,{}),children:"Dmytro Paduchak"})})})]})})]})};a(333);n.a.render(Object(E.jsx)($,{}),document.getElementById("root"))}},[[334,1,2]]]);
//# sourceMappingURL=main.1eb3c308.chunk.js.map