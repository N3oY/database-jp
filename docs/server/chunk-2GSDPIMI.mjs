import './polyfills.server.mjs';
import{A as F,B as P,C as S,F as z,J as D,M as v,a as C,b as n,c as M,d as f,e as r,f as h,g as a,h as w,i as O,j as b,k as s,l as p,m as l,n as u,o as d,p as I,q as x,y as N,z as j}from"./chunk-QWCPF6W7.mjs";var V=(()=>{let t=class t{constructor(o){this.http=o,this.SheeturlNoti="https://script.google.com/macros/s/AKfycbwijoFID9V4K3KIchD_R2R6vHc-xYU9bILuYvJoqb2oTXmi3xD5e28joig8d0OpSvQOYg/exec"}getGoogleSheetValue(){return this.http.get(this.SheeturlNoti)}};t.\u0275fac=function(i){return new(i||t)(M(j))},t.\u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function k(e,t){if(e&1&&(s(0,"div",1)(1,"div",2)(2,"a",3),l(3,"img",4),p()(),s(4,"div",5)(5,"dl")(6,"dd"),d(7),p(),s(8,"a",6)(9,"dt"),d(10),p(),s(11,"dd"),d(12),p()()()()()),e&2){let c=t.$implicit;a(2),u("href",c.url,h),a(),u("src",c.imagen,h),a(4),I(c.organizacion),a(3),x("",c.noticia," "),a(2),x("",c.descripcion," ")}}var E=(()=>{let t=class t{constructor(o){this.service=o,this.dbNot=[]}ngOnInit(){this.getValues()}getValues(){this.service.getGoogleSheetValue().subscribe(o=>{console.log(o),this.dbNot=o.data,console.log(this.dbNot)})}};t.\u0275fac=function(i){return new(i||t)(w(V))},t.\u0275cmp=f({type:t,selectors:[["app-noticias"]],decls:1,vars:1,consts:[["class","flex-container",4,"ngFor","ngForOf"],[1,"flex-container"],[1,"flex-item-left"],[3,"href"],["width","80%%","height","400px",3,"src"],[1,"flex-item-right"],["href",""]],template:function(i,y){i&1&&O(0,k,13,5,"div",0),i&2&&b("ngForOf",y.dbNot)},dependencies:[N],styles:[".td[_ngcontent-%COMP%]{padding:15px}.org[_ngcontent-%COMP%]{color:#fff;font-size:50%;margin:10px 0}.dt[_ngcontent-%COMP%]{margin-top:20px;color:#fff;font-size:130%}.dd[_ngcontent-%COMP%]{max-height:100%;max-width:100%;color:#fff;font-size:80%;margin-top:20px}a[_ngcontent-%COMP%]{text-decoration:none}.flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;font-size:30px;margin-top:40px;width:100%;height:100%;flex-direction:row}.flex-item-left[_ngcontent-%COMP%]{background-color:gray;text-align:center;padding:30px;flex:50%}.flex-item-right[_ngcontent-%COMP%]{background-color:gray;padding:15px;height:100%;width:100%;flex:50%}@media (max-width: 900px){.flex-item-right[_ngcontent-%COMP%], .flex-item-left[_ngcontent-%COMP%]{flex:100%;flex-direction:row}}"]});let e=t;return e})();var K=[{path:"",component:E,pathMatch:"full"}],H=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r({type:t}),t.\u0275inj=n({imports:[v.forRoot(K),v]});let e=t;return e})();var g=(()=>{let t=class t{constructor(){this.title="databaseJP"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(i,y){i&1&&l(0,"router-outlet")},dependencies:[D]});let e=t;return e})();var R=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r({type:t,bootstrap:[g]}),t.\u0275inj=n({providers:[S()],imports:[P,H,F]});let e=t;return e})();var U=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r({type:t,bootstrap:[g]}),t.\u0275inj=n({imports:[R,z]});let e=t;return e})();export{U as a};