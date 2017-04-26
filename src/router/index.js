import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const App = r => require.ensure([], () => r(require('../App')), 'app')
const Home = r => require.ensure([], () => r(require('../components/Home')), 'home')
const Test = r => require.ensure([], () => r(require('../components/Test')), 'test')
const Main = r => require.ensure([], () => r(require('../components/Main')), 'main')

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/main'
      },
      {
        path: '/main',
        component: Main
      },
      {
        path: '/test',
        component: Test
      }
    ]
  },
  { path: '*', redirect: '/' }
];

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
