# Yahoo Finance Portfolio
將 Yahoo Finance 匯出後的資料進行可視化分析。

作品連結: [https://aleetsaiya.github.io/yfinance-portfolio](https://aleetsaiya.github.io/yfinance-portfolio)

## 功能
- [x] 利用 Yahoo Finance API 取得最新價格
- [x] 分析各股票佔整體比例  
- [x] 繪製帳戶金額成長走勢
- [x] 柱狀圖對比各股票績效

## 操作方式
> *Yahoo Finance Portfolio*: [https://finance.yahoo.com/portfolios](https://finance.yahoo.com/portfolios)  

資料來源可以選擇從 Yahoo Finance Portfolio 中匯出 `csv` 檔，將匯出的 `csv` 檔上傳。或是依照底下描述的資料格式，將每筆交易紀錄填寫至自己創建的 `csv` 檔中。


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
