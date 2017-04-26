import api from '../api'
import * as types from './mutation-types'

export const test = ({ commit }) => {
  api.getTestData().then(response => {
    if(!response.ok) {
      return;
    }
    var data = response.body
    commit(types.TEST, { data })
  })
}

export const home = ({ commit }) => {
  api.getHomeData().then(response => {
    var data = response.body
    for(var i=0; i<data.length; i++) {
        if(data[i].txId.length > 55) {
          data[i].txId = data[i].txId.substr(0, 55) + "..."
        }
    }
    commit(types.HOME, { data })
  })
}

export const degreeList = ({ commit }) => {
  api.getDegreeListData().then(response => {
    var data = response.body
    commit(types.DEGREELIST, { data })
  })
}

export const blockList = ({ commit }) => {
  api.getBlockListData().then(response => {
    var data = response.body
    commit(types.BLOCKLIST, { data })
  })
}

export const nodeList = ({ commit }) => {
  api.getNodeListData().then(response => {
    var data = response.body.dataList
    commit(types.NODELIST, { data })
  })
}


export const nodeStatus = ({ commit }) => {
  api.getNodeStatus().then(response => {
    var data = response.body
    commit(types.NODESTATUS, { data })
  })
}

export const blockStatus = ({ commit }) => {
  api.getBlockStatus().then(response => {
    var data = response.body
    commit(types.BLOCKSTATUS, { data })
  })
}

export const lastBlock = ({ commit }) => {
  api.getLastBlock().then(response => {
    var data = response.body
    commit(types.LASTBLOCK, { data })
  })
}

export const lastDegree = ({ commit }) => {
  api.getLastDegree().then(response => {
    var data = response.body
    commit(types.LASTDEGREE, { data })
  })
}

