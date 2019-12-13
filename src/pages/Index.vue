<template lang="pug">
  q-page
    .flex.flex-center
      div
        h4.text-grey-3 Welcome to Vigor Earn
    .row.flex-center
      .col.col-md-8
        q-card.q-ma-md.q-pa-md.text-white.bg-bg2
          h6.q-ma-xs Vigor Earn is a way to earn learn about VIGOR and earn some VIG tokens. 
          h6.q-ma-xs To receive the tokens, you need to be registered as a custodian first.
      //- img(src="~assets/vigorearnlogo.png" style="max-width:100%; overflow:hidden; height:400px; width:100%; object-fit: cover;")
    .row.flex-center.text-white
      q-btn(@click="$router.push({name:'Register'})" color="primary" size="lg").on-left Register as custodian
      q-btn(@click="$root.$emit('modal','auth')" color="primary" size="lg") Login

</template>
<script>
console.log('Index')
export default { name: 'Index', props:['thisUser'],
  methods:{

  }
 }
</script>
