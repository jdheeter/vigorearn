<template lang="pug">
  q-page
    .flex.flex-center
      div
        h3.text-grey-3.q-mb-md.text-center Register  Candidateship
    .row.justify-center
      q-card.col.col-md-10.q-ma-md.q-pa-md
        .q-pa-md
          h6.text-center Before you start you need to have #[a(href="https://get-scatter.com" target="_blank") Scatter] installed and own an EOS account.
        .row.justify-center.q-gutter-lg   
          q-card.col.col-auto.col-md-4.q-pa-md.bg-grey-9(v-for="(step,index) of stepsLang" :key="step")
            .row.justify-center(style="min-height:350px; flex-grow: 12;")
              img(:src="`statics/step${index+1}.png`" style="min-width:200px; max-width:400px; object-fit: contain;")
            .row
              .col-auto
                h4 {{index+1}}
              .col
                div.q-pa-md
                  h6.q-ma-xs 
                    md(:anchorAttributes="newTab" :source="step")
        h6.text-center If you have any questions, just ask in the #[a(href="https://t.me/vigorstablecoin" target="_blank") Vigor Telegram] chatroom.
        .q-pa-xs
          h6.text-center.q-ma-xs After you have registered, simply login on this page to continue.
        .row.justify-center.q-ma-lg
          q-btn(size="lg" color="primary" @click="$root.$emit('modal','auth')") Login
        .row.q-ma-xl
        
</template>
<script>
const steps = require('../registerInstructions')
export default { name: 'Index', props:['thisUser'], components:[],
  data(){
    return {
      newTab:{target: '_blank'},
      steps
    }
  },
  methods:{

  },
  computed:{
    stepsLang(){
      return steps['EN']
    }
  }
 }
</script>
<style>
/* 
.col {
  flex: 1;

} */
  
</style>