import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = props => {
    const { data } = props;
    const options = {
        colors: ['#80afdf'],
        chart: {
            height: 350,
            type: 'line',
            foreColor: '#fff',
            zoom: {
                enabled: false
            }
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            labels: {
                formatter: function(value) {
                    return value.toFixed(1);
                }
            }
        }
    };

    return (
        <ReactApexChart 
          options={options} 
          series={[{
              name: "price",
              data: data
          }]} 
          type="line" 
          style={{color: '#000'}} 
          height="300px"
        />
    )
}

export default LineChart;