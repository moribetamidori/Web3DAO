(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4747],{12648:function(Ce,D,e){"use strict";e.r(D),e.d(D,{default:function(){return he}});var ye=e(57338),N=e(25084),ge=e(57663),w=e(71577),je=e(47673),z=e(4107),K=e(93224),x=e(2824),p=e(11849),xe=e(34792),F=e(48086),f=e(3182),H=e(94043),n=e.n(H),J=e(49101),y=e(67294),Q=e(75362),X=e(85224),k=e(16894),q=e(37476),V=e(5966),I=e(90672),_=e(33816),Se=e(71194),ee=e(50146),E=e(65554),A=e(64317),re=e(86615),ue=e(22452),r=e(85893),ae=function(a){return(0,r.jsxs)(E.L,{stepsProps:{size:"small"},stepsFormRender:function(o,u){return(0,r.jsx)(ee.Z,{width:640,bodyStyle:{padding:"32px 40px 48px"},destroyOnClose:!0,title:"\u89C4\u5219\u914D\u7F6E",visible:a.updateModalVisible,footer:u,onCancel:function(){a.onCancel()},children:o})},onFinish:a.onSubmit,children:[(0,r.jsxs)(E.L.StepForm,{initialValues:{name:a.values.name,desc:a.values.desc},title:"\u57FA\u672C\u4FE1\u606F",children:[(0,r.jsx)(V.Z,{name:"name",label:"\u89C4\u5219\u540D\u79F0",width:"md",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0\uFF01"}]}),(0,r.jsx)(I.Z,{name:"desc",width:"md",label:"\u89C4\u5219\u63CF\u8FF0",placeholder:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u89C4\u5219\u63CF\u8FF0\uFF01",min:5}]})]}),(0,r.jsxs)(E.L.StepForm,{initialValues:{target:"0",template:"0"},title:"\u914D\u7F6E\u89C4\u5219\u5C5E\u6027",children:[(0,r.jsx)(A.Z,{name:"target",width:"md",label:"\u76D1\u63A7\u5BF9\u8C61",valueEnum:{0:"\u8868\u4E00",1:"\u8868\u4E8C"}}),(0,r.jsx)(A.Z,{name:"template",width:"md",label:"\u89C4\u5219\u6A21\u677F",valueEnum:{0:"\u89C4\u5219\u6A21\u677F\u4E00",1:"\u89C4\u5219\u6A21\u677F\u4E8C"}}),(0,r.jsx)(re.Z.Group,{name:"type",label:"\u89C4\u5219\u7C7B\u578B",options:[{value:"0",label:"\u5F3A"},{value:"1",label:"\u5F31"}]})]}),(0,r.jsxs)(E.L.StepForm,{initialValues:{type:"1",frequency:"month"},title:"\u8BBE\u5B9A\u8C03\u5EA6\u5468\u671F",children:[(0,r.jsx)(ue.Z,{name:"time",width:"md",label:"\u5F00\u59CB\u65F6\u95F4",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4\uFF01"}]}),(0,r.jsx)(A.Z,{name:"frequency",label:"\u76D1\u63A7\u5BF9\u8C61",width:"md",valueEnum:{month:"\u6708",week:"\u5468"}})]})]})},te=ae,R=e(25377);function ne(d,a){return B.apply(this,arguments)}function B(){return B=(0,f.Z)(n().mark(function d(a,l){return n().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,R.WY)("/api/rule",(0,p.Z)({method:"GET",params:(0,p.Z)({},a)},l||{})));case 1:case"end":return u.stop()}},d)})),B.apply(this,arguments)}function se(d,a){return P.apply(this,arguments)}function P(){return P=(0,f.Z)(n().mark(function d(a,l){return n().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,R.WY)("/api/rule",(0,p.Z)({data:a,method:"PUT"},l||{})));case 1:case"end":return u.stop()}},d)})),P.apply(this,arguments)}function le(d,a){return T.apply(this,arguments)}function T(){return T=(0,f.Z)(n().mark(function d(a,l){return n().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,R.WY)("/api/rule",(0,p.Z)({data:a,method:"POST"},l||{})));case 1:case"end":return u.stop()}},d)})),T.apply(this,arguments)}function ie(d,a){return b.apply(this,arguments)}function b(){return b=(0,f.Z)(n().mark(function d(a,l){return n().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,R.WY)("/api/rule",(0,p.Z)({data:a,method:"DELETE"},l||{})));case 1:case"end":return u.stop()}},d)})),b.apply(this,arguments)}var de=function(){var d=(0,f.Z)(n().mark(function a(l){var o;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=F.ZP.loading("\u6B63\u5728\u6DFB\u52A0"),t.prev=1,t.next=4,le((0,p.Z)({},l));case 4:return o(),F.ZP.success("\u6DFB\u52A0\u6210\u529F"),t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t.catch(1),o(),F.ZP.error("\u6DFB\u52A0\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),t.abrupt("return",!1);case 14:case"end":return t.stop()}},a,null,[[1,9]])}));return function(l){return d.apply(this,arguments)}}(),oe=function(){var d=(0,f.Z)(n().mark(function a(l,o){var u;return n().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return u=F.ZP.loading("\u6B63\u5728\u914D\u7F6E"),m.prev=1,m.next=4,se((0,p.Z)((0,p.Z)({},o),l));case 4:return u(),F.ZP.success("\u914D\u7F6E\u6210\u529F"),m.abrupt("return",!0);case 9:return m.prev=9,m.t0=m.catch(1),u(),F.ZP.error("\u914D\u7F6E\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),m.abrupt("return",!1);case 14:case"end":return m.stop()}},a,null,[[1,9]])}));return function(l,o){return d.apply(this,arguments)}}(),ce=function(){var d=(0,f.Z)(n().mark(function a(l){var o;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=F.ZP.loading("\u6B63\u5728\u5220\u9664"),l){t.next=3;break}return t.abrupt("return",!0);case 3:return t.prev=3,t.next=6,ie({key:l.map(function(m){return m.key})});case 6:return o(),F.ZP.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"),t.abrupt("return",!0);case 11:return t.prev=11,t.t0=t.catch(3),o(),F.ZP.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),t.abrupt("return",!1);case 16:case"end":return t.stop()}},a,null,[[3,11]])}));return function(l){return d.apply(this,arguments)}}(),me=function(){var a=(0,y.useState)(!1),l=(0,x.Z)(a,2),o=l[0],u=l[1],t=(0,y.useState)(!1),m=(0,x.Z)(t,2),ve=m[0],$=m[1],fe=(0,y.useState)(!1),L=(0,x.Z)(fe,2),pe=L[0],M=L[1],g=(0,y.useRef)(),Ze=(0,y.useState)(),U=(0,x.Z)(Ze,2),v=U[0],S=U[1],Fe=(0,y.useState)([]),W=(0,x.Z)(Fe,2),j=W[0],Y=W[1],G=[{title:"\u89C4\u5219\u540D\u79F0",dataIndex:"name",tip:"\u89C4\u5219\u540D\u79F0\u662F\u552F\u4E00\u7684 key",render:function(s,i){return(0,r.jsx)("a",{onClick:function(){S(i),M(!0)},children:s})}},{title:"\u63CF\u8FF0",dataIndex:"desc",valueType:"textarea"},{title:"\u670D\u52A1\u8C03\u7528\u6B21\u6570",dataIndex:"callNo",sorter:!0,hideInForm:!0,renderText:function(s){return"".concat(s,"\u4E07")}},{title:"\u72B6\u6001",dataIndex:"status",hideInForm:!0,valueEnum:{0:{text:"\u5173\u95ED",status:"Default"},1:{text:"\u8FD0\u884C\u4E2D",status:"Processing"},2:{text:"\u5DF2\u4E0A\u7EBF",status:"Success"},3:{text:"\u5F02\u5E38",status:"Error"}}},{title:"\u4E0A\u6B21\u8C03\u5EA6\u65F6\u95F4",sorter:!0,dataIndex:"updatedAt",valueType:"dateTime",renderFormItem:function(s,i,Z){var C=i.defaultRender,h=(0,K.Z)(i,["defaultRender"]),O=Z.getFieldValue("status");return"".concat(O)==="0"?!1:"".concat(O)==="3"?(0,r.jsx)(z.Z,(0,p.Z)((0,p.Z)({},h),{},{placeholder:"\u8BF7\u8F93\u5165\u5F02\u5E38\u539F\u56E0\uFF01"})):C(s)}},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",render:function(s,i){return[(0,r.jsx)("a",{onClick:function(){$(!0),S(i)},children:"\u914D\u7F6E"},"config"),(0,r.jsx)("a",{href:"https://procomponents.ant.design/",children:"\u8BA2\u9605\u8B66\u62A5"},"subscribeAlert")]}}];return(0,r.jsxs)(Q.ZP,{children:[(0,r.jsx)(k.ZP,{headerTitle:"\u67E5\u8BE2\u8868\u683C",actionRef:g,rowKey:"key",search:{labelWidth:120},toolBarRender:function(){return[(0,r.jsxs)(w.Z,{type:"primary",onClick:function(){u(!0)},children:[(0,r.jsx)(J.Z,{})," \u65B0\u5EFA"]},"primary")]},request:ne,columns:G,rowSelection:{onChange:function(s,i){Y(i)}}}),(j==null?void 0:j.length)>0&&(0,r.jsxs)(X.Z,{extra:(0,r.jsxs)("div",{children:["\u5DF2\u9009\u62E9"," ",(0,r.jsx)("a",{style:{fontWeight:600},children:j.length})," ","\u9879 \xA0\xA0",(0,r.jsxs)("span",{children:["\u670D\u52A1\u8C03\u7528\u6B21\u6570\u603B\u8BA1 ",j.reduce(function(c,s){return c+s.callNo},0)," \u4E07"]})]}),children:[(0,r.jsx)(w.Z,{onClick:(0,f.Z)(n().mark(function c(){var s,i;return n().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,ce(j);case 2:Y([]),(s=g.current)===null||s===void 0||(i=s.reloadAndRest)===null||i===void 0||i.call(s);case 4:case"end":return C.stop()}},c)})),children:"\u6279\u91CF\u5220\u9664"}),(0,r.jsx)(w.Z,{type:"primary",children:"\u6279\u91CF\u5BA1\u6279"})]}),(0,r.jsxs)(q.Y,{title:"\u65B0\u5EFA\u89C4\u5219",width:"400px",visible:o,onVisibleChange:u,onFinish:function(){var c=(0,f.Z)(n().mark(function s(i){var Z;return n().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,de(i);case 2:Z=h.sent,Z&&(u(!1),g.current&&g.current.reload());case 4:case"end":return h.stop()}},s)}));return function(s){return c.apply(this,arguments)}}(),children:[(0,r.jsx)(V.Z,{rules:[{required:!0,message:"\u89C4\u5219\u540D\u79F0\u4E3A\u5FC5\u586B\u9879"}],width:"md",name:"name"}),(0,r.jsx)(I.Z,{width:"md",name:"desc"})]}),(0,r.jsx)(te,{onSubmit:function(){var c=(0,f.Z)(n().mark(function s(i){var Z;return n().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,oe(i,v);case 2:Z=h.sent,Z&&($(!1),S(void 0),g.current&&g.current.reload());case 4:case"end":return h.stop()}},s)}));return function(s){return c.apply(this,arguments)}}(),onCancel:function(){$(!1),S(void 0)},updateModalVisible:ve,values:v||{}}),(0,r.jsx)(N.Z,{width:600,visible:pe,onClose:function(){S(void 0),M(!1)},closable:!1,children:(v==null?void 0:v.name)&&(0,r.jsx)(_.ZP,{column:2,title:v==null?void 0:v.name,request:(0,f.Z)(n().mark(function c(){return n().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",{data:v||{}});case 1:case"end":return i.stop()}},c)})),params:{id:v==null?void 0:v.name},columns:G})})]})},he=me}}]);
