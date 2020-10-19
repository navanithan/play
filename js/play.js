//import play_data from "data.js";
var play_data = {
  data: [
    { name: "Tamil", items: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14] },
    { name: "English", items: ["A", "B", "C"] },
    { name: "Japanese", items: ["あ", "い", "う","え","お","か","き","く","け","こ",,"さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね"] },
    { name: "Small English", items: ["a", "b", "c","d","e","f"] },
  ],
};

var appObj = {
  el: "#app",
  data: { playData: play_data, selectedPlay: play_data.data[0].name, curDisplayValue:"" },
  vuetify: new Vuetify(),
  methods: {
    getPlaynames: function(){
      let nameList = [];
      this.playData.data.forEach((element) => {
        nameList.push(element.name);
      });
      return nameList;
    },
    displayData: function(){
   //  console.log("on displayData");
      let curData = this.getPlayData();

      let playDataSize = curData.items.length;
      let dataIndex= Math.floor(Math.random() * Math.floor(playDataSize));
      console.log("iyt",curData.items[dataIndex]);
      this.curDisplayValue = curData.items[dataIndex];
     // console.log(this.curDisplayValue);
    },
    getPlayData: function(){
      //let selectedPlayData = this.play_data
     // console.log(this.playData);
     // console.log(this.playData.data);
      for (let index = 0; index < this.playData.data.length; index++) {
        const curData = this.playData.data[index];
        if(curData.name ==this.selectedPlay){
          return curData;
          break;
        }
      }
      console.log("Nothing found");
    }
  },

};
var playApp = new Vue(appObj);
let playTimer = setInterval(playApp.displayData,500);
