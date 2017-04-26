<template>
  <div id="view-index">
    <a id="top"></a>
    <div class="navbar navbar-inverse" id="navigation">
      <div class="navbar-inner">
        <div class="container-fluid">
          <a class="btn btn-navbar" data-toggle="collapse"
             data-target=".nav-collapse">
            <span class="icon-bar">&nbsp;</span><span class="icon-bar">&nbsp;</span><span class="icon-bar">&nbsp;</span>
          </a><a title="Go to homepage" class="logo" href="#">
          <img width="80" height="40" alt="Onchain" src="Images/logo_white_small.svg">
        </a>
          <div class="nav-collapse collapse">
            <ul class="nav pull-right">
              <li class="navbar-item">
                <a class="login-link" href="#">
                  登录
                </a>
              </li>
              <li class="navbar-item">
                <a class="signup-link" href="#">
                  注册
                </a>
              </li>
            </ul>
            <ul class="nav">
              <li class="navbar-item"><a title="Browse icon sets" href="#">区块</a></li>
              <li class="navbar-item"><a title="Designers" href="#">交易</a></li>
              <li class="dropdown navbar-item what-we-offer">
                <a title="What we offer" href="#"
                   data-toggle="dropdown">更多应用</a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">
                      <img width="70" height="70"
                           alt="" src="Images/icon.svg">
                      <strong>Iconfinder Pro</strong>
                      <small>
                        Get instant access to the world’s largest collection of icons.
                      </small>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img width="75"
                           height="75" alt="" src="Images/icon(6).png">
                      <strong>法链存证</strong>
                      <small>
                        可信电子签名+区块链存证，实现全业务流程电子存证
                      </small>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img width="70"
                           height="70" alt="" src="Images/icon(2).svg">
                      <strong>身份链</strong>
                      <small>Host an icon library within your own user interface.</small>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img width="70"
                           height="70" alt="" src="Images/icon(3).svg">
                      <strong>积分平台</strong>
                      <small>
                        基于区块链的积分平台可实现积分在众多银行、商户、用户间的自由流转。
                      </small>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img width="70"
                           height="70" alt="" src="Images/icon(4).svg">
                      <strong>API 参考</strong>
                      <small>
                        区块链节点可提供丰富API，供外部程序对接区块链使用。
                      </small>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img width="70" height="70"
                           alt="" src="Images/icon(5).svg">
                      <strong>欢迎社区开发者</strong>
                      <small>
                        Join the fastest growing community of professional illustrators.
                      </small>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="homepage-header">
      <div class="search">
        <div class="container">
          <section>
            <form id="searchform" action="/search/">
              <input name="q" title="Search" class="query autocomplete" id="inputField" autofocus="" autocomplete="off" type="text" placeholder="block, tx, address" value=""><button class="btn btn-large btn-search" type="submit">
              <i>&#xe62c;</i>
            </button>
            </form><span class="filter-tags"></span>
          </section>
          <p class="tagline hidden-phone">
            在 37,871 个区块和 1,593,303 笔交易中搜索
          </p>
          <p class="hidden-phone" style="font-size: 16px;">
            <a href="mailto:contact@onchain.com">
              <strong>
                有更好的建议，请给我们发邮件 📨
              </strong>
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="promotion-bar homepage-announcement hidden-tablet hidden-phone">
      <div class="container">
        <section>
          <h1>最新区块</h1>
          <hr />
          <el-table
            :data="blockData"
            style="width: 100%" @row-click="rowClick">
            <el-table-column
                label="高度"
                prop="high">
              </el-table-column>
            <el-table-column
              label="散列值"
              prop="hash">
              <router-link :to="{ name: 'test'}">
              </router-link>
            </el-table-column>
            <el-table-column
              label="时间"
              prop="time">
            </el-table-column>
            <el-table-column
              label="交易数"
              prop="trade">
            </el-table-column>
            <el-table-column
              label="手续费"
              prop="fee">
            </el-table-column>
            <el-table-column
              label="数据大小"
              prop="data">
            </el-table-column>
          </el-table>
        </section>
        <section>
          <h1>最新交易</h1>
          <hr />
          <el-table
            :data="tradeData"
            style="width: 100%">
            <el-table-column
              label="类型"
              prop="txType"
              width="120">
            </el-table-column>
            <el-table-column
              label="散列值"
              prop="txId"
              width="500">
            </el-table-column>
            <el-table-column
              label="区块高度"
              prop="height"
              width="100">
            </el-table-column>
            <el-table-column
              label="时间"
              prop="date"
              width="200">
            </el-table-column>
          </el-table>
        </section>
      </div>
    </div>
    <div class="system-state">
      <div class="container">
        <section>
          <h1>系统状态</h1>
          <el-row :gutter="10">
            <el-col :span="6">
              <div class="grid-content bg-purple cell-bordered-right">
                <h3>共识节点</h3>
                <div class="value">4</div>
                <div class="unit">个</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple cell-bordered-right">
                <h3>平均出块时间</h3>
                <div class="value">17.48</div>
                <div class="unit">秒</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple cell-bordered-right">
                <h3>系统运行时间</h3>
                <div class="value">188</div>
                <div class="unit">天</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <h3>区块总量</h3>
                <div class="value">486.7</div>
                <div class="unit">MB</div>
              </div>
            </el-col>
          </el-row>
        </section>
      </div>
    </div>
    <div class="footer contentpage">
      <footer class="footer-menu">
        <div class="container">
          <div class="row">
            <div class="span6">
              <p>
                <a href="#">
                  <img height="30" class="footer-logo" alt="Onchain" src="Images/onchain-logo-gray.svg">
                </a>
              </p>
              <p class="copyright">
                Made in Onchain · Copyright 2017 · All rights reserved.
              </p>
              <p class="social-links">
                <a href="#" target="_blank">Facebook</a>
                ·   <a href="#" target="_blank">Twitter</a>
                ·   <a href="#" target="_blank">Dribbble</a>
                ·   <a href="#"
                       data-action="mailing-list-subscribe" data-mailing-list-id="2">
                Sign up to our newsletter
              </a>
              </p>
            </div>
            <div class="span3">
              <ul>
                <li><a href="#">切换至 <span class="label label-pro">测试网</span></a></li>
                <li>
                  <a href="#">
                    Become a contributor
                  </a>
                </li>
                <li>
                  <a href="#">
                    Custom icon design
                  </a>
                </li>
                <li><a href="#">API</a></li>
                <li><a href="#">Tags</a></li>
              </ul>
            </div>
            <div class="span3">
              <ul>
                <li><a href="#">Help &amp; support</a></li>
                <li><a href="#">About Iconfinder</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Jobs</a></li>
                <li>
                  <a href="#">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <div id="fb-root"></div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name:'Home',
    computed: mapGetters({
      tradeData: 'tradeData'
    }),
    created () {
      this.$store.dispatch('home')
    },
    methods: {
        rowClick: function(row, event, column) {
//            this.$router.push({'path': '/test'})
        }
    },
    data () {
      return {
        blockData: [
          {
            high: '8477383',
            hash: 'cea66dc84f5f2...',
            time: '2 分钟',
            trade: 1,
            fee: 0,
            data: '686 Bytes'
          },
          {
            high: '8477383',
            hash: 'cea66dc84f5f2...',
            time: '2 分钟',
            trade: 1,
            fee: 0,
            data: '686 Bytes'
          },
          {
            high: '8477383',
            hash: 'cea66dc84f5f2...',
            time: '2 分钟',
            trade: 1,
            fee: 0,
            data: '686 Bytes'
          },
          {
            high: '8477383',
            hash: 'cea66dc84f5f2...',
            time: '2 分钟',
            trade: 1,
            fee: 0,
            data: '686 Bytes'
          },
          {
            high: '8477383',
            hash: 'cea66dc84f5f2...',
            time: '2 分钟',
            trade: 1,
            fee: 0,
            data: '686 Bytes'
          },
          {
            high: '8477383',
            hash: 'cea66dc84f5f2...',
            time: '2 分钟',
            trade: 1,
            fee: 0,
            data: '686 Bytes'
          },
          {
            high: '8477383',
            hash: 'cea66dc84f5f2...',
            time: '2 分钟',
            trade: 1,
            fee: 0,
            data: '686 Bytes'
          },
          {
            high: '8477383',
            hash: 'cea66dc84f5f2...',
            time: '2 分钟',
            trade: 1,
            fee: 0,
            data: '686 Bytes'
          },
          {
            high: '8477383',
            hash: 'cea66dc84f5f2...',
            time: '2 分钟',
            trade: 1,
            fee: 0,
            data: '686 Bytes'
          },
          {
            high: '8477383',
            hash: 'cea66dc84f5f2...',
            time: '2 分钟',
            trade: 1,
            fee: 0,
            data: '686 Bytes'
          },
          {
            high: '8477383',
            hash: 'cea66dc84f5f2...',
            time: '2 分钟',
            trade: 1,
            fee: 0,
            data: '686 Bytes'
          }
        ]
      };
    }
  }
</script>
