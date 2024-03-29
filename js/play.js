//import play_data from "data.js";
var play_data = {
  data: [
    { name: "Numbers", items: [1, 2, 3, 4,5,6,7,8,9,10] },
	{ name: "உயிர் எழுத்துக்கள் ", items: ["அ","ஆ","இ","ஈ","உ","ஊ","எ","ஏ","ஐ","ஒ","ஓ","ஔ","ஃ"] },
	{ name: "மெய்  எழுத்துக்கள் ", items: ["க்","ங்","ச்","ஞ்","ட்","ண்","த்","ந்","ப்","ம்","ய்","ர்","ல்","வ்","ழ்","ள்","ற்","ன்"]},
    { name: "English", items: ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"	] },
    { name: "Japanese", items: ["あ", "い", "う","え","お","か","き","く","け","こ",,"さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね"] },
    { name: "Small English", items: ["a", "b", "c","d","e","f"] },
	{ name: "Small English", items: ["a", "b", "c","d","e","f"] },
  ],
};

var appObj = {
  el: "#app",
  data: { playData: play_data, selectedPlay: play_data.data[0].name, curDisplayValue:"",playSpeed:1,randomDis:null,fontSize:30 },
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
let playTimer = setInterval(playApp.displayData,playApp.playSpeed*3000);
function callTo(){
	playApp.displayData();
	console.log(playSpeed);
	
}
