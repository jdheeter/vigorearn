<template lang="pug">
  q-page
    .flex.flex-center
      div
        h3.text-grey-3.q-mb-md.text-center {{getText(5)}}
    .row.flex-center
      .col.col-md-10.col-lg-8.col-xl-6
        q-card.q-ma-md.q-pa-md.text-white.bg-bg2(style="min-height:200px;")
          h5.q-ma-md.text-center {{getText(0)}}
          .q-ma-sm
          .row.justify-center
            .col-12.col-md-5.col-lg-4.bg-grey-9.q-pa-lg.q-ma-lg
              .row.justify-center.q-pa-lg
                q-btn(@click="$root.$emit('modal','auth')" color="primary" size="lg") {{getText(4)}}
              h6.q-ma-xs {{getText(1)}}
            .col-12.col-md-5.col-lg-4.bg-grey-9.q-pa-lg.q-ma-lg
              .row.justify-center.q-pa-lg
                q-btn(@click="$router.push({name:'Register'})" color="primary" size="lg") {{getText(3)}}
              h6.q-ma-xs {{getText(2)}}
      //- img(src="~assets/vigorearnlogo.png" style="max-width:100%; overflow:hidden; height:400px; width:100%; object-fit: cover;")
    .row.flex-center.text-white

</template>
<script>
const text = {
  EN:[
    `Vigor Earn is a way to learn about VIGOR and earn some VIG tokens.`,
    `If you are already an approved Vigor DAC Candidate, click here to begin Vigor Earn.`,
    `If you are not yet a Vigor DAC Candidate, click here to learn how to sign up! `,
    `Register as Candidate`,
    `Login`,
    `Welcome To Vigor Earn`
  ]
}

console.log('Index')
export default { name: 'Index', props:['thisUser'],
  data(){
    return {
      lang:'EN'
    }
  },
  methods:{

  },
  computed:{
    getText(index){
      return index => text[this.$lang][index]
    }
  }
 }
</script>
