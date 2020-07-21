<template lang="pug">
  div(id="q-app")
    router-view(:thisUser="thisUser" :lang="lang")
    div
      q-dialog(v-model="showModal" @close="thisModal=null")
        component(:is="activeModal")
</template>

<script>


import auth from 'components/Auth'
export default { 
  name: 'App',
  components:{auth},
  data(){
    return {
      activeModal:false,
      showModal:false,
      thisUser:null,
      lang:'EN'
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      console.log('Init')
      this.autoLogin()
      this.$root.$on('modal',this.handleModal)
      this.$root.$on('set',this.handleSet)
      this.$root.$on('logout',this.handleLogout)
      const selectedLang = window.localStorage.getItem('lang')
      if (selectedLang) this.$lang.setLang(selectedLang)
      
      console.log(window.location.href)
      let script = document.createElement('script')
      script.setAttribute('src', 'https://referlist.co/resources/referlist.js')
      document.head.appendChild(script)
      // document.addEventListener("DOMContentLoaded", function(event) {
      //     window.referlist.initialize({ domain: 'joinvigor' }) 
      // })
      setTimeout(()=>{
        window.referlist.initialize({ domain: 'joinvigor' }) 
      },3000)
    },
    handleModal(data){
      if (data) this.showModal = true
      else this.showModal = false
      this.activeModal = data
    },
    handleSet(property,data) {
      if (!property) return
      this[property] = data
    },
    handleLogout(){
      this.thisUser = null
      window.localStorage.clear()
      this.$router.push({name:"Home"})
    },
    async autoLogin(){
      try {
        const localUser = window.localStorage.getItem('thisUser')
        if (localUser) {
          const candidates = (await this.$eos.getCandidates()).map(el => el.candidate_name)
          const existing = candidates.find(el => el === JSON.parse(localUser).username)
          if (existing) {
            this.thisUser = JSON.parse(localUser)
            if (this.$route.name === "Learn") return
            this.$router.push({name:"Learn"})
          } else {
            window.localStorage.clear()
            this.thisUser = null
          }
        }
      } catch (error) {
        console.error(error.toString())
        window.localStorage.clear()
      }

    }
  },
  watch:{
    '$lang.current_lang'(lang){
      console.log('lang change',lang)
      window.localStorage.setItem('lang',lang)
    }
  }
  }
</script>
<style>
  .referlistcontainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #referlistemail {
    width: 250px;
    margin-right: 10px;
    height: 45px;
    border-radius: 32px;
    border-color: black;
    font-size: 16px;
    padding-left: 10px;
  }
  #referlistbutton {
    width: 150px;
    height: 45px;
    border: none;
    border-radius: 32px;
    font-size: 16px;
    background-color: black;
    color: white;
  }
  .referlistinnercontainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 60px;
    /* padding-top: 60px; */
  }
</style>