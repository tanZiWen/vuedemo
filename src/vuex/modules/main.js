/**
 * Created by tanyuan on 25/4/2017.
 */
import * as types from '../mutation-types'

const state = {
  degreeList: [],
  blockList: [],
  nodeList: [],
  nodeStatus: {},
  blockStatus: {}
}

const mutations = {
  [types.DEGREELIST] (state, { data }) {
    state.degreeList = data
  },
  [types.BLOCKLIST] (state, { data }) {
    state.blockList = data
  },
  [types.NODELIST] (state, { data }) {
    state.nodeList = data
  },
  [types.NODESTATUS] (state, { data }) {
    state.nodeStatus = data
  },
  [types.BLOCKSTATUS] (state, { data }) {
    state.blockStatus = data
  },
  [types.LASTBLOCK] (state, { data }) {
    var flag = true
    for(var i in state.blockList) {
      if(state.blockList[i].hash == data.hash) {
        flag = false
        break
      }
    }
    if(flag) {
      state.blockList.unshift(data)
      state.blockList.pop()
    }
  },
  [types.LASTDEGREE] (state, { data }) {
    var flag = true
    console.log(data)
    for(var i in state.degreeList) {
      if(state.degreeList[i].txId == data.txId) {
        flag = false
        break
      }
    }
    if(flag) {
      state.degreeList.unshift(data)
      state.degreeList.pop()
    }
  }
}
export default {
  state,
  mutations
}
