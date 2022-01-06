import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = props => {
    const {series, labels} = props;
    const defaultSetting = {
        chart: {
            type: 'bar',
            foreColor: '#fff',
        },
        yaxis: {
            labels: {
                formatter: function (y) {
                    return y + "%";
                }
            }
        },
        plotOptions: {
            bar: {
                colors: {
                    ranges: [{
                        from: Number.NEGATIVE_INFINITY,
                        to: 0,
                        color: '#F15B46'
                    }, {
                        from: 0,
                        to: Number.MAX_SAFE_INTEGER,
                        color: '#76c68f'
                    }]
                },
                columnWidth: '45%',
            }
        },
        dataLabels: {
            enabled: false,
        },
    };

    return (
        <ReactApexChart 
          options={
            {
            xaxis: {
                categories: labels
            },
              ...defaultSetting
            }
          } 
          series={[
            {
              name: 'Profit',
              data: series
            }
          ]} 
          type="bar"
          height="240px"
        />
    )
};

export default BarChart;