<template lang="pug">
  div
    q-card.q-pa-lg(style="min-width:300px;")
      p.text-center  Vigor Earn
      div(v-if="page==1")
        p.text-center EOS Account Login
        q-form(@submit="login" ).text-white.q-pa-md
          q-input( input-style="font-size:30px;" v-model="form.username" placeholder="EOS Account" :error="!usernameValid" dark).text-white
            template(v-slot:error) {{usernameErrorMsg}}
          //- q-input(v-model="form.email" label="Email" :error="!emailValid" type="email")
          //-   template(v-slot:error) {{emailErrorMsg}}
        q-card.bg-red.q-pa-sm.q-ma-sm.text-white(v-if="errormsg")
          p Error: {{errormsg}}
        .row.justify-center.q-pt-lg
          q-btn(@click="login()" color="primary" size="lg") Login
      div(v-if="page==2")
        h6.text-center {{statusmsg}}
        .flex.flex-center.q-pa-lg
          q-spinner(v-if="loading" size="50px" color="green")
          q-icon(v-else  name="check" size="50px" color="green")
      div(v-if="page==3")
        h6.text-center {{errormsg}}
        .row.justify-center
          q-btn(color="primary" size="lg" @click="$router.push({name:'Register'}),$root.$emit('modal')") Register Now
        h6.text-center You need to register first before you can earn VIG tokens.

</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      page:1,
      errormsg:null,
      loading:true,
      statusmsg:null,
      emailErrorMsg:null,
      passErrorMsg:null,
      usernameErrorMsg:null,
      emailValid:true,
      passValid:true,
      usernameValid:true,
      form:{
        username:""
      }
    }
  },
  methods:{
    async login(){
      if (!(await this.validForm())) return
      this.statusmsg = "Finding EOS Account..."
      this.page = 2
      const candidates = (await this.$eos.getCandidates()).map(el => el.candidate_name)
      const existing = candidates.find(el => el === this.form.username)
      if (existing) {
        setTimeout(el => {
          this.statusmsg = "You are registered as a custodian."
          this.loading = false
          window.localStorage.setItem('thisUser',JSON.stringify(this.form))
          this.$root.$emit('set','thisUser',this.form)
          this.$router.push({name:"Learn"})
          setTimeout(el => {
            this.$root.$emit('modal')
          },1000)
        },500)
      } else {
        this.loading = false
        this.page = 3
        this.errormsg = "You are not registered as a Vigor DAC Custodian."
      }
    },
    async register(){
      if (!(await this.validForm())) return
      this.statusmsg = "Registering Account..."
      this.page = 2
      setTimeout(el => {
        this.statusmsg = "Registration Successful"
        this.loading = false
        window.localStorage.setItem('thisUser',JSON.stringify(this.form))
        this.$root.$emit('set','thisUser',this.form)
        setTimeout(el => {
          this.$root.$emit('modal')
        },500)
      },1000)
    },
    validForm(){
      return true
    }
  }
}
</script>
