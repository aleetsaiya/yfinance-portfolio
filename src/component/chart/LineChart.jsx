import React from 'react'
import ReactApexChart from 'react-apexcharts'
import PropTypes from 'prop-types'

const LineChart = (props) => {
  const { data } = props
  const options = {
    chart: {
      height: 350,
      type: 'area',
      foreColor: '#fff',
      zoom: {
        enabled: false
      }
    },
    stroke: {
      curve: 'straight'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value.toFixed(1)
        }
      }
    },
    dataLabels: {
      enabled: false
    }
  }

  return (
    <ReactApexChart
      options={options}
      series={[
        {
          name: 'price',
          data: data
        }
      ]}
      type="area"
      style={{ color: '#000' }}
      height="300px"
    />
  )
}

LineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.string,
      y: PropTypes.number
    })
  )
}

export default LineChart
