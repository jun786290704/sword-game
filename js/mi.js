var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};

var option;



option = {
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: '直接访问'
        },

        {
          value: 234,
          name: '联盟广告'
        },
        {
          value: 1548,
          name: '引擎'
        },
        {
          value: 1548,
          name: '搜索'
        },
        {
          value: 1548,
          name: '搜擎'
        },
        {
          value: 1548,
          name: '搜索擎'
        }
      ]
      
    }
  ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}