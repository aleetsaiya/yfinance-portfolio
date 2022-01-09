import React from 'react'
import ReactApexChart from 'react-apexcharts'

const DonutChart = (props) => {
  const { series, labels } = props
  const defaultSetting = {
    chart: {
      foreColor: '#fff'
    },
    stroke: {
      colors: ['#161d20']
    },
    colors: ['#ED5565', '#FFCE54', '#48CFAD', '#4FC1E9', '#FC6E51', '#5D9CEC'],
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '20',
              fontWeight: '700'
            },
            value: {
              show: true,
              fontSize: '16',
              fontFamily: 'Microsoft JhengHei',
              fontWeight: '700',
              formatter: (val) => {
                return '$' + parseFloat(parseFloat(val).toFixed(0))
              }
            },
            total: {
              show: true,
              label: 'Total',
              fontFamily: 'Microsoft JhengHei',
              color: '#fff',
              fontWeight: '700',
              formatter: (w) => {
                const total = w.globals.seriesTotals.reduce((a, b) => {
                  return a + b
                }, 0)
                return '$' + parseFloat(total.toFixed(0))
              }
            }
          }
        }
      }
    }
  }

  return (
    <ReactApexChart
      options={{
        labels: labels,
        ...defaultSetting
      }}
      series={series}
      type="donut"
      height="200px"
    />
  )
}

export default DonutChart
