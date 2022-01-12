import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import InputPage from './InputPage'
import Loading from './component/Loading'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { getSample, getEnterprisesData, getTradingHistory } from './dataStorage'
import MainPage from './MainPage'
import NavBar from './component/NavBar'
import './App.css'

const App = () => {
  const [dataBundle, setDataBundle] = useState({
    infoData: {
      totalCost: 0,
      myAsset: 0,
      ROI: 0,
      totalProfit: 0
    },
    enterprises: [],
    tradingHistory: []
  })
  const [reqState, setReqState] = useState({
    reqSend: false,
    fileLoaded: false
  })
  const [fileEnter, setFileEnter] = useState(false)
  const [currentPage, setCurrentPage] = useState('input-page')

  const demo = async () => {
    const sample = getSample()
    await requestFinanceData(sample.symbols)
    initData(sample.csvData, sample.indexBundle)
  }

  const loadData = async (rows) => {
    for (let i = 0; i < rows[0].length; i++) {
      rows[0][i] = rows[0][i].trim()
    }
    if (isValidCSV(rows[0])) {
      const indexBundle = {
        symbol: rows[0].indexOf('Symbol'),
        purchasePrice: rows[0].indexOf('Purchase Price'),
        quantity: rows[0].indexOf('Quantity'),
        tradingDate: rows[0].indexOf('Trade Date')
      }
      // store which enterprise need to request data
      const symbols = []
      // store valid trading history in csv
      const data = []
      for (let i = 1; i < rows.length; i++) {
        if (
          rows[i][indexBundle.symbol] &&
          rows[i][indexBundle.purchasePrice] &&
          rows[i][indexBundle.quantity] &&
          rows[i][indexBundle.tradingDate]
        ) {
          data.push(rows[i])
          if (!symbols.find((s) => s === rows[i][indexBundle.symbol].trim())) {
            symbols.push(rows[i][indexBundle.symbol].trim())
          }
        }
      }
      await requestFinanceData(symbols)
      initData(data, indexBundle)
    }
  }

  const initData = (data, indexBundle) => {
    const { infoData, enterprises } = getEnterprisesData(data, indexBundle)
    const tradingHistory = getTradingHistory(data, indexBundle)
    setDataBundle({
      enterprises: enterprises,
      tradingHistory: tradingHistory,
      infoData: infoData
    })
    setCurrentPage('analyze-page')
  }

  const requestFinanceData = async (s) => {
    // find symbols in trading history then parse them to string ( seperate by ',' )
    const getReqSymbols = () => {
      let ss = ''
      for (const st of s) {
        ss += st.trim() + ','
      }
      ss = ss.slice(0, ss.length - 1)
      return ss
    }
    // request options
    const options = {
      method: 'GET',
      url: 'https://yfapi.net/v8/finance/spark',
      headers: {
        'x-api-key': 'auNxCyh1Gf66HIXod3SN5aeAVI6JUB37Kd5iClYh'
      },
      params: {
        symbols: getReqSymbols(),
        interval: '1d',
        range: '1y'
      }
    }
    // set request state represent: "send request already but haven't get response"
    setReqState({ reqSend: true, fileLoaded: false })
    return axios
      .request(options)
      .then((response) => {
        const data = response.data
        console.log('response', data)
        const symbols = []
        for (const symbol in data) {
          symbols.push({
            symbol: symbol,
            data: data[symbol].close,
            date: data[symbol].timestamp
          })
        }
        sessionStorage.clear()
        sessionStorage.setItem('symbols', JSON.stringify(symbols))
        // set request state represent: "send request already and get response"
        setReqState({ reqSend: true, fileLoaded: true })
      })
      .catch((error) => {
        console.log(error)
        toast.error('請求資料時發生錯誤.')
      })
  }

  const isValidCSV = (fileData) => {
    const checkList = ['Symbol', 'Purchase Price', 'Quantity', 'Trade Date']
    for (const symbol of checkList) {
      if (fileData.indexOf(symbol) === -1) {
        setFileEnter(false)
        const errorMessage = 'csv 檔缺少 " ' + symbol + ' " 欄位.'
        toast.error(errorMessage)
        return false
      }
    }
    return true
  }

  const handleDragEnter = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setFileEnter(true)
  }

  const handleDragOver = (e) => {
    e.stopPropagation()
    e.preventDefault()
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setFileEnter(false)
  }

  const handleFileDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const file = e.dataTransfer.items[0].getAsFile()
    csvReader(file)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    csvReader(file)
    e.target.value = ''
  }

  const csvReader = (file) => {
    const reader = new FileReader()
    reader.onload = function () {
      const dirtyRows = reader.result.split('\n')
      const rows = []
      for (const drow of dirtyRows) {
        rows.push(drow.split(','))
      }
      loadData(rows)
    }
    reader.readAsBinaryString(file)
  }

  const handleNavClick = (e) => {
    const page = e.target.dataset.page
    // error check
    if (page === currentPage) return
    if (page === 'analyze-page' && !reqState.fileLoaded) {
      toast.warn('請先輸入交易資料')
      return
    }
    setCurrentPage(page)
  }

  const hideOverflowStyle = {
    maxHeight: '100vh',
    overflow: 'hidden'
  }

  return (
    <div style={currentPage === 'input-page' ? hideOverflowStyle : {}}>
      <NavBar onClick={handleNavClick} currentPage={currentPage} />
      <div className="App">
        <Loading show={!reqState.fileLoaded && reqState.reqSend} />
        <InputPage
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleFileDrop}
          onChange={handleFileChange}
          fileEnter={fileEnter}
          show={
            !reqState.reqSend ||
            (currentPage === 'input-page' && reqState.fileLoaded)
          }
          demo={demo}
        />
        <MainPage
          show={reqState.fileLoaded && currentPage === 'analyze-page'}
          dataBundle={dataBundle}
          reqState={reqState}
        />
        <ToastContainer
          position="top-center"
          autoClose={3500}
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
    </div>
  )
}

export default App
