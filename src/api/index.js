import * as resource from './resources'

export default {
  getTestData: function() {
    return resource.TestResource.get()
  },
  getDegreeListData: function() {
    return resource.DegreeListResource.get()
  },
  getBlockListData: function() {
    return resource.BlockListResource.get()
  },
  getNodeListData: function() {
    return resource.NodeListResource.get()
  },
  getNodeStatus: function () {
    return resource.NodeStatusResource.get()
  },
  getBlockStatus: function () {
    return resource.BlocStatusResource.get()
  },
  getLastBlock: function() {
    return resource.LastBlockResource.get()
  },
  getLastDegree: function() {
    return resource.LastDegreeReource.get()
  }
}
