import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = props => {
    const { data } = props;
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
                formatter: function(value) {
                    return value.toFixed(1);
                }
            }
        },
        dataLabels: {
            enabled: false
        },
    };

    return (
        <ReactApexChart 
          options={options} 
          series={[{
              name: "price",
              data: data
          }]} 
          type= 'area' 
          style={{color: '#000'}} 
          height="300px"
        />
    )
}

export default LineChart;