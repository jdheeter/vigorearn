<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header(elevated)
      q-toolbar.text-white.shadow-0(flat)
        .row.items-center
          div.q-pa-md
            img(src="statics/vig.svg" style="width:150px; height:60px;")  
        q-toolbar-title.no-margin.no-padding
          .row
            h6.text-light-paragraph.no-margin(style="padding-top: 3px;")(v-if="!joinURL") Rewards
            h5.text-light-paragraph.no-margin(v-else) Join

            q-btn.on-right(icon="link" label="vigor.ai" @click="openURL('https://vigor.ai')")
        div(v-if="thisUser")
          .row
            q-toolbar-title {{thisUser.username}}
            q-btn.inline(@click="$root.$emit('logout')" flat color="red")
              q-tooltip Logout
              q-icon(name="logout")
        div(v-if="!joinURL")
          q-btn-dropdown(:label="langBtn" size="lg") 
            q-list
              q-item(v-for="lang of langList" :key="lang" v-if="lang != $lang.current_lang" clickable v-close-popup @click="$lang.setLang(lang)").text-center.full-width
                .row.justify-center
                  h6.no-margin.text-grey-9.text-center {{displayLang(lang)}} {{flag(lang)}}


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
import {openURL} from 'quasar'
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
    joinURL(){
      return window.location.href.search("join") > -1
    },
    langBtn(){
      return this.displayLang(this.$lang.current_lang) + ' ' + flag(this.$lang.current_lang)
    }
  },
  methods:{
    openURL,
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
