(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fff00aa"],{"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var i=a("ade3"),s=a("5530"),n=(a("4b85"),a("2b0e")),r=a("d9f7"),o=a("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(a,i){return a[t+Object(o["w"])(i)]=e(),a}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},h=u("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},p=u("justify",(function(){return{type:String,default:null,validator:v}})),m=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},f=u("alignContent",(function(){return{type:String,default:null,validator:m}})),g={align:Object.keys(h),justify:Object.keys(p),alignContent:Object.keys(f)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){var i=b[t];if(null!=a){if(e){var s=e.replace(t,"");i+="-".concat(s)}return i+="-".concat(a),i.toLowerCase()}}var C=new Map;e["a"]=n["a"].extend({name:"v-row",functional:!0,props:Object(s["a"])(Object(s["a"])(Object(s["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h),{},{justify:{type:String,default:null,validator:v}},p),{},{alignContent:{type:String,default:null,validator:m}},f),render:function(t,e){var a=e.props,s=e.data,n=e.children,o="";for(var c in a)o+=String(a[c]);var l=C.get(o);return l||function(){var t,e;for(e in l=[],g)g[e].forEach((function(t){var i=a[t],s=y(e,t,i);s&&l.push(s)}));l.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(i["a"])(t,"align-".concat(a.align),a.align),Object(i["a"])(t,"justify-".concat(a.justify),a.justify),Object(i["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),C.set(o,l)}(),t(a.tag,Object(r["a"])(s,{staticClass:"row",class:l}),n)}})},"2fa4":function(t,e,a){"use strict";a("20f6");var i=a("80d2");e["a"]=Object(i["g"])("spacer","div","v-spacer")},"51c9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"settings-wrapper"}},[a("v-card",{staticClass:"py-2 px-4",staticStyle:{position:"fixed",top:"115px",right:"-35px","border-radius":"8px"},attrs:{id:"settings",color:"rgba(0, 0, 0, .3)",dark:"",flat:"",link:"","min-width":"100"}},[a("v-icon",{attrs:{large:""}},[t._v(" mdi-settings ")])],1),a("v-menu",{attrs:{"close-on-content-click":!1,activator:"#settings",bottom:"","content-class":"v-settings",left:"","nudge-left":"8","offset-x":"",origin:"top right",transition:"scale-transition"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-card",{staticClass:"text-center mb-0",attrs:{width:"300"}},[a("v-card-text",[a("strong",{staticClass:"mb-3 d-inline-block"},[t._v("SIDEBAR FILTERS")]),a("v-item-group",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}},t._l(t.colors,(function(e){return a("v-item",{key:e,attrs:{value:e},scopedSlots:t._u([{key:"default",fn:function(t){var i=t.active,s=t.toggle;return[a("v-avatar",{staticClass:"v-settings__item",class:i&&"v-settings__item--active",attrs:{color:e,size:"25"},on:{click:s}})]}}],null,!0)})})),1),a("v-divider",{staticClass:"my-4 secondary"}),a("v-row",{attrs:{align:"center","no-gutters":""}},[a("v-col",{attrs:{cols:"auto"}},[t._v(" Dark Mode ")]),a("v-spacer"),a("v-col",{attrs:{cols:"auto"}},[a("v-switch",{staticClass:"ma-0 pa-0",attrs:{color:"secondary","hide-details":""},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1)],1),a("v-divider",{staticClass:"my-4 secondary"}),a("v-row",{attrs:{align:"center","no-gutters":""}},[a("v-col",{attrs:{cols:"auto"}},[t._v(" Sidebar Image ")]),a("v-spacer"),a("v-col",{attrs:{cols:"auto"}},[a("v-switch",{staticClass:"ma-0 pa-0",attrs:{color:"secondary","hide-details":""},model:{value:t.showImg,callback:function(e){t.showImg=e},expression:"showImg"}})],1)],1),a("v-divider",{staticClass:"my-4 secondary"}),a("strong",{staticClass:"mb-3 d-inline-block"},[t._v("IMAGES")]),a("v-item-group",{staticClass:"d-flex justify-space-between mb-3",model:{value:t.image,callback:function(e){t.image=e},expression:"image"}},t._l(t.images,(function(e){return a("v-item",{key:e,staticClass:"mx-1",attrs:{value:e},scopedSlots:t._u([{key:"default",fn:function(t){var i=t.active,s=t.toggle;return[a("v-sheet",{staticClass:"d-inline-block v-settings__item",class:i&&"v-settings__item--active",on:{click:s}},[a("v-img",{attrs:{src:e,height:"100",width:"50"}})],1)]}}],null,!0)})})),1),a("v-btn",{staticClass:"mb-3",attrs:{block:"",color:"success",href:"https://www.creative-tim.com/product/vuetify-material-dashboard",default:"",rel:"noopener",target:"_blank"}},[t._v(" Free Download ")]),a("v-btn",{staticClass:"mb-3",attrs:{block:"",color:"grey darken-1",dark:"",href:"https://vuetifyjs.com/components/api-explorer",default:"",rel:"noopener",target:"_blank"}},[t._v(" Documentation ")]),a("div",{staticClass:"my-12"}),a("div",[a("strong",{staticClass:"mb-3 d-inline-block"},[t._v("THANK YOU FOR SHARING!")])]),a("v-btn",{staticClass:"ma-1",attrs:{color:"#55acee",dark:"",default:"",rounded:""}},[a("v-icon",[t._v("mdi-twitter")]),t._v(" - 45 ")],1),a("v-btn",{staticClass:"ma-1",attrs:{color:"#3b5998",dark:"",default:"",rounded:""}},[a("v-icon",[t._v("mdi-facebook")]),t._v(" - 50 ")],1)],1)],1)],1)],1)},s=[],n=a("5530"),r=a("a452"),o=a("2f62"),c={name:"DashboardCoreSettings",mixins:[r["a"]],data:function(){return{color:"#E91E63",colors:["#9C27b0","#00CAE3","#4CAF50","#ff9800","#E91E63","#FF5252"],image:"https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg",images:["https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg","https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-2.jpg","https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-3.jpg","https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-4.jpg"],menu:!1,saveImage:"",showImg:!0}},computed:Object(n["a"])({},Object(o["c"])(["barImage"])),watch:{color:function(t){this.$vuetify.theme.themes[this.isDark?"dark":"light"].primary=t},showImg:function(t){t?this.saveImage?(this.setBarImage(this.saveImage),this.saveImage=""):this.setBarImage(t):(this.saveImage=this.barImage,this.setBarImage(""))},image:function(t){this.setBarImage(t)}},methods:Object(n["a"])({},Object(o["b"])({setBarImage:"SET_BAR_IMAGE"}))},l=c,u=(a("b947"),a("2877")),d=a("6544"),h=a.n(d),v=a("8212"),p=a("8336"),m=a("b0af"),f=a("99d9"),g=a("62ad"),b=a("ce7e"),y=a("132d"),C=a("adda"),w=a("ade3"),k=a("4e82"),j=a("58df"),S=a("d9bd"),_=a("2b0e"),V=_["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(w["a"])({},this.activeClass,this.isActive)}),t):(Object(S["c"])("v-item should only contain a single element",this),t)):(Object(S["c"])("v-item is missing a default scopedSlot",this),null);var t}}),A=Object(j["a"])(V,Object(k["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),O=a("604c"),I=a("e449"),x=a("0fd9"),E=a("8dd9"),$=a("2fa4"),B=(a("0481"),a("4069"),a("ec29"),a("9d01"),a("4de4"),a("45fc"),a("d3b7"),a("25f0"),a("c37a")),D=a("5607"),F=_["a"].extend({name:"rippleable",directives:{ripple:D["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),R=a("8547"),M=Object(j["a"])(B["a"],F,R["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=B["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var i=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===i&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),G=a("c3f0"),L=a("0789"),T=a("490a"),z=a("80d2"),K=M.extend({name:"v-switch",directives:{Touch:G["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},B["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(L["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(T["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===z["r"].left&&this.isActive||t.keyCode===z["r"].right&&!this.isActive)&&this.onChange()}}}),P=Object(u["a"])(l,i,s,!1,null,null,null);e["default"]=P.exports;h()(P,{VAvatar:v["a"],VBtn:p["a"],VCard:m["a"],VCardText:f["b"],VCol:g["a"],VDivider:b["a"],VIcon:y["a"],VImg:C["a"],VItem:A,VItemGroup:O["b"],VMenu:I["a"],VRow:x["a"],VSheet:E["a"],VSpacer:$["a"],VSwitch:K})},8547:function(t,e,a){"use strict";var i=a("2b0e"),s=a("80d2");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["h"]}}})},"9d01":function(t,e,a){},b947:function(t,e,a){"use strict";var i=a("c34c"),s=a.n(i);s.a},c34c:function(t,e,a){},ec29:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7fff00aa.8fb66bf4.js.map