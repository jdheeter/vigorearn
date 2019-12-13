<template lang="pug">
  q-page
    .flex.flex-center
      //- img(src="~assets/vigorearnlogo.png" style="max-width:100%; overflow:hidden; height:400px; width:100%; object-fit: cover;")
    .row.flex-center(v-if="!thisUser")
      q-btn(@click="$root.$emit('modal','auth')") Login
    .row.flex-center(v-else).q-pa-lg.q-pt-sm
      .col-12.q-pb-md
        h5(style="margin:0px;") Welcome {{thisUser.username}}
        div intro text
      q-btn(outline rounded color="grey-9").on-left Button 1
      q-btn(type="a" href="https://github.com/han-so1omon/Cluster" target="_blank" 
      icon="cloud_download" label="Button 2" color="accent").on-left
      q-btn(outline rounded color="grey-9" @click="$root.$emit('modal','auth')") Button 3



</template>
<script>
console.log('Index')
export default { name: 'Index', props:['thisUser'] }
</script>
