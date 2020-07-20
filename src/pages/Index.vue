<template lang="pug">
  q-page
    .flex.flex-center
      div
        h3.text-grey-3.q-mb-md.text-center {{text[5]}}
    .row.flex-center
      .col.col-md-10.col-lg-8.col-xl-6
        q-card.q-ma-md.q-pa-md.text-white.bg-bg2(style="min-height:200px;")
          h5.q-ma-md.text-center {{text[0]}}
          .q-ma-sm
          .row.justify-center
            .col-12.col-md-5.col-lg-4.bg-grey-9.q-pa-lg.q-ma-lg
              .row.justify-center.q-pa-lg
                q-btn(@click="$root.$emit('modal','auth')" color="primary" size="lg") {{text[4]}}
              h6.q-ma-xs {{text[1]}}
            .col-12.col-md-5.col-lg-4.bg-grey-9.q-pa-lg.q-ma-lg
              .row.justify-center.q-pa-lg
                q-btn(@click="$router.push({name:'Register'})" color="primary" size="lg") {{text[3]}}
              h6.q-ma-xs {{text[2]}}
    .flex.flex-center
      div
        h3.text-grey-3.q-mb-md.text-center Use Vigor
    .row.flex-center
      .col.col-md-10.col-lg-8.col-xl-6
        q-card.q-ma-md.q-pa-md.text-white.bg-bg2(style="min-height:200px;")
          h5.q-ma-md.text-center Early adopters can gain access to the Vigor platform before anyone else
          .q-ma-sm

          .row.justify-center
            div.referlistcontainer
              div.referlistinnercontainer
                input(type="text" id="referlistemail" placeholder="youremail@provider.com")
                input(type="button" id="referlistbutton" value="Join Waitlist" @click="join")
          p(style="font-size:20px") Move up the waitlist by sharing your referral link with your friends
          p(style="font-size:20px") Each day the Vigor DAC Custodians invite the top 10 invited users to participate on the Vigor platform.
          p After the Vigor Beta period is over, anyone will be able to join instantly.
      //- img(src="~assets/vigorearnlogo.png" style="max-width:100%; overflow:hidden; height:400px; width:100%; object-fit: cover;")
    .row.flex-center.text-white

</template>
<script>
import Vue from 'vue'
export default { name: 'Index', props:['thisUser'],
  data(){
    return {
    }
  },
  mounted(){
    let script = document.createElement('script')
    script.setAttribute('src', 'https://referlist.co/resources/referlist.js')
    document.head.appendChild(script)
    // document.addEventListener("DOMContentLoaded", function(event) {
    //     window.referlist.initialize({ domain: 'joinvigor' }) 
    // })
    Vue.nextTick(()=>{
      window.referlist.initialize({ domain: 'joinvigor' }) 
    })
    setTimeout(()=>{
      window.referlist.initialize({ domain: 'joinvigor' }) 
    },3000)
  },
  methods:{
    join(){
      window.referlist.initialize({ domain: 'joinvigor' }) 
    }
  },
  computed:{
    lang(){
      return this.$lang[this.$route.name.toLowerCase()]
    },
    text(){
      return this.lang.text
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