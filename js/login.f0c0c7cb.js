(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"1adc":function(t,e,a){},"66c0":function(t,e,a){"use strict";var s=a("1adc"),r=a.n(s);r.a},dd7b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("x-form",{attrs:{schema:t.schema,"submit-handler":t.submit,"confirm-text":"登录","has-cancel":!1}})],1)],1)],1)},r=[],i=a("9ab4"),n=a("60a3"),o=a("9530"),u=a.n(o),l=a("4bb5");let c=class extends n["d"]{constructor(){super(...arguments),this.schema={type:"object",properties:{username:{type:"string",title:"用户名"},password:{type:"string",format:"password",title:"密码"}},required:["username","password"]}}async submit(t){var e=await this.$apollo.mutate({mutation:u.a`mutation($item: UserInfoInput!){
        login(item:$item) {
          username
          role
        }
      }`,variables:{item:t}}),a=e.data.login,s=a.username,r=a.role;this.updateUserName(s),this.setRole(r),this.$router.replace(this.$route.query.redirect_url||"/")}};i["a"]([l["a"]],c.prototype,"setRole",void 0),i["a"]([l["c"]],c.prototype,"updateUserName",void 0),c=i["a"]([Object(n["a"])({})],c);var m=c,p=m,d=(a("66c0"),a("2877")),h=Object(d["a"])(p,s,r,!1,null,null,null);h.options.__file="login.vue";e["default"]=h.exports}}]);