export default {
  state: {
    arr: [],
    list: [
      "http://pic2.34580.cn/group1/M00/AC/19/wKgNY1zSdwyAQP9_AADkNupIw70968.jpg",
      "http://pic2.34580.cn/group1/M00/AB/4F/wKgNY1zQH7SAEguxAACmIkuWvfI404.jpg",
      "http://pic2.34580.cn/group1/M00/96/82/wKgNYlzQbZGAVRcyAAFfWbDL95s127.jpg"
    ],

  },
  mutations: {
    getSet(state, payload) {
      state.arr = payload
    },

  },

  getters: {

  },
  actions: {
    getDate(context) {
      fetch("https://api1.34580.com/sz/Products/HotCategoryRequest")
        .then(res => {
          return res.json();
        })
        .then(res => {
          context.commit("getSet", res.Data.HotCategoryList)
        });
    },


  }
}