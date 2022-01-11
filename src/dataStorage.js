const getEnterprisesData = (tradingHistory, indexBundle) => {
  //   store trading information with every enterprise
  const temp = []
  let totalCost = 0
  let totalProfit = 0
  let totalAsset = 0
  const currentPrices = {}
  //   get Enterprise Data from localStorage
  const localData = JSON.parse(sessionStorage.getItem('symbols'))
  //   get newest price of every enterprise
  for (const l of localData) {
    currentPrices[l.symbol] = l.data[l.data.length - 1]
  }
  //   use "symbol" to find match enterprise
  const findEnterprise = (ar, target) => {
    for (let i = 0; i < ar.length; i++) {
      if (ar[i].symbol === target) return i
    }
    return false
  }
  //  for every trading-history in csv file
  for (const trading of tradingHistory) {
    //   get trading information and index by indexBundle
    const symbol = trading[indexBundle.symbol]
    const tradingDate = parseFloat(trading[indexBundle.tradingDate])
    const purchasePrice = parseFloat(trading[indexBundle.purchasePrice])
    const quantity = parseFloat(trading[indexBundle.quantity])
    // set this trading's enterprise newest price
    const currentPrice = currentPrices[symbol]

    totalCost += purchasePrice * quantity
    totalAsset += currentPrice * quantity

    const index = findEnterprise(temp, symbol)
    // if found enterprise, then add this trading information
    if (index !== false) {
      temp[index].tradingHistory.push({
        purchasePrice: purchasePrice,
        quantity: quantity
      })
      temp[index].totalCost += purchasePrice * quantity
      temp[index].totalQuantity += quantity
    } else {
      // if not found, init new enterprise information
      temp.push({
        symbol: symbol,
        currentPrice: currentPrice,
        tradingDate: tradingDate,
        totalCost: purchasePrice * quantity,
        totalQuantity: quantity,
        tradingHistory: [
          {
            purchasePrice: purchasePrice,
            quantity: quantity
          }
        ]
      })
    }
  }

  // set enterprise's totalProfit
  for (const t of temp) {
    t.holdingPercent =
      Math.round(((t.currentPrice * t.totalQuantity) / totalAsset) * 10000) /
      100
    let profit = 0
    const currentPrice = t.currentPrice
    for (const th of t.tradingHistory) {
      profit += (currentPrice - th.purchasePrice) * th.quantity
    }
    t.totalProfit = profit
    totalProfit += profit
  }

  // set enterprise's profit percent
  for (const t of temp) {
    t.profitPercent = Math.round((t.totalProfit / t.totalCost) * 10000) / 100
  }

  // sort emterprise by holdingPercent
  temp.sort((t1, t2) => {
    return t2.holdingPercent - t1.holdingPercent
  })

  return {
    infoData: {
      totalCost: totalCost,
      myAsset: totalCost + totalProfit,
      ROI: totalProfit / totalCost,
      totalProfit: totalProfit
    },
    enterprises: temp
  }
}

const getTradingHistory = (tradingHistory, indexBundle) => {
  const temp = []
  for (const trading of tradingHistory) {
    const symbol = trading[indexBundle.symbol]
    let tradingDate = trading[indexBundle.tradingDate]
    const purchasePrice = parseFloat(trading[indexBundle.purchasePrice])
    const quantity = parseFloat(trading[indexBundle.quantity])

    if (!tradingDate) tradingDate = 'NaN'
    else {
      tradingDate =
        tradingDate.slice(0, 4) +
        '/' +
        tradingDate.slice(4, 6) +
        '/' +
        tradingDate.slice(6, 8)
    }
    temp.push({
      symbol: symbol,
      tradingDate: tradingDate,
      quantity: quantity,
      purchasePrice: purchasePrice,
      totalCost: purchasePrice * quantity
    })
  }
  // sort by tradingDate
  temp.sort((t1, t2) => {
    if (t1.tradingDate === 'NaN' && t2.tradingDate !== 'NaN') return 1
    if (t1.tradingDate !== 'NaN' && t2.tradingDate === 'NaN') return -1
    const d1 = t1.tradingDate.split('/')
    const d2 = t2.tradingDate.split('/')
    if (parseInt(d1[0]) > parseInt(d2[0])) return -1
    if (parseInt(d1[0]) < parseInt(d2[0])) return 1
    if (parseInt(d1[1]) > parseInt(d2[1])) return -1
    if (parseInt(d1[1]) < parseInt(d2[1])) return 1
    if (parseInt(d1[2]) > parseInt(d2[2])) return -1
    if (parseInt(d1[2]) < parseInt(d2[2])) return 1
    return -1
  })
  return temp
}

