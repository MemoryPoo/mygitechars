<template>
  <div class="wrap">
      <div ref="types" class="types"></div>
      <div class="typeof"></div>
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
       console.log(echarts)
    let myChart = echarts.init(this.$refs.types)
    // var china =require('echarts/map/json/china.json');
    // echarts.registerMap('china',china)
    // console.log(Echarts,'123456')
   
var option = null;
var geoCoordMap = {
    '上海': [119.1803, 31.2891],
	"福建": [119.4543, 25.9222],
	"重庆": [108.384366, 30.439702],
	'北京': [116.4551, 40.2539],
	"辽宁": [123.1238, 42.1216],
	"河北": [114.4995, 38.1006],
	"天津": [117.4219, 39.4189],
	"山西": [112.3352, 37.9413],
	"陕西": [109.1162, 34.2004],
	"甘肃": [103.5901, 36.3043],
	"宁夏": [106.3586, 38.1775],
	"青海": [101.4038, 36.8207],
	"新疆": [87.9236, 43.5883],
	"西藏": [91.11, 29.97],
	"四川": [103.9526, 30.7617],
	"吉林": [125.8154, 44.2584],
	"山东": [117.1582, 36.8701],
	"河南": [113.4668, 34.6234],
	"江苏": [118.8062, 31.9208],
	"安徽": [117.29, 32.0581],
	"湖北": [114.3896, 30.6628],
	"浙江": [119.5313, 29.8773],
	'内蒙古': [110.3467, 41.4899],
	"江西": [116.0046, 28.6633],
	"湖南": [113.0823, 28.2568],
	"贵州": [106.6992, 26.7682],
	"云南": [102.9199, 25.4663],
	"广东": [113.12244, 23.009505],
	"广西": [108.479, 23.1152],
	"海南": [110.3893, 19.8516],
	'黑龙江': [127.9688, 45.368],
	'台湾': [121.4648, 25.5630]
};
var chinaDatas = [
    {
		name: '深圳市',
		value: 93
	},
	{
		name: '郑州市',
		value: 90
	},
	{
		name: '广州市',
		value:89
	},
	{
		name: '北京市',
		value: 89
	},
	
	{
		name: '上海市',
		value: 88
	},
	{
		name: '贵阳市',
		value: 86
	},
	{
		name: '珠海市',
		value: 86
	},
	{
		name: '长沙市',
		value: 86
	},
	{
		name: '杭州市',
		value: 85
	},
	{
		name: '乌鲁木齐市',
		value: 84
	},
	{
		name: '西安市',
		value: 84
	},
	{
		name: '重庆市',
		value: 84
	},
	{
		name: '中山市',
		value: 84
	},
	{
		name: '合肥市',
		value: 84
	},
	{
		name: '苏州市',
		value: 84
	},
	{
		name: '成都市',
		value:83
	},
	{
		name: '惠州市',
		value: 83
	},
	{
		name: '东莞市',
		value: 82
	},
	{
		name: '武汉市',
		value: 82
	},
	{
		name: '天津市',
		value: 82
	},
	{
		name: '福州市',
		value: 81
	},
	{
		name: '青岛市',
		value: 80
	},
	{
		name: '厦门市',
		value: 80
	},
	{
		name: '无锡市',
		value: 80
	},
	{
		name: '南京市',
		value: 80
	},
	{
		name: '太原市',
		value: 80
	},
	{
		name: '昆明市',
		value: 79
	},
	{
		name: '济南市',
		value: 79
	},
	{
		name: '兰州市',
		value:77
	},
	{
		name: '南昌市',
		value: 77
	},
	{
		name: '沈阳市',
		value: 77
	},
	{
		name: '宁波市',
		value: 76
	},
	{
		name: '嘉兴市',
		value: 75
	},
	{
		name: '长春市',
		value: 75
	},
	{
		name: '呼和浩特市',
		value: 75
	},
	{
		name: '银川市',
		value: 74
	},
	{
		name: '镇江市',
		value: 74
	},
	{
		name: '海口市',
		value: 73
	},
	{
		name: '大连市',
		value: 73
	},
	{
		name: '石家庄市',
		value: 73
	}
	
];
var convertData = function(data, type) {
	/*type:1 地图参数；type:2数据参数*/
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var geoCoord = geoCoordMap[data[i].name];
		if (geoCoord) {
			if (type == 2) {
				res.push({
					name: data[i].name,
					value: geoCoord.concat(data[i].value),
					username: data[i].username,
					telphone: data[i].telphone,
					address: data[i].address
				});
			} else {
				res.push({
					name: data[i].name,
					value: geoCoord.concat(data[i].value)
				});
			}
		}
	}
	//console.log(res);
	return res;
};
var yData = [];
var barData = chinaDatas;
barData = barData.sort(function(a,b){
    return b.value-a.value;
});
for(var j =0;j<barData.length;j++){
    if(j<10){
        yData.push('0'+j + barData[j].name);
    }else{
        yData.push(j + barData[j].name);
    }
}

