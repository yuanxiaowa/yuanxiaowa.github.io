(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{7803:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"fill-height":""}},[s("v-layout",{attrs:{"align-center":"","justify-center":""}},[s("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[s("x-form",{attrs:{schema:t.schema,"submit-handler":t.submit,"confirm-text":"注册","has-cancel":!1}})],1)],1)],1)},r=[],i=s("9ab4"),n=s("60a3"),o=s("9530"),c=s.n(o),u=s("4bb5");let l=class extends n["d"]{constructor(){super(...arguments),this.schema={type:"object",properties:{username:{type:"string",title:"用户名"},password:{type:"string",format:"password",title:"密码"}},required:["username","password"]}}async submit(t){var e=await this.$apollo.mutate({mutation:c.a`mutation($item: UserInfoInput!){
        register(item:$item) {
          username
          role
        }
      }`,variables:{item:t}}),s=e.data.register,a=s.username,r=s.role;this.updateUserName(a),this.setRole(r),this.$toast("注册成功"),this.$router.replace("/")}};i["b"]([u["a"]],l.prototype,"setRole",void 0),i["b"]([u["c"]],l.prototype,"updateUserName",void 0),l=i["b"]([Object(n["a"])({})],l);var m=l,p=m,d=s("2877"),b=s("acc7"),h=s.n(b),f=Object(d["a"])(p,a,r,!1,null,null,null);"function"===typeof h.a&&h()(f);e["default"]=f.exports},acc7:function(t,e){}}]);