<template lang="pug">
  q-page
    div
      .row.justify-center
        div
          h4.text-grey-3 Learn about Vigor DAC
          h6.text-white Three different levels to test your knowledge.
      .row.justify-center
        .col-10.col-md-8.bg-grey-10
          q-tabs(v-model="currentTab"
            class=""
            active-color="green"
            indicator-color="white"
            align="justify"
            style="font-size:40px;")
            q-tab(name="intro" no-caps).text-green
              h4.q-ma-xs Introduction
            q-tab(name="intermediate" no-caps)
              h4.q-ma-xs Intermediate
            q-tab(name="advanced" no-caps)
              h4.q-ma-xs Advanced
      .row.justify-center
        .col-10.col-md-8.bg-grey-10
          div(v-if="currentTab === 'intro'")
            .row.justify-center
              .col-12
                q-card.q-pa-md
                  h6.q-pa-md.q-ma-xs This introduction course will familiarize you with basic concepts.
                  .row.flex-center
                    .col-1
                      h3.text-white 1
                    .col-auto.col-md-4
                      q-btn(type='a' color="primary" size="lg" href="https://docs.google.com/document/d/14ewVW60IWGE04mVAcKjAJWLI-K1MP5-DCMOdkgo1hKI/edit" target="_blank") Read Educational Materials
                  .row.flex-center
                    .col-1
                      h3.text-white 2
                    .col-4
                      q-btn(type='a' color="primary" size="lg" href="https://docs.google.com/forms/d/e/1FAIpQLSfST_oj2wwPlLw-DIZXTKDrins6aSqs5rI8BrcD3MKq2HNQtA/viewform" target="_blank") 
                        | Complete Quiz
                  .row.flex-center
                    .col-1
                      h3.text-white 3
                    .col-4
                      h5.text-white If you answered correctly, you will receive VIG tokens.
          div(v-if="currentTab === 'intermediate'")
            .row.justify-center
              .col-12
                q-card.q-pa-md
                  h6.q-pa-md.q-ma-xs Coming soon....
          div(v-if="currentTab === 'advanced'")
            .row.justify-center
              .col-12
                q-card.q-pa-md
                  h6.q-pa-md.q-ma-xs Stay tuned....
</template>
<script>
console.log('Index')
export default { name: 'Index', props:['thisUser'],
  data(){
    return {
      currentTab:"intro"
    }
  },
  methods:{

  }
 }
</script>
