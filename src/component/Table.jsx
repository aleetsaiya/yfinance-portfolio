import React , {useState} from 'react';
import './table.css'

const Table = props => {
  const {headRow, dataRows, targetData} = props;
  const [page, setPage] = useState(0);

  const movePage = offset => {
    if (page === 0 && offset === -1)
      return;    
    if ((page + offset) * 5 > dataRows.length)
      return;

    setPage(page + offset);
  };

  const getData = () => {
    const data = dataRows.slice(page*5, page*5+5);
      return (data.map((row, index) => 
      <tr key={index}>
        {
          targetData.map(target => {
            if (target === 'averageCost') {
              const aveCost = Round(row['totalCost'] / row['totalQuantity'], 2);
              return <td key={aveCost.toString() + '-' + index.toString()}> {aveCost} </td>
            }
            return <td key={row[target].toString() + '-' + index.toString()}>
              {typeof row[target] === 'number' ? Round(row[target], 2) : row[target]}
            </td>;
          })
        }
      </tr>
    ));
  }

  const Round = (number, decimal) => Math.round(number*Math.pow(10, decimal)) / Math.pow(10, decimal);
  return (
    <div className="tableBlock">
      <table>
        <thead>
          <tr>
            {headRow.map(head => <th key={head}>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {/* 獲益的 column 新增 onclick 切換 % 或是金額 */}
          {getData()}
        </tbody>
      </table>
      <div className="paging">
        <button className="page" onClick={() => movePage(-1)} disabled={page === 0 ? 'disabled':''}>{'<'}</button>
        <button className="page" onClick={() => movePage(1)} disabled={(page + 1) * 5 > dataRows.length ? 'disabled':''}>{'>'}</button>
      </div>
    </div>
  );
};

export default Table;