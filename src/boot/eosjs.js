import { initAccessContext } from 'eos-transit'
import scatter from 'eos-transit-scatter-provider'
import { Api, JsonRpc } from "eosjs"
import Vue from 'vue'

const rpc = new JsonRpc('https://eos.greymass.com')


async function getCandidates () {
  try {
    let res = await rpc.get_table_rows({ "json": true, "code": "daccustodia1", "scope": "daccustodia1", "table": "candidates", "table_key": "", "lower_bound": "", "upper_bound": "", "index_position": 1, "key_type": "", "limit": -1, "reverse": false, "show_payer": false })
    return res.rows
  } catch (error) {
    console.error(error)
    alert(error.toString())
    return []
    return { error: error.toString() }
  }
}


Vue.prototype.$eos = { rpc,getCandidates }