option = {
	
	title: [{
        show: true,
     
        
        subtextStyle:{
        
            lineHeight:5
        },
        textStyle: {
         
            fontSize: 18
        },
        right: 140,
        top: 20
    }],
    grid: {
        right: 10,
        top: 80,
        bottom: 10,
        width: '200'
    },
    xAxis: {
        show: false
    },
    yAxis: {
        type: 'category',
        inverse: true,
        nameGap: 16,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#000'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
            
            }
        },
        axisLabel: {
            interval: 0,
            margin: 105,
            textStyle: {
                color: '#000',
                align: 'left',
                fontSize: 14
            },
            rich: {
                a: {
               
                 
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2
                },
                b: {
             
                   
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2
                }
            },
            formatter: function(params) {
                if (parseInt(params.slice(0, 2)) < 3) {
                    return [
                        '{a|' +  '}' + '  ' + params.slice(2)
                    ].join('\n')
                } else {
                    return [
                        '{b|' + '}' + '  ' + params.slice(2)
                    ].join('\n')
                }
            }
        },
        data: yData
    },
	geo: {
		map: 'china',
		label: {
			show: true,
			color: 'red',
			emphasis: {
				color: 'white',
				show: false
			}
		},
		roam: false,//是否允许缩放
    	top: 100,
    	left: 'left',
        right: '300',
    	zoom: 1, //默认显示级别
    	scaleLimit: {
    		min: 0,
    		max: 3
    	}, //缩放级别
		itemStyle: {
			normal: {
				borderColor: 'rgba(26,82,231, 1)',
				borderWidth: 1,
				areaColor: {
					type: 'radial',
					x: 0.5,
					y: 0.5,
					r: 0.8,
					colorStops: [{
						offset: 0,
					
					}, {
						offset: 1,
						
					}],
					globalCoord: false // 缺省为 false
				},
			
				shadowOffsetX: -2,
				shadowOffsetY: 2,
				shadowBlur: 10
			},
			emphasis: {
				
				borderWidth: 0
			}
		},
	
		tooltip: {
			show: false
		}
	},
	series: [
		{
			type: 'effectScatter',
			coordinateSystem: 'geo',
			z: 1,
			data: [],
			symbolSize: 14,
			label: {
				normal: {
					show: true,
					formatter: function(params) {
						return '{fline|客户：'+params.data.username+'  '+params.data.telphone+'}\n{tline|'+params.data.address+'}';
					},
					position: 'top',
					backgroundColor: 'rgba(254,174,33,.8)',
					padding: [0, 0],
					borderRadius: 3,
					lineHeight: 32,
					color: '#f7fafb',
					rich:{
						fline:{
							padding: [0, 10, 10, 10],
					
						},
						tline:{
							padding: [10, 10, 0, 10],
					
						}
					}
				},
				emphasis: {
					show: true
				}
			},
			itemStyle: {
		
			}
		},
		{
			type: 'effectScatter',
			coordinateSystem: 'geo',
			z: 1,
			data: [],
			symbolSize: 14,
			label: {
				normal: {
					show: true,
					formatter: function(params) {
						return '{fline|客户：'+params.data.username+'  '+params.data.telphone+'}\n{tline|'+params.data.address+'}';
					},
					position: 'top',
		
					padding: [0, 0],
					borderRadius: 3,
					lineHeight: 32,
		
					rich:{
						fline:{
							padding: [0, 10, 10, 10],
		
						},
						tline:{
							padding: [10, 10, 0, 10],
					
						}
					}
				},
				emphasis: {
					show: true
				}
			},
			itemStyle: {
		
			}
		},
		{
			type: 'effectScatter',
			coordinateSystem: 'geo',
			z: 1,
			data: [],
			symbolSize: 14,
			label: {
				normal: {
					show: true,
					formatter: function(params) {
						return '{fline|客户：'+'  '+params.data.telphone+'}\n{tline|'+params.data.address+'}';
					},
					position: 'top',
				
					padding: [0, 0],
					borderRadius: 3,
					lineHeight: 32,
		
					rich:{
						fline:{
							padding: [0, 10, 10, 10],
						
						},
						tline:{
							padding: [10, 10, 0, 10],
					
						}
					}
				},
				emphasis: {
					show: true
				}
			},
			itemStyle: {
	
			}
		},
		//地图
		{
			type: 'map',
			mapType: 'china',
			geoIndex: 0,
			z: 0,
			data: convertData(chinaDatas, 1)
		},
		{
        name: 'barSer',
        type: 'bar',
        roam: false,
        visualMap: false,
        zlevel: 2,
        barMaxWidth: 16,
        barGap: 0,
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [{
                            colorStops: [{
                                offset: 0,
                                color: '#f0515e'
                            }, {
                                offset: 1,
                                color: '#ef8554'
                            }]
                        },
                        {
                            colorStops: [{
                                offset: 0,
                                color: '#3c38e4'
                            }, {
                                offset: 1,
                                color: '#24a5cd'
                            }]
                        }
                    ];
                    if (params.dataIndex < 10) {
                        return colorList[0]
                    } else {
                        return colorList[1]
                    }
                },
                barBorderRadius: [0,15,15,0]
            }
        },
        label:{
            normal: {
                show: true,
                textBorderWidth: 2
            }
        },
        data: barData.sort((a,b)=>{
            return b.value-a.value;
        })
    }]
};
if (option && typeof option === "object") {
	myChart.setOption(option, true);
}
function getTel(){
    var n = 2,telstr = '1';
    while(n<12){
        if(n<3){
            while(1){
                var nums = Math.floor(Math.random()*10);
                if(nums!==0&&nums!==1&&nums!==2&&nums!==3&&nums!==4&&nums!==6){
                    telstr+=nums;
                    break;
                }
            }
            
        }else if(n>3&&n<8){
            telstr+='*';
        }else{
            telstr+=Math.floor(Math.random()*10);
        }
        n++;
    }
    return telstr;
}

    myChart.setOption(option, true);



    })
   
  }
}
</script>
<style scoped lang="css">

  .wrap{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* background: #fff; */
  }
  .types{
    width: 100%;
    height: 800px;
  }
  
</style>