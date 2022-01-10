import React from 'react'
import PropTypes from 'prop-types'

const Table = (props) => {
  const { columnNames, rows } = props

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columnNames.map((name, index) => (
              <th key={index}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((block, bIndex) => (
                <td key={index + '-' + bIndex}>{block}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  columnNames: PropTypes.array,
  rows: PropTypes.arrayOf(PropTypes.array)
}

export default Table
