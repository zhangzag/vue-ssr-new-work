import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 模拟请求接口
function getDataApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: '小红', age: 18, fav: '看书' },
        { name: '小明', age: 18, fav: '钓鱼' },
      ])
    }, 1000)
  })
}

// store
function createStore() {
  const store = new Vuex.Store({
    state: {
      datas: [], // 数据
    },

    mutations: {
      setData(state, data) {
        state.datas = data // 赋值
      },
    },

    actions: {
      fetchData({ commit }) {
        return getDataApi().then((res) => {
          commit('setData', res)
        })
      },
    },
  })

  return store
}

export default createStore
