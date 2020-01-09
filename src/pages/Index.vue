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
      //- img(src="~assets/vigorearnlogo.png" style="max-width:100%; overflow:hidden; height:400px; width:100%; object-fit: cover;")
    .row.flex-center.text-white

</template>
<script>
export default { name: 'Index', props:['thisUser'],
  data(){
    return {
    }
  },
  methods:{

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
