(this["webpackJsonphello-react-native-custom-renderer"]=this["webpackJsonphello-react-native-custom-renderer"]||[]).push([[0],{14:function(t,e,n){t.exports=n(27)},27:function(t,e,n){"use strict";n.r(e);var i=n(3),a=n(4),o=n(5),u=n(2),r=n(9),l=n(6),s=n(0),c=n.n(s),h=n(10);function d(t){var e=t.item.name,n=t.selected;return c.a.createElement("text",null,"".concat(n?"[-]":"[ ]"," ").concat(e))}var p=function(){var t=c.a.useState([]),e=Object(h.a)(t,2),n=e[0],i=e[1],a=c.a.useState(0),o=Object(h.a)(a,2),u=o[0],r=o[1];return Object(s.useEffect)((function(){fetch("https://raw.githubusercontent.com/ericlewis/braclet/master/apps.json").then((function(t){t.json?t.json().then(i):i(JSON.parse(t))}))}),[]),Object(s.useEffect)((function(){window.buttonPressed=function(t){switch(t){case 1:return r(Math.max(u-1,0));case 2:return loadApp(n[u].name);case 3:return r(Math.min(u+1,n.length-1))}}}),[u,n.length]),c.a.createElement("view",null,0===n.length?c.a.createElement("text",null,"Loading..."):c.a.createElement("text",null,"App"),n.map((function(t,e){return c.a.createElement(d,{key:e,item:t,selected:e===u})})))},f=n(12),y=n.n(f),g=n(8),m=n(13),v=n(1),C=n.n(v),b=C.a.Config.create();b.setPointScaleFactor(0);var k=function(){function t(e){Object(i.a)(this,t),this.parent=null,this.children=[],this.computed=!1,this.layout=C.a.Node.createWithConfig(b),this.props=e,e&&e.style&&this.setStyle(e.style)}return Object(a.a)(t,[{key:"markDirty",value:function(){return this.layout.markDirty()}},{key:"setStyle",value:function(t){t.x&&this.layout.setPosition(C.a.EDGE_LEFT,t.x),t.y&&this.layout.setPosition(C.a.EDGE_TOP,t.y),t.height&&this.layout.setHeight(t.height),t.width&&this.layout.setWidth(t.width),t.paddingLeft&&this.layout.setPadding(C.a.EDGE_LEFT,t.paddingLeft),t.paddingRight&&this.layout.setPadding(C.a.EDGE_RIGHT,t.paddingRight),t.paddingTop&&this.layout.setPadding(C.a.EDGE_TOP,t.paddingTop),t.paddingBottom&&this.layout.setPadding(C.a.EDGE_BOTTOM,t.paddingBottom),t.flex&&this.layout.setFlex(t.flex),t.justifyContent&&this.layout.setJustifyContent(t.justifyContent),t.alignContent&&this.layout.setAlignContent(t.alignContent),t.alignItems&&this.layout.setAlignItems(t.alignItems),t.flexDirection&&this.layout.setFlexDirection(t.flexDirection)}},{key:"appendChild",value:function(t){t&&(t.parent=this,this.children.push(t),this.layout.insertChild(t.layout,this.layout.getChildCount()))}},{key:"appendChildBefore",value:function(t,e){var n=this.children.indexOf(e);-1!==n&&t&&(t.parent=this,this.children.splice(n,0,t),this.layout.insertChild(t.layout,n))}},{key:"removeChild",value:function(t){var e=this.children.indexOf(t);-1!==e&&(t.parent=null,this.children.splice(e,1),this.layout.removeChild(t.layout)),t.cleanup()}},{key:"removeAllChildren",value:function(){for(var t=Object(m.a)(this.children),e=0;e<t.length;e++)t[e].remove()}},{key:"remove",value:function(){this.parent.removeChild(this)}},{key:"cleanup",value:function(){this.children.forEach((function(t){return t.cleanup()})),this.layout.unsetMeasureFunc(),C.a.Node.destroy(this.layout)}},{key:"render",value:function(t){return this.children.flatMap((function(e){return e.render(t)})).join("")}},{key:"update",value:function(t){this.props=t,t&&t.style&&this.setStyle(t.style)}},{key:"getLayoutData",value:function(){var t=this.getAbsoluteLayout();return{type:this.name,top:t.top,left:t.left,width:t.width,style:this.style,height:t.height,children:this.children.map((function(t){return t.getLayoutData()}))}}},{key:"calculateLayout",value:function(){this.layout.calculateLayout(240,240,C.a.DIRECTION_LTR),this.computed=!0}},{key:"getAbsoluteLayout",value:function(){var t=this.parent,e=t&&t.getAbsoluteLayout?t.getAbsoluteLayout():{left:0,top:0};return{left:this.left+e.left,top:this.top+e.top,height:this.height,width:this.width}}},{key:"top",get:function(){return this.layout.getComputedTop()||0}},{key:"left",get:function(){return this.layout.getComputedLeft()||0}},{key:"right",get:function(){return this.layout.getComputedRight()||0}},{key:"bottom",get:function(){return this.layout.getComputedBottom()||0}},{key:"width",get:function(){return this.layout.getComputedWidth()}},{key:"minWidth",get:function(){return this.layout.getMinWidth().value}},{key:"maxWidth",get:function(){return this.layout.getMaxWidth().value}},{key:"height",get:function(){return this.layout.getComputedHeight()}},{key:"minHeight",get:function(){return this.layout.getMinHeight().value}},{key:"maxHeight",get:function(){return this.layout.getMaxHeight().value}}]),t}(),O=function(t){function e(){return Object(i.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(a.a)(e,[{key:"render",value:function(t){this.calculateLayout();var n="";return this.props.style&&(this.props.style.font&&(n+=".f(`".concat(this.props.style.font,"`)")),this.props.style.color&&(n+=".c(`".concat(this.props.style.color,"`)"))),n+Object(r.a)(Object(u.a)(e.prototype),"render",this).call(this,t)}}]),e}(k),x=n(7),j=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(o.a)(this,Object(u.a)(e).call(this,t))).text=void 0,n.text=t.text,n.layout.setMeasureFunc(n.measureText.bind(Object(x.a)(n))),n}return Object(l.a)(e,t),Object(a.a)(e,[{key:"measureText",value:function(t,e,n,i){return{height:16,width:8*(this.text||this.props.children).length*2}}},{key:"update",value:function(t){var e=t.children;this.text=e}},{key:"appendChild",value:function(t){t&&(t.parent=this,this.children.push(t),this.markDirty())}},{key:"removeChild",value:function(t){var e=this.children.indexOf(t);-1!==e&&(t.parent=null,this.children.splice(e,1),this.markDirty(),t.cleanup())}},{key:"render",value:function(){return".s(`".concat(this.text||this.props.children,"`, ").concat(this.left,", ").concat(this.top,")")}}]),e}(k),E={},w={now:Date.now,getRootHostContext:function(){return E},getChildHostContext:function(){return E},createInstance:function(t,e,n,i,a){return"text"===t?new j(e):new O(e)},createTextInstance:function(t,e,n,i){return new j({text:t})},finalizeInitialChildren:function(t,e,n){return!1},prepareForCommit:function(){},prepareUpdate:function(t,e,n){return{}},resetAfterCommit:function(t){t.render()},shouldSetTextContent:function(t,e){return!1},supportsMutation:!0,appendInitialChild:function(t,e){t.appendChild(e)},appendChild:function(t,e){t.appendChild(e)},appendChildToContainer:function(t,e){t.appendChild(e)},insertBefore:function(t,e,n){t.appendChildBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},removeChildFromContainer:function(t,e){t.removeChild(e)},commitTextUpdate:function(t,e,n){t.update(n)},commitUpdate:function(t,e,n,i,a){t.update(a)},schedulePassiveEffects:g.unstable_scheduleCallback,cancelPassiveEffects:g.unstable_cancelCallback},T=y()(w),D=function(t,e,n){return e._rootContainer||(e._rootContainer=T.createContainer(e,!1)),T.updateContainer(t,e._rootContainer,null,n)},L=function(t){function e(){return Object(i.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){UIManager.flush("g".concat(Object(r.a)(Object(u.a)(e.prototype),"render",this).call(this)))}}]),e}(k);D(c.a.createElement(p,null),new L)}},[[14,1,2]]]);
//# sourceMappingURL=main.81912616.chunk.js.map