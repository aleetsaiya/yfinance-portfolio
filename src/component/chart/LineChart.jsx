import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = props => {
    const dateList = [
        1637764200,
        1637937000,
        1638196200,
        1638282600,
        1638369000,
        1638455400,
        1638541800,
        1638801000,
        1638887400,
        1638973800,
        1639060200,
        1639146600,
        1639405800,
        1639492200,
        1639578600,
        1639665000,
        1639751400,
        1640010600,
        1640097000,
        1640183400,
        1640269800
    ];
    
    const priceList = [
        1116,
        1081.92,
        1136.99,
        1144.76,
        1095,
        1084.6,
        1014.97,
        1009.01,
        1051.75,
        1068.96,
        1003.8,
        1017.03,
        966.41,
        958.51,
        975.99,
        926.92,
        932.57,
        899.94,
        938.53,
        1008.87,
        1067
      ];
      const test = dateList.map((timeStamp, index) => {
        return {
            x: new Date(timeStamp*1000).toLocaleDateString(),
            y: priceList[index]
        }
    });
    const series = [{
        name: "price",
        data: test
    }]
    const options = {
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
        }
    }

    return (
        <ReactApexChart options={options} series={series} type="line" style={{color: '#000'}} height="300px"/>
    )
}

export default LineChart;