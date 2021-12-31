# Yahoo Finance Portfolio
將 Yahoo Finance 匯出後的資料進行可視化分析，幫助習慣使用 Yahoo Finance 進行交易紀錄的使用者。

作品連結: [https://aleetsaiya.github.io/yfinance-portfolio](https://aleetsaiya.github.io/yfinance-portfolio)

## 操作方式
> *Yahoo Finance Portfolio*: [https://finance.yahoo.com/portfolios](https://finance.yahoo.com/portfolios)  

從 Yahoo Finance Portfolio 中匯出 `csv` 檔，將匯出的 `csv` 檔上傳。  


## 輸入資料格式
輸入的 `csv` 檔至少需包含 *Symbol*、*Trade Date*、*Purchase Price*、*Quantity* 欄位。  

各欄位分別代表:  
+ Symbol：每筆交易的股票代號
+ Trade Date：每筆交易的交易日期，格式為: yyyymmdd
+ Purchase Price：每筆交易的買入價格
+ Quantity：每筆交易的成交量

ex. 
Symbol        | Trade Date | Purchase Price | Quantity
:------------:|:----------:|:--------------:|:-------:
MSFT          |  20211127  |    335.13      |  0.29929
VOO           |  20211127  |    426.23      |  0.35298
QQQ           |  20211127  |    397.26      |  0.25248


## 預覽
![demo](https://user-images.githubusercontent.com/67775387/147832616-f3065e3e-ae48-447e-834f-72be17b9f503.jpeg)
