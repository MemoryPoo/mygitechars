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
    var option = []
option = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['新增建设项目', '施工数量','竣工数量',"fdsf","ddd"]
    },
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '人口密度', max: 100},
           { name: '短期人口吸引量', max: 100},
           { name: '中小学生占比', max: 100},
           { name: '人均机场吞吐量', max: 100},
           { name: '人均财政支出', max: 100},
           { name: '地均GDP', max: 100},
           { name: '第三产业占GDP比重', max: 100},
           { name: '小微企业密度', max: 100},
           { name: '夜间经济活力区域占比', max: 100},
           { name: '道路网密度', max: 100},
           { name: '街区式商业区面积比重', max: 100},
           { name: '公交地铁站点覆盖率', max: 100},
           { name: '公园绿地比重', max: 100},
           { name: '特色文化场所密集区面积比', max: 100},
           { name: '创新空间密度', max: 100},
           { name: '商业设施密度', max: 100},
           { name: '基本公共服务设施覆盖率', max: 100},
           { name: 'A级以上景区数量', max: 100},
           { name: '抖音活跃密集度', max: 100},
           { name: '入境游客数量', max: 100},
           { name: '游客活跃人口比重', max: 100},
           { name: '万人信息数量', max: 100},
           { name: '社会保障覆盖率', max: 100},
           { name: '社区政策指标', max: 100},
           { name: '百度搜索量', max: 100},
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data : [
            {
                value : ["77 ","100 ","49 ","51 ","87 ","77 ","100 ","65 ","71 ","69 ","44 ","89 ","55 ","55 ","94 ","56 ","78 ","100 ","71 ","60 ","60 ","67 ","95 ","100 ","100 ","74 ","70 ","65 ","72 ","68 ","93 "],
                name : '新增建设项目'
            }
            ,
             {
                value : ["72 ","87 ","47 ","51 ","87 ","68 ","85 ","57 ","63 ","70 ","47 ","85 ","63 ","54 ","62 ","62 ","85 ","67 ","56 ","76 ","54 ","57 ","86 ","79 ","78 ","70 ","62 ","67 ","65 ","64 ","74 "],
                name : '施工数量'
            },
                {
                value : ["63 ","63 ","54 ","48 ","62 ","65 ","73 ","60 ","45 ","69 ","51 ","90 ","60 ","59 ","54 ","59 ","74 ","52 ","53 ","44 ","68 ","55 ","40 ","50 ","69 ","58 ","57 ","68 ","60 ","54 ","62 "],
                name : '竣工数量'
            },
             {
                value : ["54 ","68 ","64 ","40 ","62 ","57 ","63 ","49 ","41 ","70 ","44 ","89 ","65 ","49 ","50 ","53 ","60 ","56 ","57 ","49 ","72 ","45 ","40 ","46 ","59 ","56 ","49 ","67 ","53 ","58 ","54 "],
                name : 'fdsf'
            },
            {
                value : ["54 ","68 ","64 ","40 ","62 ","57 ","63 ","49 ","41 ","70 ","44 ","89 ","65 ","49 ","50 ","53 ","60 ","56 ","57 ","49 ","72 ","45 ","40 ","46 ","59 ","56 ","49 ","67 ","53 ","58 ","54 "],
                name : 'ddd'
            },
        ]
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