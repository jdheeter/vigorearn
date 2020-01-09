import VueMarkdown from 'vue-markdown'
import Vue from 'vue'
import Lang from 'vuejs-localization'
const list = require.context('../loc', true, /\.js$/)
Lang.requireAll(list)
const langs = list.keys().map(el => el.split('/')[1])
Vue.prototype.langList = [...new Set(langs)]
Vue.component('md', VueMarkdown)
Vue.use(Lang)
