//import play_data from "data.js";
var play_data = {
  data: [
    { name: "Tamil", items: [1, 2, 3, 4] },
    { name: "English", items: ["A", "B", "C"] },
    { name: "", items: ["a", "b", "c"] },
  ],
};

var appObj = {
  el: "#app",
  data: { playData: play_data, selectedPlay: play_data.data[0].name },
  vuetify: new Vuetify(),
  methods: {
    getPlaynames: function () {
      let nameList = [];
      this.playData.data.forEach((element) => {
        nameList.push(element.name);
      });
      return nameList;
    },
    displayData: function () {
      return rnd;
    },
  },
};
var app1 = new Vue(appObj);

//console.log(play_data);
