<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header(elevated)
      q-toolbar.text-white.shadow-0(flat)
        .row.items-center
          div.q-pa-sm
            img(src="statics/vig.svg" style="width:150px; height:60px;").q-mt-sm   
        q-toolbar-title.no-margin.no-padding
          h4.text-light-paragraph.no-margin Earn
        div(v-if="thisUser")
          .row
            q-toolbar-title {{thisUser.username}}
            q-btn.inline(@click="$root.$emit('logout')" flat color="red")
              q-tooltip Logout
              q-icon(name="logout")
        div
          q-btn-dropdown(:label="langBtn" size="xl") 
            q-list
              q-item(v-for="lang of langList" :key="lang" v-if="lang != $lang.current_lang" clickable v-close-popup @click="$lang.setLang(lang)").text-center.full-width
                .row.justify-center
                  h4.no-margin.text-grey-9.text-center {{displayLang(lang)}} {{flag(lang)}}


    //- q-drawer(v-model="leftDrawerOpen" show-if-above bordered content-class="traycolor" :width="55" :breakpoint="100")
    //-   q-item-label(header)
    //-   q-list {{$router.route}}
    //-     q-item(v-for="(page, index) in pages" :key="index" clickable 
    //-     :active="page.name === $route.name" 
    //-     active-class="bg-accent text-white"
    //-     v-ripple @click="navigate({name:page.name})")
    //-       q-item-section(avatar) 
    //-         q-icon(:name="page.icon")
    //-       q-item-section(title) {{page.name}}
    q-page-container
      router-view(:thisUser="thisUser")
            
</template>

<script>
import flag from 'locale-emoji'
export default {  
  name: 'MyLayout',
  props:['thisUser'],
  data () {
    return {
      flag,
      leftDrawerOpen: false
    }
  },
  mounted(){
    console.log(this.$lang)
  },
  computed:{
    langBtn(){
      return this.displayLang(this.$lang.current_lang) + ' ' + flag(this.$lang.current_lang)
    }
  },
  methods:{
    displayLang(lang) {
      const split = lang.split('-')
      if (split.length > 1) return lang.split('-')[1].toUpperCase()
      else return lang.split('-')[0].toUpperCase()
    },
    navigate(routeData){
      if (this.$route.name === routeData.name) return
      else this.$router.push(routeData)
    }
  },watch:{

  }
}
</script>

<style lang="stylus">

</style>