<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header(elevated)
      q-toolbar.text-white.shadow-0
        div(style="width:150px; height:100px;").q-pa-xs.relative-position
          img(src="statics/vig.svg").absolute-center.on-right  
        q-toolbar-title(flat)
          h4.q-ma-xs.text-light-paragraph.q-pl-sm Earn
        div(v-if="thisUser")
          .row
            q-toolbar-title {{thisUser.username}}
            q-btn.inline(@click="$root.$emit('logout')" flat color="red")
              q-tooltip Logout
              q-icon(name="logout")
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
export default {  
  name: 'MyLayout',
  props:['thisUser'],
  data () {
    return {
      pages:[
        {name:"Home",icon:"home"},

      ],
      leftDrawerOpen: false
    }
  },
  methods:{
    navigate(routeData){
      if (this.$route.name === routeData.name) return
      else this.$router.push(routeData)
    }
  }
}
</script>

<style lang="stylus">

</style>