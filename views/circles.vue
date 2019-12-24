<template>
  <div class="wrap">
      <div ref="types" class="types"></div>
  </div>
</template>
<script>
export default {
  props:{

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){
    this.$nextTick(()=>{
       var echarts = require('echarts')
    let Echarts = echarts.init(this.$refs.types)
    console.log(Echarts,'123456')
var graph = {
    "nodes": [{
        "id": "0",
        "name": "Ⅰ型",
        "itemStyle": {
            "normal": {
                "color": "rgb(5,81,255)"
            }
        },
        "symbolSize":70,
        "x": 136.82776,
        "y": 109.6904,
        "attributes": {
            "modularity_class": 0
        }
    },{
        "id": "01",
        "name": "B型",
        "itemStyle": {
            "normal": {
                "color": "rgb(5,81,255)"
            }
        },
        "symbolSize":60,
        "x": 206.82776,
        "y": 70.6904,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "001",
        "name": "成都市",
        "itemStyle": {
            "normal": {
                "color": "rgb(5,81,255)"
            }
        },
        "symbolSize":46,
        "x": 336.82776,
        "y": 79.6904,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "002",
        "name": "东莞市",
        "itemStyle": {
            "normal": {
                "color": "rgb(5,81,255)"
            }
        },
        "symbolSize":50,
        "x": 336.82776,
        "y": 59.6904,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "003",
        "name": "厦门市",
        "itemStyle": {
            "normal": {
                "color": "rgb(5,81,255)"
            }
        },
        "symbolSize":50,
        "x": 356.82776,
        "y": -29.6904,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "004",
        "name": "苏州市",
        "itemStyle": {
            "normal": {
                "color": "rgb(5,81,255)"
            }
        },
        "symbolSize":50,
        "x": 416.82776,
        "y": 49.6904,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "005",
        "name": "武汉市",
        "itemStyle": {
            "normal": {
                "color": "rgb(5,81,255)"
            }
        },
        "symbolSize":50,
        "x": 386.82776,
        "y": -10.6904,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "006",
        "name": "西安市",
        "itemStyle": {
            "normal": {
                "color": "rgb(5,81,255)"
            }
        },
        "symbolSize":50,
        "x": 406.82776,
        "y": 69.6904,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "007",
        "name": "长沙市",
        "itemStyle": {
            "normal": {
                "color": "rgb(5,81,255)"
            }
        },
        "symbolSize":50,
        "x": 356.82776,
        "y": 10.6904,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "008",
        "name": "中山市",
        "itemStyle": {
            "normal": {
                "color": "rgb(5,81,255)"
            }
        },
        "symbolSize":50,
        "x": 266.82776,
        "y": 100.6904,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "009",
        "name": "重庆市",
        "itemStyle": {
            "normal": {
                "color": "rgb(5,81,255)"
            }
        },
        "symbolSize":50,
        "x": 236.82776,
        "y": 29.6904,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "010",
        "name": "珠海市",
        "itemStyle": {
            "normal": {
                "color": "rgb(5,81,255)"
            }
        },
        "symbolSize":50,
        "x": 276.82776,
        "y": 49.6904,
        "attributes": {
            "modularity_class": 0
        }
    },
   
    
    {
        "id": "02",
        "name": "A型",
        "itemStyle": {
            "normal": {
                "color": "red"
            }
        },
        "symbolSize":60,
        "x": 210.82776,
        "y": 125.6904,
        "attributes": {
            "modularity_class": 3
        }
    },
    {
        "id": "020",
        "name": "北京市",
        "itemStyle": {
            "normal": {
                "color": "red"
            }
        },
        "symbolSize":50,
        "x": 380.82776,
        "y": 195.6904,
        "attributes": {
            "modularity_class": 3
        }
    },
    {
        "id": "021",
        "name": "广州市",
        "itemStyle": {
            "normal": {
                "color": "red"
            }
        },
        "symbolSize":50,
        "x": 380.82776,
        "y": 125.6904,
        "attributes": {
            "modularity_class": 3
        }
    },
    {
        "id": "022",
        "name": "深圳市",
        "itemStyle": {
            "normal": {
                "color": "red"
            }
        },
        "symbolSize":50,
        "x": 380.82776,
        "y": 145.6904,
        "attributes": {
            "modularity_class": 3
        }
    },
     {
        "id": "1",
        "name": "Ⅱ型",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":70,
        "x": 80.08344,
        "y": 186.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "222",
        "name": "B型",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":60,
        "x": 120.08344,
        "y": 226.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "231",
        "name": "常州市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 220.08344,
        "y": 226.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "232",
        "name": "大连市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 220.08344,
        "y": 246.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "234",
        "name": "济南市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 210.08344,
        "y": 316.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "235",
        "name": "嘉兴市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 150.08344,
        "y": 266.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "236",
        "name": "拉萨市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 160.08344,
        "y": 206.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "237",
        "name": "南通市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 180.08344,
        "y": 296.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "238",
        "name": "青岛市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 180.08344,
        "y": 366.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
     {
        "id": "239",
        "name": "绍兴市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 230.08344,
        "y": 396.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "240",
        "name": "沈阳市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 260.08344,
        "y": 366.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "241",
        "name": "天津市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 290.08344,
        "y": 336.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "242",
        "name": "无锡市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 280.08344,
        "y": 306.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "243",
        "name": "扬州市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 350.08344,
        "y": 336.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "244",
        "name": "长春市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 290.08344,
        "y": 276.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
     {
        "id": "245",
        "name": "镇江市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 230.08344,
        "y": 276.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "223",
        "name": "A型",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":60,
        "x": 40.08344,
        "y": 226.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "224",
        "name": "贵阳市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 40.08344,
        "y": 256.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "225",
        "name": "海口市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 20.08344,
        "y": 306.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "226",
        "name": "合肥市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 60.08344,
        "y": 306.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "227",
        "name": "惠州市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -80.08344,
        "y": 336.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "228",
        "name": "郑州市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -50.08344,
        "y": 306.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "229",
        "name": "三亚市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -20.08344,
        "y": 276.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "230",
        "name": "南宁市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -20.08344,
        "y": 226.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
     {
        "id": "2",
        "name": "Ⅴ型",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":70,
        "x": 58.08344,
        "y": 96.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "555",
        "name": "B型",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":60,
        "x": 108.08344,
        "y": 60.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "557",
        "name": "鞍山市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 138.08344,
        "y": 30.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
     {
        "id": "558",
        "name": "本溪市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 308.08344,
        "y": -60.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
     {
        "id": "559",
        "name": "大庆市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 158.08344,
        "y": 0.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
     {
        "id": "560",
        "name": "抚顺市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 178.08344,
        "y": 50.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
     {
        "id": "561",
        "name": "鹤岗市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 268.08344,
        "y": 0.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "562",
        "name": "A型",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":60,
        "x": 70.08344,
        "y": 0.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
    {
        "id": "571",
        "name": "包头市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 40.08344,
        "y": -160.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
    {
        "id": "572",
        "name": "大同市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 40.08344,
        "y": -60.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
    {
        "id": "573",
        "name": "德州市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 40.08344,
        "y": -100.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
    {
        "id": "574",
        "name": "东营市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 70.08344,
        "y": -80.8853,
        "attributes": {
            "modularity_class": 2
        }
    },

     {
        "id": "575",
        "name": "临沂市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 90.08344,
        "y": -180.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
      {
        "id": "576",
        "name": "秦皇岛市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 160.08344,
        "y": -80.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
    {
        "id": "577",
        "name": "泰安市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 110.08344,
        "y": -160.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
     {
        "id": "578",
        "name": "唐山市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 110.08344,
        "y": -60.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
    {
        "id": "579",
        "name": "威海市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 30.08344,
        "y": -120.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
    {
        "id": "580",
        "name": "潍坊市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 70.08344,
        "y": -30.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
    {
        "id": "581",
        "name": "烟台市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 109.08344,
        "y": -100.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
     {
        "id": "582",
        "name": "淄博市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 90.08344,
        "y": -130.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
    {
        "id": "563",
        "name": "佳木斯市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 130.08344,
        "y": -30.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "564",
        "name": "辽阳市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 160.08344,
        "y": -60.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "565",
        "name": "盘锦市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 190.08344,
        "y": -150.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "566",
        "name": "齐齐哈尔市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 210.08344,
        "y": -100.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "567",
        "name": "泰州市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 230.08344,
        "y": -60.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
     {
        "id": "568",
        "name": "乌鲁木齐市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 160.08344,
        "y": -130.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "569",
        "name": "伊春",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 180.08344,
        "y": -180.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "570",
        "name": "吉林市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": 210.08344,
        "y": -30.8853,
        "attributes": {
            "modularity_class": 4
        }
    },
    {
        "id": "3",
        "name": "Ⅳ型",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":70,
        "x": -38.08344,
        "y": 89.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
     {
        "id": "333",
        "name": "A型",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":60,
        "x": -88.08344,
        "y": 60.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
    {
        "id": "335",
        "name": "安阳市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -88.08344,
        "y": 30.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
     {
        "id": "336",
        "name": "保定市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -160.08344,
        "y":-130.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
    {
        "id": "337",
        "name": "丹东市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -200.08344,
        "y": 30.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
    {
        "id": "338",
        "name": "阜新市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -180.08344,
        "y": 55.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
    {
        "id": "339",
        "name": "邯郸市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -200.08344,
        "y": 80.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
    {
        "id": "340",
        "name": "衡阳市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -200.08344,
        "y": -50.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
    {
        "id": "341",
        "name": "淮南市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -230.08344,
        "y": -120.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
    {
        "id": "342",
        "name": "开封市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -260.08344,
        "y": -0.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
    {
        "id": "343",
        "name": "柳州市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -200.08344,
        "y": -70.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
     {
        "id": "344",
        "name": "洛阳市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -230.08344,
        "y": -170.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
     {
        "id": "345",
        "name": "牡丹江市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -260.08344,
        "y": -80.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
    {
        "id": "346",
        "name": "南阳市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -100.08344,
        "y": -70.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
    {
        "id": "347",
        "name": "平顶山市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -130.08344,
        "y": -160.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
    {
        "id": "348",
        "name": "西宁市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -160.08344,
        "y": -0.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
     {
        "id": "349",
        "name": "新乡市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -160.08344,
        "y": -30.8853,
        "attributes": {
            "modularity_class": 3
        }
    },
    {
        "id": "334",
        "name": "B型",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":60,
        "x": -30.08344,
        "y": 30.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "351",
        "name": "鸡西市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -60.08344,
        "y": -0.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "352",
        "name": "锦州市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -130.08344,
        "y": -100.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "353",
        "name": "黄石市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -90.08344,
        "y": -130.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
     {
        "id": "354",
        "name": "荆州市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -60.08344,
        "y": -30.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "355",
        "name": "马鞍山市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -30.08344,
        "y": -150.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
    {
        "id": "356",
        "name": "湘潭市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -0.08344,
        "y": -30.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
      {
        "id": "357",
        "name": "襄阳市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -0.08344,
        "y": -60.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
      {
        "id": "358",
        "name": "徐州市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -30.08344,
        "y": -180.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
      {
        "id": "359",
        "name": "银川市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -30.08344,
        "y": -90.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
     {
        "id": "360",
        "name": "枣庄市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -30.08344,
        "y": -120.8853,
        "attributes": {
            "modularity_class": 1
        }
    },
     {
        "id": "4",
        "name": "Ⅲ型",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":70,
        "x": -58.08344,
        "y": 166.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
    {
        "id": "444",
        "name": "A型",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":60,
        "x": -98.08344,
        "y": 146.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
    {
        "id": "446",
        "name": "哈尔滨市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -168.08344,
        "y": 146.8853,
        "attributes": {
            "modularity_class": 2
        }
    },

    {
        "id": "447",
        "name": "宁波市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -148.08344,
        "y": 166.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
    {
        "id": "448",
        "name": "太原市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -188.08344,
        "y": 126.8853,
        "attributes": {
            "modularity_class": 2
        }
    },
    
    {
        "id": "445",
        "name": "B型",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":55,
        "x": -98.08344,
        "y": 246.8853,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "449",
        "name": "桂林市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -218.08344,
        "y": 226.8853,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "450",
        "name": "呼和浩特市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -178.08344,
        "y": 206.8853,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "451",
        "name": "江门市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -178.08344,
        "y": 256.8853,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "452",
        "name": "昆明市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -138.08344,
        "y": 226.8853,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "453",
        "name": "兰州市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -178.08344,
        "y": 286.8853,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "454",
        "name": "南昌市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -208.08344,
        "y": 326.8853,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "455",
        "name": "汕头市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -240.08344,
        "y": 206.8853,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "456",
        "name": "台州市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -308.08344,
        "y": 206.8853,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "457",
        "name": "温州市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -298.08344,
        "y": 236.8853,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "458",
        "name": "湛江市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -298.08344,
        "y": 266.8853,
        "attributes": {
            "modularity_class": 0
        }
    },
    {
        "id": "459",
        "name": "株洲市",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":50,
        "x": -238.08344,
        "y": 299.8853,
        "attributes": {
            "modularity_class": 0
        }
    },
     {
        "id": "200",
        "name": "Ⅲ型",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":5,
        "x": -308.08344,
        "y": 326.8853,
        "attributes": {
            "modularity_class": 0
        }
    },  {
        "id": "64",
        "name": "Bossuet",
        "itemStyle": {
            "normal": {
                "color": "rgb(236,81,72)"
            }
        },
        "symbolSize":5,
        "x": 455.81955,
        "y": -115.45826,
        "attributes": {
            "modularity_class": 8
        }
    },
    
    ],
      "links": [{
        "id": "0",
        "name": null,
        "source": "0",
        "target": "01",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "1",
        "name": null,
        "source": "0",
        "target": "02",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "2",
        "name": null,
        "source": "01",
        "target": "001",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "3",
        "name": null,
        "source": "01",
        "target": "002",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "003",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "004",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "005",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "006",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "007",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "008",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "009",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "010",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "011",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "012",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "013",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "014",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "015",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "016",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "017",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "018",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "4",
        "name": null,
        "source": "01",
        "target": "019",
        "lineStyle": {
            "normal": {}
        }
    },
     

    {
        "id": "5",
        "name": null,
        "source": "02",
        "target": "020",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "6",
        "name": null,
        "source": "02",
        "target": "021",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "7",
        "name": null,
        "source": "02",
        "target": "022",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "8",
        "name": null,
        "source": "02",
        "target": "022",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "9",
        "name": null,
        "source": "1",
        "target": "222",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "10",
        "name": null,
        "source": "1",
        "target": "223",
        "lineStyle": {
            "normal": {}
        }
    },
 {
        "id": "11",
        "name": null,
        "source": "223",
        "target": "224",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "223",
        "target": "225",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "223",
        "target": "226",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "223",
        "target": "227",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "223",
        "target": "228",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "223",
        "target": "229",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "223",
        "target": "230",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "222",
        "target": "231",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "222",
        "target": "232",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "222",
        "target": "233",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "222",
        "target": "234",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "222",
        "target": "235",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "222",
        "target": "236",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "222",
        "target": "238",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "222",
        "target": "239",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "222",
        "target": "240",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "222",
        "target": "241",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "222",
        "target": "242",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "222",
        "target": "243",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "222",
        "target": "244",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "445",
        "target": "449",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "445",
        "target": "450",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "445",
        "target": "451",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "445",
        "target": "452",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "445",
        "target": "453",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "445",
        "target": "454",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "445",
        "target": "455",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "445",
        "target": "456",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "445",
        "target": "457",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "445",
        "target": "458",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "445",
        "target": "459",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "444",
        "target": "446",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "444",
        "target": "447",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "444",
        "target": "448",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "4",
        "target": "444",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "4",
        "target": "445",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "3",
        "target": "333",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "3",
        "target": "334",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "333",
        "target": "335",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "333",
        "target": "336",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "333",
        "target": "337",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "333",
        "target": "338",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "333",
        "target": "339",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "333",
        "target": "340",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "333",
        "target": "341",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "333",
        "target": "342",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "333",
        "target": "343",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "333",
        "target": "344",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "333",
        "target": "346",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "333",
        "target": "347",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "333",
        "target": "348",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "333",
        "target": "349",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "334",
        "target": "351",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "334",
        "target": "352",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "334",
        "target": "353",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "334",
        "target": "354",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "334",
        "target": "355",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "334",
        "target": "357",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "334",
        "target": "358",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "334",
        "target": "359",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "334",
        "target": "360",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "334",
        "target": "361",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "334",
        "target": "362",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "334",
        "target": "363",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "334",
        "target": "364",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "334",
        "target": "356",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "333",
        "target": "345",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "2",
        "target": "562",
        "lineStyle": {
            "normal": {}
        }
    },
     {
        "id": "11",
        "name": null,
        "source": "562",
        "target": "571",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "562",
        "target": "572",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "562",
        "target": "573",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "562",
        "target": "574",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "562",
        "target": "575",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "562",
        "target": "576",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "562",
        "target": "577",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "562",
        "target": "578",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "562",
        "target": "579",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "562",
        "target": "580",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "562",
        "target": "581",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "562",
        "target": "582",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "2",
        "target": "555",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "555",
        "target": "569",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "555",
        "target": "568",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "555",
        "target": "567",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "555",
        "target": "566",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "555",
        "target": "565",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "555",
        "target": "564",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "555",
        "target": "563",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "555",
        "target": "561",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "555",
        "target": "560",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "555",
        "target": "559",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "555",
        "target": "558",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "555",
        "target": "557",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "555",
        "target": "556",
        "lineStyle": {
            "normal": {}
        }
    },
    {
        "id": "11",
        "name": null,
        "source": "555",
        "target": "570",
        "lineStyle": {
            "normal": {}
        }
    },
    ]
}
 
var categories = [{name: "Ⅰ型0"},{name: "Ⅱ型1"},{name: "Ⅲ型2"},{name: "Ⅳ型4"},{name: "Ⅴ型5"}];
// for (var i = 0; i < 9; i++) {
//     categories[i] = {
//         name: '宜居型' + i
//     };  
// }
graph.nodes.forEach(function(node) {
    node.itemStyle = null;
    node.value = node.symbolSize;
    node.symbolSize /= 1.5;
    node.label = {
        normal: {
            show: node.symbolSize > 30
        }
    };
    node.category = node.attributes.modularity_class;
});
let option = {
    // title: {
    //     text: 'Les Miserables',
    //     subtext: 'Default layout',
    //     top: 'bottom',
    //     left: 'right'
    // },
    tooltip: {},
    legend: [{
        // selectedMode: 'single',
        data: categories.map(function(a) {
            console.log(a)
            return a.name;
        })
    }],
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '',
        type: 'graph',
        layout: 'none',
        data: graph.nodes,
        links: graph.links,
        categories: categories,
        roam: true,
        focusNodeAdjacency: true,
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 1,
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
        },
        label: {
            position: 'right',
            formatter: '{b}'
        },
        lineStyle: {
            color: 'source',
            curveness: 0.3
        },
        emphasis: {
            lineStyle: {
                width: 10
            }
        }
    }]
};
Echarts.setOption(option)

    })
   
  }
}
</script>
<style scoped lang="css">

  .wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .types{
    width: 100%;
    height: 800px;
  }
</style>