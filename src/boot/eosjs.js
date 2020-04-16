import { JsonRpc } from 'eosjs'
import Vue from 'vue'

const rpc = new JsonRpc('https://eos.greymass.com')

async function getCandidates () {
  try {
    const res = await rpc.get_table_rows({ json: true, code: 'dactoken1111', scope: 'dactoken1111', table: 'members', table_key: '', lower_bound: '', upper_bound: '', index_position: 1, key_type: '', limit: -1, reverse: false, show_payer: false })
    return res.rows
  } catch (error) {
    console.error(error)
    window.alert(error.toString())
    return []
  }
}

async function getCandidate (name) {
  try {
    const res = await rpc.get_table_rows({ json: true, code: 'dactoken1111', scope: 'dactoken1111', table: 'members', lower_bound: name, index_position: 1, limit: 1, reverse: false, show_payer: false })
    return res.rows
  } catch (error) {
    console.error(error)
    window.alert(error.toString())
    return []
  }
}

Vue.prototype.$eos = { rpc, getCandidates,getCandidate }
