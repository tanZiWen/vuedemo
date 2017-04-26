<template>
  <div id="wrapper_all">
    <header id="top_header">
      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-sm-2">
            <img alt="Onchain" src="../images/logo_white_small.svg">
          </div>
        </div>
      </div>
    </header>
    <nav id="top_navigation">
      <div class="container">
        <ul id="icon_nav_h" class="top_ico_nav clearfix">
          <li class="active">
            <a href="#">
              <i class="icon-home icon-2x"></i>
              <span class="menu_label">主页</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-laptop icon-2x"></i>
              <span class="menu_label">节点</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-link icon-2x"></i>
              <span class="menu_label">区块</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-copy icon-2x"></i>
              <span class="menu_label">存证</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-cogs icon-2x"></i>
              <span class="menu_label">属性</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-question icon-2x"></i>
              <span class="menu_label">常见问题</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-group icon-2x"></i>
              <span class="menu_label">联系管理员</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-wrench icon-2x"></i>
              <span class="menu_label">设置</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <section id="breadcrumbs">
      <div class="container">
        <ul>
          <li><a href="#">监控信息</a></li>
          <li><span>仪表板</span></li>
        </ul>
      </div>
    </section>
    <section class="container clearfix main_section">
      <div id="main_content_outer" class="clearfix">
        <div id="main_content">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="box_stat box_ico">
                <span class="stat_ico stat_ico_1"><i class="li_vallet"></i></span>
                <h4>{{blockStatus.txncount}}</h4>
                <small>存证数量</small>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="box_stat box_ico">
                <span class="stat_ico stat_ico_3"><i class="li_data"></i></span>
                <h4>{{blockStatus.height}}</h4>
                <small>区块数量</small>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="box_stat box_ico">
                <span class="stat_ico stat_ico_2"><i class="li_display"></i></span>
                <h4>{{nodeStatus.correctNum}}</h4>
                <small>正常节点</small>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="box_stat box_ico">
                <span class="stat_ico stat_ico_4"><i class="li_settings"></i></span>
                <h4>{{nodeStatus.errorNum}}</h4>
                <small>故障节点</small>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <el-table
                :data="degreeList"
                style="width: 100%">
                <el-table-column
                  label="类型"
                  prop="txType">
                </el-table-column>
                <el-table-column
                  label="交易时间"
                  prop="date"
                  width="200">
                </el-table-column>
                <el-table-column
                  label="存证编号"
                  prop="txId"
                  width="540">
                </el-table-column>
                <el-table-column
                  label="存证块高度"
                  prop="height">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <el-table
                :data="blockList"
                style="width: 100%">
                <el-table-column
                  label="高度"
                  prop="height">
                </el-table-column>
                <el-table-column
                  label="散列值"
                  prop="hash"
                  width="540">
                </el-table-column>
                <el-table-column
                  label="时间"
                  prop="timestamp"
                  width="200">
                </el-table-column>
                <el-table-column
                  label="交易数"
                  prop="txnum">
                </el-table-column>
                <el-table-column
                  label="数据大小"
                  prop="size">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <el-table
                :data="nodeList"
                style="width: 100%">
                <el-table-column
                  label="节点名称"
                  prop="url">
                </el-table-column>
                <el-table-column
                  label="出块状态"
                  prop="blockStatus">
                </el-table-column>
                <el-table-column
                  label="网络状态"
                  prop="rpcStatus">
                </el-table-column>
                <el-table-column
                  label="时间"
                  prop="date">
                </el-table-column>
              </el-table>
            </div>
        </div>
        </div>
      </div>
    </section>
    <div id="footer_space"></div>
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          &copy; 2017 链上贵阳
        </div>
        <div class="col-sm-8">
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li>&middot;</li>
            <li><a href="#">Terms of Service</a></li>
            <li>&middot;</li>
            <li><a href="#">Privacy Policy</a></li>
            <li>&middot;</li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div class="col-sm-1 text-right">
          <small class="text-muted">v1.3</small>
        </div>
      </div>
    </div>
  </footer>
  </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    created () {
      this.$store.dispatch('degreeList')
      this.$store.dispatch('blockList')
      this.$store.dispatch('nodeList')
      this.$store.dispatch('nodeStatus')
      this.$store.dispatch('blockStatus')
      this.intervalBlock = setInterval(() => {
        this.$store.dispatch('blockStatus')
        this.$store.dispatch('lastBlock')
        this.$store.dispatch('lastDegree')
      }, 5000)
    },
    beforeDestroy () {
      clearInterval(this.intervalBlock)
    },
    computed: mapGetters({
      degreeList: 'degreeList',
      blockList: 'blockList',
      nodeList: 'nodeList',
      nodeStatus: 'nodeStatus',
      blockStatus: 'blockStatus'
    }),
    data () {
      return {
      }
    }
  }
</script>
