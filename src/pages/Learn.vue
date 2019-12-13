<template lang="pug">
  q-page
    .flex.flex-center
      div
        h4.text-grey-3 Learn about Vigor DAC
    .row.flex-center
      .col-1
        h3.text-white 1
      .col-4
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
</template>
<script>
console.log('Index')
export default { name: 'Index', props:['thisUser'],
  methods:{

  }
 }
</script>
