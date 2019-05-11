export default {
  state: {

    list: [],
    bools: true,
    bool: 0,
    one: "One",
    cook: [],

  },
  mutations: {
    getData(state, payload) {
      state.list = payload;
    },
    borderLeft(state, payload) {
      state.bool = payload.PictureId;
      state.bools = false;
      state.one = "Two"
    },
    first(state) {
      state.bools = true;
      state.bool = 0,
        state.one = "One"

    },
    getSets(state, payload) {
      state.cook = payload
    },

  },
  actions: {
    getData(context) {
      fetch("https://api1.34580.com/sz/Products/BigCategoryRequest").then((res) => {
        return res.json();
      }).then((res) => {
        context.commit("getData", res.Data);
      })
    },

    getDates(context, id) {
      fetch(`https://api1.34580.com/sz/Products/SubCategoryRequest?accesstoken=384eb6e0fd6dff1a&customerguid=5fc281aa-f73a-4fc9-b652-1ac1495bbe18&sourcetype=9&Id=${id}`)
        .then(res => {
          return res.json();
        })
        .then(res => {
          context.commit("getSets", res.Data.SubCategories)

        });

    }
  }
}