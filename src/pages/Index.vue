<template lang="pug">
  q-page
    div(v-if="!joinURL")
      .flex.flex-center
        div
          h4.text-grey-3.q-mb-md.text-center.text-uppercase {{text[5]}}
      .row.flex-center
        .col.col-md-10.col-lg-8.col-xl-6
          q-card.q-ma-md.q-pa-md.text-white.bg-bg2(style="min-height:200px;")
            h6.justify-center.q-ma-md.text-center.vigor-reward-text {{text[0]}}
            .q-ma-sm
            .row.justify-around
              .col-12.col-md-6.col-lg-4.q-pa-lg
                .row.justify-center.q-pa-lg
                  q-btn.text-capitalize(@click="$root.$emit('modal','auth')" color="primary") {{text[4]}}
                p.text-body1.q-ma-xs.text-center {{text[1]}}
              .col-12.col-md-6.col-lg-4.q-pa-lg
                .row.justify-center.q-pa-lg
                  q-btn.text-capitalize.q-btn-text(@click="$router.push({name:'Register'})" color="primary") {{text[3]}}
                p.text-body1.q-ma-xs.text-center {{text[2]}}
    .flex.flex-center
      div
        h4.text-uppercase.text-grey-3.q-mb-md.text-center Join Vigor
    .row.flex-center
      .col.col-md-10.col-lg-8.col-xl-6
        q-card.q-ma-md.q-pa-md.text-white.bg-bg2(style="min-height:200px;")
          h6.q-ma-md.text-center Early adopters can gain access to the Vigor platform before anyone else
          .q-ma-sm

          .row.justify-center
            div.referlistcontainer
              div.referlistinnercontainer
                input(type="text" id="referlistemail" placeholder="youremail@provider.com")
                input(type="button" id="referlistbutton" value="Join Waitlist" @click="join")
          p.vigor-reward-text.text-center(style="font-size:20px") Move up the waitlist by sharing your referral link with your friends
          p.vigor-reward-text.text-center(style="font-size:20px") Each day the Vigor DAC Custodians invite the top 10 invited users to participate on the Vigor platform.
          p.vigor-reward-text.text-center.text-muted After the Vigor Beta period is over, anyone will be able to join instantly.
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
    // console.log(this.$route.query.join)
    // let script = document.createElement('script')
    // script.setAttribute('src', 'https://referlist.co/resources/referlist.js')
    // document.head.appendChild(script)
    // // document.addEventListener("DOMContentLoaded", function(event) {
    // //     window.referlist.initialize({ domain: 'joinvigor' }) 
    // // })
    // setTimeout(()=>{
    //   window.referlist.initialize({ domain: 'joinvigor' }) 
    // },3000)
  },
  methods:{
    join(){
      window.referlist.initialize({ domain: 'joinvigor' }) 
    }
  },
  computed:{
    joinURL(){
      return window.location.href.search("join") > -1
    },
    lang(){
      return this.$lang[this.$route.name.toLowerCase()]
    },
    text(){
      return this.lang.text
    }
  }
 }
</script>
