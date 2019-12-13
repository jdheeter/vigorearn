<template lang="pug">
  q-page
    .flex.flex-center
      div
        h4 Register Custodianship
    .row.flex-center
      .col.col-md-10
        q-card.q-ma-md.q-pa-md
          .q-pa-md
            h6.text-center Before you start you need to have #[a(href="https://get-scatter.com" target="_blank") Scatter] installed and own an EOS account.
          .row.justify-center
            .col.col-sm-12.col-md-4
              q-card.q-ma-md.q-pa-md(style="min-height:500px;").bg-grey-8
                .row.justify-center(style="min-height:350px;")
                  img(src="statics/step1.png" style="min-width:200px; max-width:400px; object-fit: contain;")
                .row
                  .col-auto
                    h4 1
                  .col
                    div.q-pa-md
                      h6.q-ma-xs Visit #[a(href="https://vig.ai" target="_blank") vig.ai] and select #[strong LOGIN]. Follow the prompt from the Scatter popup.
            .col.col-sm-12.col-md-4
              q-card.q-ma-md.q-pa-md(style="min-height:500px;").bg-grey-8
                .row.justify-center(style="min-height:350px;")
                  img(src="statics/step2.png" style="min-width:200px; max-width:400px; object-fit: scale-down;")
                .row
                  .col-auto
                    h4 2
                  .col
                    div.q-pa-md
                      h6.q-ma-xs Navigate to #[strong Sign the Consitution], read the constitution, click the #[strong SIGN] button.
            .col.col-sm-12.col-md-4
              q-card.q-ma-md.q-pa-md(style="min-height:500px;").bg-grey-8
                .row.justify-center(style="min-height:350px;")
                  img(src="statics/step3.png" style="min-width:200px; max-width:400px; object-fit: contain;")
                .row
                  .col-auto
                    h4 3
                  .col
                    div.q-pa-md
                      h6.q-ma-xs Navigate to #[strong Register As Custodian], fill in the required information, click the #[strong REGISTER] button.
          .q-pa-xs
            h6.text-center If you have any questions, just ask in the #[a(href="https://t.me/vigorstablecoin" target="_blank") Vigor Telegram] chatroom.
          .q-pa-xs
            h6.text-center.q-ma-xs After you have registered, simply login on this page to continue.
          .row.justify-center.q-ma-lg
            q-btn(size="lg" color="primary" @click="$root.$emit('modal','auth')") Login
          .row.q-ma-xl

</template>
<script>
console.log('Index')
export default { name: 'Index', props:['thisUser'],
  data(){
    return {
    }
  },
  methods:{

  }
 }
</script>
