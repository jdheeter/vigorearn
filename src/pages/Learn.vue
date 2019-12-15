<template lang="pug">
  q-page
    div
      .flex.flex-center
        h3.text-grey-3.q-mb-md.text-center {{text[0]}}
      .flex.flex-center
        h6.text-white.q-pl-lg {{text[1]}}
      .row.justify-center.text-grey
        .col-12.col-md-8.bg-grey-10
          .row.justify-center.justify-around
            .col(v-for="(tab,index) of tabs" :key="index")
              q-btn.full-width(size="md" @click="currentTab = index" :class="selectedTab(index)") 
                .row.full-width.justify-center.q-mt-sm
                  q-icon(v-for="star of (index+1)" :key="star" name="star" size="xs" :color="starIcon(index)")
                .row.text-center.justify-center
                  p.q-ma-sm.lt-sm {{tab}}
                  h5.q-ma-sm.gt-xs {{tab}}
              .full-width(style="height:5px;" v-if="currentTab===index").bg-amber
              .full-width(style="height:5px;" v-else).bg-black
      .row.justify-center
        .col-12.col-md-8.bg-grey-10
          div
            .row
              .col-12
                q-card.q-pa-md(v-if="!pages[currentTab].active")
                  h6.q-pa-md.q-ma-xs {{pages[currentTab].text[0]}}
                q-card.q-pa-md(v-else)
                  h6.q-pa-md.q-ma-xs {{pages[currentTab].text[0]}}
                  .row.justify-center
                    .col-12.col-sm-10
                      .row.items-center
                        .col-1.q-mr-md
                          h3.text-white 1
                        .col
                          q-btn(type='a' color="primary" size="lg" :href="pages[currentTab].link[0]" target="_blank") {{pages[currentTab].text[1]}}
                      .row.items-center
                        .col-1.q-mr-md
                          h3.text-white 2
                        .col
                          q-btn(type='a' color="primary" size="lg" :href="pages[currentTab].link[1]" target="_blank") 
                            | {{pages[currentTab].text[2]}}
                      .row.items-center
                        .col-1.q-mr-md
                          h3.text-white 3
                        .col
                          h5.text-white {{pages[currentTab].text[3]}}
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
const text = {
  EN:[
    `Learn about Vigor DAC`,
    `Three different levels to test your knowledge.`
  ]
}
const tabs = {
  EN:[
    `Beginner`,
    `Intermediate`,
    `Advanced`
  ]
}
const pages = {
  EN:[
    {
      active:true,
      text:[
      `Learn the basics`,
      `Read Educational Materials`,
      `Complete Quiz`,
      `If you answered correctly, you will receive VIG tokens.`
      ],
      link:[
        `https://docs.google.com/document/d/14ewVW60IWGE04mVAcKjAJWLI-K1MP5-DCMOdkgo1hKI/edit`,
        `https://docs.google.com/forms/d/e/1FAIpQLSfST_oj2wwPlLw-DIZXTKDrins6aSqs5rI8BrcD3MKq2HNQtA/viewform`
      ]
    },
    {
      active:false,
      text:['Coming soon!']
    },
    {
      active:false,
      text:['Stay Tuned!']
    }
  ]
}
export default { name: 'Index', props:['thisUser'],
  data(){
    return {
      currentTab:0
    }
  },
  methods:{
    selectedTab(index){
      if (this.currentTab===index) return ['selected']
      else return {}
    },
    starIcon(index) {
      if (this.currentTab===index) return 'amber'
      else return 'grey'
    }
  },
  computed:{
    tabs(){
      return tabs[this.$lang]
    },
    pages(){
      return pages[this.$lang]
    },
    text(){
      return text[this.$lang]
    }
  }
 }
</script>

<style lang="sass">
.selected
  color: white
  background-color: $primary
</style>