const getEnterprisesSymbol = (enterprises) => {
  const temp = []
  for (const enterprise of enterprises) {
    temp.push(enterprise.symbol)
  }
  return temp
}

const getEnterprisesWeight = (enterprises) => {
  const temp = []
  for (const enterprise of enterprises) {
    const price = (enterprise.totalQuantity * enterprise.currentPrice).toFixed(
      2
    )
    temp.push(parseFloat(price))
  }
  return temp
}

const getEnterpriseProfit = (enterprises) => {
  const temp = []
  for (const enterprise of enterprises) {
    temp.push(
      Math.round((enterprise.totalProfit / enterprise.totalCost) * 10000) / 100
    )
  }
  return temp
}

const getSample = () => {
  return {
    symbols: ['MSFT', 'SMH', 'QQQ', 'VOO'],
    indexBundle: { symbol: 0, purchasePrice: 10, quantity: 11, tradingDate: 9 },
    csvData: [
      [
        'SMH',
        '300',
        '2021/12/6',
        '16:00 EST',
        '-1.1499939',
        '299.57',
        '301.38',
        '290.51',
        '5105964',
        '20211206',
        '299.02',
        '0.96984',
        '',
        '',
        '',
        ''
      ],
      [
        'MSFT',
        '326.19',
        '2021/12/6',
        '16:00 EST',
        '3.1799927',
        '323.95',
        '327.42',
        '319.23',
        '30032556',
        '20211126',
        '334.11',
        '0.29929',
        '',
        '',
        '',
        ''
      ],
      [
        'MSFT',
        '326.19',
        '2021/12/6',
        '16:00 EST',
        '3.1799927',
        '323.95',
        '327.42',
        '319.23',
        '30032556',
        '20211206',
        '324.71',
        '1.75542',
        '',
        '',
        '',
        ''
      ],
      [
        'VOO',
        '421.82',
        '2021/12/6',
        '16:00 EST',
        '4.98001',
        '419.41',
        '423.64',
        '417',
        '7124862',
        '20211126',
        '424.96',
        '0.35298',
        '',
        '',
        '',
        ''
      ],
      [
        'VOO',
        '421.82',
        '2021/12/6',
        '16:00 EST',
        '4.98001',
        '419.41',
        '423.64',
        '417',
        '7124862',
        '20211206',
        '419.85',
        '2.71527',
        '',
        '',
        '',
        ''
      ],
      [
        'QQQ',
        '386.2',
        '2021/12/6',
        '16:00 EST',
        '3.0700073',
        '383.63',
        '387.6',
        '379.31',
        '64706783',
        '20211126',
        '396.07',
        '0.25248',
        '',
        '',
        '',
        ''
      ],
      [
        'QQQ',
        '386.2',
        '2021/12/6',
        '16:00 EST',
        '3.0700073',
        '383.63',
        '387.6',
        '379.31',
        '64706783',
        '20211206',
        '384.08',
        '2.23912',
        '',
        '',
        '',
        ''
      ]
    ]
  }
}

const getInfos = (infoData) => {
  return [
    {
      data: parseFloat(infoData.totalCost.toFixed(2)),
      title: '投入金額'
    },
    {
      data: parseFloat(infoData.myAsset.toFixed(2)),
      title: '股票市值'
    },
    {
      data: parseFloat((infoData.ROI * 100).toFixed(2)) + '%',
      title: '報酬率'
    },
    {
      data:
        parseFloat(infoData.totalProfit) < 0
          ? parseFloat(parseFloat(infoData.totalProfit).toFixed(2))
          : '+' + parseFloat(parseFloat(infoData.totalProfit).toFixed(2)),
      title: '總損益'
    }
  ]
}

const getToggleButtons = () => {
  return [
    { month: 0, date: 7, message: '7天' },
    { month: 1, date: 0, message: '1月' },
    { month: 6, date: 0, message: '6月' },
    { month: 12, date: 0, message: '1年' }
  ]
}

export {
  getSample,
  getEnterprisesData,
  getTradingHistory,
  getEnterprisesSymbol,
  getEnterprisesWeight,
  getEnterpriseProfit,
  getToggleButtons,
  getInfos
}
