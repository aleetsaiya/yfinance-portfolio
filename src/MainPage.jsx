import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  getInfos,
  getEnterprisesWeight,
  getEnterprisesSymbol,
  getEnterpriseProfit,
  getToggleButtons
} from './dataStorage'
import Infos from './component/Infos'
import DonutChart from './component/chart/DonutChart'
import Table from './component/Table'
import BarChart from './component/chart/BarChart'
import ToggleButtons from './component/ToggleButtons'
import LineChart from './component/chart/LineChart'

const MainPage = (props) => {
  const { show, dataBundle, reqState } = props
  const [hisPerformance, setHisPerformance] = useState([
    {
      x: new Date().toLocaleString(),
      y: 100
    }
  ])
  const [holdingStockTable, setHoldingStockTable] = useState({
    headRow: ['代號', '股數', '單位成本', '損益', '占比'],
    targetData: [
      'symbol',
      'totalQuantity',
      'averageCost',
      'totalProfit',
      'holdingPercent'
    ]
  })
  useEffect(() => {
    console.log('in useEffect')
    document.title = 'Portfolio'
    if (reqState.fileLoaded) {
      changeHisPerformance(0, 7)
    }
  }, [dataBundle])
  const tradingHistoryTable = {
    headRow: ['代號', '交易時間', '股數', '成交價', '金額'],
    targetData: [
      'symbol',
      'tradingDate',
      'quantity',
      'purchasePrice',
      'totalCost'
    ]
  }

  const handleToggleButtons = (e, btnInfo) => {
    const parent = e.target.parentNode
    const buttons = parent.childNodes
    for (const button of buttons) {
      button.classList.remove('focus')
    }
    e.target.classList.add('focus')
    changeHisPerformance(btnInfo.month, btnInfo.date)
  }

  const changeHisPerformance = (monthsAgo, daysAgo) => {
    const searchKey = monthsAgo + '-' + daysAgo + '-' + 'performance'
    let performanceHistory = sessionStorage.getItem(searchKey)
    if (performanceHistory) {
      console.log('get search:', searchKey)
      setHisPerformance(JSON.parse(performanceHistory))
    } else {
      performanceHistory = []
      // find first data date
      const firstDate = new Date()
      firstDate.setMonth(firstDate.getMonth() - monthsAgo)
      firstDate.setDate(firstDate.getDate() - daysAgo)
      const now = Date.now()
      const compareDate = (a, b) => {
        const ay = a.getFullYear()
        const am = a.getMonth()
        const ad = a.getDate()

        const by = b.getFullYear()
        const bm = b.getMonth()
        const bd = b.getDate()

        if (ay < by) return 1
        if (ay === by && am < bm) return 1
        if (ay === by && am === bm && ad < bd) return 1
        if (ay === by && am === bm && ad === bd) return 0
        return -1
      }
      const symbols = JSON.parse(sessionStorage.getItem('symbols'))
      // loop with every day
      // eslint-disable-next-line no-unmodified-loop-condition
      for (let d = firstDate; d <= now; d.setDate(d.getDate() + 1)) {
        let currentAsset = 0
        // use request data to get every enterprise price in the past
        const pastPrice = []
        // for every symbol
        for (const s of symbols) {
          // for every date in symbol
          for (let i = 0; i < s.date.length; i++) {
            if (i === s.date.length - 1) {
              pastPrice.push({ symbol: s.symbol, price: s.data[i] })
              break
            }
            // 1個月前的每一天 == 資料紀錄的日期
            if (compareDate(d, new Date(s.date[i] * 1000)) === 0) {
              pastPrice.push({ symbol: s.symbol, price: s.data[i] })
              break
            }
            // 假日 or 休市日
            if (
              compareDate(d, new Date(s.date[i] * 1000)) === -1 &&
              compareDate(d, new Date(s.date[i + 1] * 1000)) === 1
            ) {
              pastPrice.push({ symbol: s.symbol, price: s.data[i - 1] })
              break
            }
          }
        }
        // loop with every tradingHistory
        for (const trade of dataBundle.tradingHistory) {
          // 交易時間比現在還要早
          if (
            compareDate(d, new Date(trade.tradingDate)) === -1 ||
            compareDate(d, new Date(trade.tradingDate)) === 0
          ) {
            const pp = pastPrice.find((p) => p.symbol === trade.symbol)
            currentAsset += trade.quantity * pp.price
          }
        }
        performanceHistory.push({ x: d.toLocaleDateString(), y: currentAsset })
      }
      sessionStorage.setItem(searchKey, JSON.stringify(performanceHistory))
      setHisPerformance(performanceHistory)
    }
  }

  const handleTableClick = (e) => {
    if (e.target.textContent !== '損益') return

    if (holdingStockTable.targetData.includes('profitPercent')) {
      setHoldingStockTable({
        headRow: holdingStockTable.headRow,
        targetData: [
          'symbol',
          'totalQuantity',
          'averageCost',
          'totalProfit',
          'holdingPercent'
        ]
      })
    } else {
      setHoldingStockTable({
        headRow: holdingStockTable.headRow,
        targetData: [
          'symbol',
          'totalQuantity',
          'averageCost',
          'profitPercent',
          'holdingPercent'
        ]
      })
    }
  }

  return (
    <main style={show ? {} : { visibility: 'hidden' }}>
      <h2>持股分析</h2>
      <div className="block-row" id="info">
        <Infos infos={getInfos(dataBundle.infoData)} />
      </div>
      <div className="block-title res-title">
        <h3>占比</h3>
      </div>
      <div className="block-row">
        <div className="left chart">
          <DonutChart
            series={
              getEnterprisesWeight(dataBundle.enterprises).length === 0
                ? [80000, 45000, 16000]
                : getEnterprisesWeight(dataBundle.enterprises)
            }
            labels={
              getEnterprisesSymbol(dataBundle.enterprises).length === 0
                ? ['stock1', 'stock2', 'stock3']
                : getEnterprisesSymbol(dataBundle.enterprises)
            }
          />
        </div>
        <div className="right" onClick={handleTableClick}>
          <Table
            headRow={holdingStockTable.headRow}
            dataRows={dataBundle.enterprises}
            targetData={holdingStockTable.targetData}
          />
        </div>
      </div>
      <div className="block-row">
        <div className="left chart" style={{ color: '#000' }}>
          <div className="block-title">
            <h3>績效</h3>
          </div>
          <BarChart
            series={
              getEnterpriseProfit(dataBundle.enterprises).length === 0
                ? [5, 3, -10, 10, 7]
                : getEnterpriseProfit(dataBundle.enterprises)
            }
            labels={
              getEnterprisesSymbol(dataBundle.enterprises).length === 0
                ? ['stock1', 'stock2', 'stock3', 'stock4', 'stock5']
                : getEnterprisesSymbol(dataBundle.enterprises)
            }
          />
        </div>
        <div className="right">
          <div className="block-title">
            <h3>交易紀錄</h3>
          </div>
          <Table
            headRow={tradingHistoryTable.headRow}
            dataRows={dataBundle.tradingHistory}
            targetData={tradingHistoryTable.targetData}
          />
        </div>
      </div>
      <div className="block-title res-title">
        <h3>股票市值走勢</h3>
      </div>
      <div>
        <div>
          <ToggleButtons
            buttons={getToggleButtons()}
            onClick={handleToggleButtons}
          />
        </div>
        <LineChart data={hisPerformance} />
      </div>
      <div className="footer"></div>
    </main>
  )
}

MainPage.propTypes = {
  show: PropTypes.bool,
  dataBundle: PropTypes.shape({
    infoData: PropTypes.shape({
      totalCost: PropTypes.number,
      myAsset: PropTypes.number,
      ROI: PropTypes.number,
      totalProfit: PropTypes.number
    }),
    enterprises: PropTypes.array,
    tradingHistory: PropTypes.array
  }),
  reqState: PropTypes.shape({
    reqSend: PropTypes.bool,
    fileLoaded: PropTypes.bool
  })
}

export default MainPage
