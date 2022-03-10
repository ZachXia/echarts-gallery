var data = 34; //数值大小
var max = 100; //满刻度大小
var option = {
  series: [
    // 空白部分
    {
      type: 'pie',
      center: ['50%', '50%'],
      clockwise: false,
      radius: '45%',
      hoverAnimation: false,
      data: [
        {
          value: data,
          itemStyle: {
            normal: {
              color: '#00000000'
            }
          },
          labelLine: {
            show: false,
            emphasis: {
              show: false
            }
          }
        },
        { 
          value: max - data,
          label: {
            show: false
          },
          itemStyle: {
            color: '#ECF1F9'
          },
          emphasis: {
            itemStyle: {
              color: '#ECF1F9'
            }
          },
          labelLine: {
            show: false,
            emphasis: {
              show: false
            }
          },
        }
      ]
    },
    // 数据部分
    {
      type: 'pie',
      center: ['50%', '50%'],
      clockwise: false,
      radius: '50%',
      data: [
        {
          value: data,
          itemStyle: {
            normal: {
              color: '#64C8BC'
            }
          },
          labelLine: {
            show: false,
            emphasis: {
              show: false
            }
          }
        },
        {
          value: max - data,
          label: {
            show: false
          },
          itemStyle: {
            color: '#00000000'
          },
          labelLine: {
            show: false,
            emphasis: {
              show: false
            }
          },
        }
      ]
    },
    // 悬浮文字
    {
      type: 'pie',
      radius: ['50%', '50%'],
      center: ['50%', '50%'],
      clockwise: false,
      hoverAnimation: false,
      data: [
        {
          value: data / 2,
          itemStyle: {
            normal: {
              color: '#00000000'
            }
          },
          labelLine: {
            show: false,
            emphasis: {
              show: false
            }
          }
        },
        { 
          value: 0,
          label: {
            width: 50,
            height: 50,
            position: 'inside',
            backgroundColor: '#fff',
            borderRadius: 100,
            padding: 20,
            shadowColor: 'rgba(0,0,0,.1)',
            shadowBlur: 25,
            fontSize: 14,
            color: '#64C8BC',
            formatter: `{a|${data}%}\n{b|剩余广告位}`,
            rich: {
              a: {
                color: '#64C8BC',
                fontSize: 14,
                fontWeight: 600,
                lineHeight: 32
              },
              b: {
                color: '#1A1D1F',
                fontSize: 12
              }
            }
          }
        },
        {
          value: max - data / 2,
          label: {
            show: false
          },
          itemStyle: {
            color: '#00000000'
          },
          labelLine: {
            show: false,
            emphasis: {
              show: false
            }
          },
        }
      ]
    },
  ]
};