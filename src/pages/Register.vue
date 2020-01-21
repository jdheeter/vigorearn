<template lang="pug">
  q-page
    .flex.flex-center
      div
        h3.text-grey-3.q-mb-md.text-center 
          md(:anchorAttributes="newTab" :source="text[1]") 
    .row.justify-center
      .col-12.col-md-12.col-lg-10.col-xl-10
        q-card.q-ma-md.q-pa-md
          h6.text-center
            md(:anchorAttributes="newTab" :source="text[0]")
          .row.justify-center
            q-card.col-12.col-sm-10.col-md-5.q-pa-md.q-ma-md.bg-grey-9(v-for="(step,index) of steps" :key="step")
              .row.justify-center
                img(:src="`statics/step${index+1}.png`" style="min-width:200px; max-width:600px; object-fit: scale-down;")
              .row
                .col-auto
                  h3.text-amber {{index+1}}
                .col
                  div.q-pa-md
                    h6.q-ma-xs 
                      md(:anchorAttributes="newTab" :source="step")
          h6.text-center 
            md(:anchorAttributes="newTab" :source="text[2]" )
          .q-pa-xs
            h6.text-center.q-ma-xs {{text[3]}}
          .row.justify-center.q-ma-lg
            q-btn(size="lg" color="primary" @click="$root.$emit('modal','auth')") Login
          .row.q-ma-xl
        
</template>
<script>
const steps = require('../registerInstructions')
export default { name: 'Index', props:['thisUser'], components:[],
  data(){
    return {
      newTab:{target: '_blank'}
    }
  },
  methods:{

  },
  computed:{
    lang(){
      return this.$lang[this.$route.name.toLowerCase()]
    },
    text(){return this.lang.text},
    steps(){return this.lang.steps}
  }
 }
</script>
<style>
/* 
.col {
  flex: 1;

} */
  
</style>