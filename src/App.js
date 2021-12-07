import React, { useState, useEffect } from 'react';
import CSVReader from 'react-csv-reader';
import DonutChart from './component/chart/DonutChart';
import Table from './component/Table';
import Info from './component/Info';
import BarChart from './component/chart/BarChart';
import fileIcon from './icon/file-regular.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const [dataBundle, setDataBundle] = useState({
    infoData: {},
    enterprises: [],
    tradingHistory: []
  });
  const [fileLoaded, setFileLoaded] = useState(false);
  const [fileEnter, setFileEnter] = useState(false);
  const [seconds, setSeconds] = useState(1);
  const holdingStockTable = {
    'headRow': ['代號', '股數', '單位成本', '最新價', '持股占比'],
    'targetData': ['symbol', 'totalQuantity', 'averageCost', 'currentPrice', 'holdingPercent']
  };
  const tradingHistoryTable = {
    'headRow': ['代號', '交易時間', '股數', '成交價', '金額'],
    'targetData': ['symbol', 'tradingDate', 'quantity', 'purchasePrice', 'totalCost']
  };

  useEffect(() => {
    document.title = "Portfolio";
    if ( fileLoaded && seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  });

  const demoData = () => {
    initData(
      [
        [
          "SMH","300","2021/12/6","16:00 EST","-1.1499939","299.57","301.38","290.51","5105964","20211206","299.02","0.96984","","","",""
        ],
        [
          "MSFT","326.19","2021/12/6","16:00 EST","3.1799927","323.95","327.42","319.23","30032556","20211126","334.11","0.29929","","","",""
        ],
        [
          "MSFT","326.19","2021/12/6","16:00 EST","3.1799927","323.95","327.42","319.23","30032556","20211206","324.71","1.75542","","","",""
        ],
        [
          "VOO","421.82","2021/12/6","16:00 EST","4.98001","419.41","423.64","417","7124862","20211126","424.96","0.35298","","","",""
        ],
        [
          "VOO","421.82","2021/12/6","16:00 EST","4.98001","419.41","423.64","417","7124862","20211206","419.85","2.71527","","","",""
        ],
        [
          "QQQ","386.2","2021/12/6","16:00 EST","3.0700073","383.63","387.6","379.31","64706783","20211126","396.07","0.25248","","","",""
        ],
        [
          "QQQ","386.2","2021/12/6","16:00 EST","3.0700073","383.63","387.6","379.31","64706783","20211206","384.08","2.23912","","","",""
        ]
      ],
      {
        "symbol": 0,
        "purchasePrice": 10,
        "quantity": 11,
        "tradingDate": 9,
        "currentPrice": 1
      }
    );
  }

  const findEnterprise = (ar, target) => {
    for(let i = 0; i < ar.length; i++) {
      if (ar[i]['symbol'] === target)
        return i;
    }
    return false;
  };

  const loadData = rows => {
    const data = [];
    const indexBundle = {
      symbol: rows[0].indexOf('Symbol'),
      purchasePrice: rows[0].indexOf('Purchase Price'),
      quantity: rows[0].indexOf('Quantity'),
      tradingDate: rows[0].indexOf('Trade Date'),
      currentPrice: rows[0].indexOf('Current Price')
    }
    if (isValidCSV(rows[0])) {
      for(let i = 1; i < rows.length; i++) {
          if (rows[i][indexBundle.symbol] && rows[i][indexBundle.purchasePrice] && rows[i][indexBundle.quantity])
            data.push(rows[i]);
      }
      initData(data, indexBundle);
    }
  };

  const initData = (data, indexBundle) => {
    const {infoData, enterprises} = getEnterprisesData(data, indexBundle);
    const tradingHistory = getTradingHistory(data, indexBundle);
    setDataBundle({
      enterprises: enterprises,
      tradingHistory: tradingHistory,
      infoData: infoData
    });
    setFileLoaded(true);
  };

  const getEnterprisesData = (tradingHistory, indexBundle) => {
    const temp = [];
    let totalCost = 0;
    let totalProfit = 0;
    for(let trading of tradingHistory) {
      const symbol = trading[indexBundle.symbol];
      const currentPrice = parseFloat(trading[indexBundle.currentPrice]);
      const tradingDate = parseFloat(trading[indexBundle.tradingDate]);
      const purchasePrice = parseFloat(trading[indexBundle.purchasePrice]);
      const quantity = parseFloat(trading[indexBundle.quantity]);
      
      totalCost += (purchasePrice * quantity);
      const index = findEnterprise(temp, symbol);
      if (index !== false) {
        temp[index]['tradingHistory'].push({
          purchasePrice: purchasePrice,
          quantity: quantity
        })
        temp[index]['totalCost'] += (purchasePrice * quantity);
        temp[index]['totalQuantity'] += quantity;
      }
      else {
        temp.push({
          symbol: symbol,
          currentPrice: currentPrice,
          tradingDate: tradingDate,
          totalCost: (purchasePrice * quantity),
          totalQuantity: quantity,
          tradingHistory: [{
            purchasePrice: purchasePrice,
            quantity: quantity
          }]
        })
      }
    }
    // set enterprise's totalProfit
    for(let t of temp) {
      t['holdingPercent'] = (Math.round((t['totalCost'] / totalCost)*10000) / 100).toString() + '%';
      let profit = 0;
      const currentPrice = t['currentPrice'];
      for(let th of t['tradingHistory']) {
        profit += ((currentPrice - th['purchasePrice']) * th['quantity']);
      }
      t['totalProfit'] = profit;
      totalProfit += profit;
    }

    // sort emterprise by holdingPercent
    temp.sort((t1, t2) => {
      return t2.totalCost - t1.totalCost;
    })

    return {
      infoData: {
        totalCost: (Math.round((totalCost)*100) / 100).toString(),
        myAsset: (Math.round((totalCost + totalProfit)*100) / 100).toString(),
        ROI: (Math.round((totalProfit / totalCost) * 10000) / 100).toString() + '%',
        totalProfit: totalProfit > 0 ? '+' + (Math.round((totalProfit)*100) / 100).toString() : (Math.round((totalProfit)*100) / 100).toString()
      },
      enterprises: temp
    };
  };

  const getTradingHistory = (tradingHistory, indexBundle) => {
    const temp = [];
    for(let trading of tradingHistory) {
      const symbol = trading[indexBundle.symbol];
      let tradingDate = trading[indexBundle.tradingDate];
      const purchasePrice = parseFloat(trading[indexBundle.purchasePrice]);
      const quantity = parseFloat(trading[indexBundle.quantity]);
      
      if (!tradingDate)
        tradingDate = "NaN";
      else
        tradingDate = tradingDate.slice(0, 4) + '/' + tradingDate.slice(4, 6) + '/' + tradingDate.slice(6, 8);
      temp.push({
        symbol: symbol,
        tradingDate: tradingDate,
        quantity: quantity,
        purchasePrice: purchasePrice,
        totalCost: (purchasePrice * quantity)
      })
    }
    // sort by tradingDate
    temp.sort((t1, t2) => {
      if (t1.tradingDate === "NaN" && t2.tradingDate !== "NaN")
        return 1;
      if (t1.tradingDate !== "NaN" && t2.tradingDate === "NaN")
        return -1;
      const d1 = t1.tradingDate.split('/');
      const d2 = t2.tradingDate.split('/');
      if (parseInt(d1[0]) > parseInt(d2[0]))
        return -1;
      if (parseInt(d1[0]) < parseInt(d2[0]))
        return 1;
      if (parseInt(d1[1]) > parseInt(d2[1]))
        return -1;
      if (parseInt(d1[1]) < parseInt(d2[1]))
        return 1;
      if (parseInt(d1[2]) > parseInt(d2[2]))
        return -1;
      if (parseInt(d1[2]) < parseInt(d2[2]))
        return 1;
    });
    return temp;
  };

  const getEnterprisesSymbol = () => {
    const temp = [];
    for(let enterprise of dataBundle.enterprises) {
      temp.push(enterprise.symbol);
    }
    return temp;
  };

  const getEnterprisesCost = () => {
    const temp = [];
    for(let enterprise of dataBundle.enterprises) {
      temp.push(Math.round(enterprise.totalCost * 100) / 100);
    }
    return temp;
  };

  const getEnterpriseProfit = () => {
    const temp = [];
    for(let enterprise of dataBundle.enterprises) {
      temp.push(Math.round((enterprise.totalProfit / enterprise.totalCost)*10000)/100);
    }
    return temp;
  };

  const isValidCSV = fileData => {
    const checkList = ['Symbol', 'Purchase Price', 'Quantity', 'Current Price', 'Trade Date'];
    for(let symbol of checkList) {
      if (fileData.indexOf(symbol) === -1) {
        setFileEnter(false);
        toast.error('Please check your csv file.');
        return false;
      }
    }
    return true;
  }

  const onDragEnter = e => {
    e.stopPropagation();
    e.preventDefault();
    setFileEnter(true);
  }

  const onDragOver = e => {
    e.stopPropagation();
    e.preventDefault();
  }

  const onDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    setFileEnter(false);
  } 

  const onDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    // If dropped items aren't files, reject them
    if (e.dataTransfer.items[0].kind === 'file') {
      let file = e.dataTransfer.items[0].getAsFile();
      const reader = new FileReader();
      reader.onload = function () {
        const dirtyRows = reader.result.split('\n');
        const rows = [];
        for(let drow of dirtyRows) {
          rows.push(drow.split(','));
        }
        loadData(rows);
      };
      // start reading the file. When it is done, calls the onload event defined above.
      reader.readAsBinaryString(file);
    }
    else {
      toast.error('Please check your csv file');
      setFileEnter(false);
    }
  }

  return (
    <div className='App'>
      <h1>Portfolio</h1>
      <div className={(!fileLoaded) || (fileLoaded && seconds <= 0) ? "hide":"load"}></div>
      <div className={fileLoaded ? "hide":""}>
        <div 
            className="drag-file-block"
            onDragEnter={onDragEnter}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            style={fileEnter ? {backgroundColor: 'rgba(173, 216, 230, .5)'}:{backgroundColor: 'inherit'}}
        >
          <div className="dropInfo">將 csv 檔拖曳至此</div>
        </div>
        <label className="input-label">
          <span>📁 上傳檔案</span>
          <div style={{display: 'none'}}>
            <CSVReader onFileLoaded={rows => {
              loadData(rows);
            }} />
          </div>
        </label>
        <label className="input-label" onClick={demoData}>
          <span>💡 使用範例</span>
        </label>
      </div>
      <main style={(fileLoaded && seconds <= 0) ? {}:{visibility: "hidden"}}>
        <div className="block-row" id="info">
          <Info data={dataBundle.infoData.totalCost} title={'投入金額'}/>
          <Info data={dataBundle.infoData.myAsset} title={'股票市值'}/>
          <Info data={dataBundle.infoData.ROI} title={'報酬率'}  highlight={true}/>
          <Info data={dataBundle.infoData.totalProfit} title={'總損益'}/>
        </div>
        <div className="block-title res-title">
          <h3>持股狀況</h3>
        </div>
        <div className="block-row">
          <div className="left chart">
            <DonutChart 
              series={getEnterprisesCost().length === 0 ? [80000, 45000, 16000] : getEnterprisesCost()} 
              labels={getEnterprisesSymbol().length === 0 ? ['stock1', 'stock2', 'stock3'] : getEnterprisesSymbol()}
            />
          </div>
          <div className="right">
            <Table headRow={holdingStockTable.headRow} dataRows={dataBundle.enterprises} targetData={holdingStockTable.targetData}/>
          </div>
        </div>
        <div className="block-row">
          <div className="left chart" style={{color: '#000'}}>
            <div className="block-title">
              <h3>績效</h3>
            </div>
            <BarChart 
              series={getEnterpriseProfit().length === 0 ? [5, 3, -10, 10, 7] : getEnterpriseProfit()} 
              labels={getEnterprisesSymbol().length === 0 ? ['stock1', 'stock2', 'stock3', 'stock4', 'stock5'] : getEnterprisesSymbol()}
            />
          </div>
          <div className="right">
            <div className="block-title">
              <h3>交易紀錄</h3>
            </div>
            <Table headRow={tradingHistoryTable.headRow} dataRows={dataBundle.tradingHistory} targetData={tradingHistoryTable.targetData}/>
          </div>
        </div>
        <div className="footer"></div>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="dark"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
  )
};

export default App;