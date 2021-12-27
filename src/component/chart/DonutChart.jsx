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
        colors: ['#48b5c4', '#1C4E80', '#0091D5', '#6cb4e4'],
        // dataLabels: {
        //     enabled: false
        // }
    };

    return (
        <ReactApexChart 
            options={{
                labels: labels,
                ...defaultSetting
            }} 
            series={series} 
            type="donut" 
        />
    )
};

export default DonutChart;