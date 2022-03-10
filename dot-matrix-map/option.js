var data = [
  {name: '某某市', value: [119.5313, 29.8773, 400]},
  {name: '某某市', value: [110.5313, 36.8773, 400]},
  {name: '某某市', value: [125.5313, 44.8773, 150]},
  {name: '某某市', value: [92.5313, 40.8773, 300]},
  {name: '某某市', value: [100.5313, 28.8773, 200]},
  {name: '某某市', value: [108.5313, 32.8773, 250]},
]

var option = {
  animation: true,
  animationDuration: 1000,
  animationEasing: 'cubicInOut',
  animationDurationUpdate: 1000,
  animationEasingUpdate: 'cubicInOut',

  geo: {
    show: true,
    map: 'china',
    roam: false,
    zoom: 1,
    center: [104, 36],
    label: {
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        borderWidth: 18,
        borderColor: '#ffffff55',
        color: {
          image: document.getElementById('texture'),
          repeat: 'repeat'
        }
      },
      emphasis: {
        focus: 'self',
        color: {
          image: document.getElementById('texture'),
          repeat: 'repeat'
        },
        borderWidth: 0,
      }
    }
  },
  series: [
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: this.data,
      symbolSize: val => val[2] / 10,
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: false
        }
      },
      itemStyle: {
        normal: {
          color: '#1890ff',
          shadowBlur: 10,
          shadowColor: '#1890ff'
        }
      },
      zlevel: 1
    },
  ]
};