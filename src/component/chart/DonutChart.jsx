import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = props => {
    const { series, labels } = props;
    const defaultSetting = {
        chart: {
            foreColor: '#fff',
        },
        stroke:{
            colors:['#161d20']
        },
        colors: ['#ED5565', '#FFCE54', '#48CFAD', '#4FC1E9', '#FC6E51', '#5D9CEC'],
        dataLabels: {
            enabled: false
        }
    };

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
};

export default DonutChart;