var lang = 'en'

function getloc (page) {
  return require('../loc/' + lang)[page]
}
function setLang (language) {
  lang = language
}

module.exports = { getloc, setLang, lang }
