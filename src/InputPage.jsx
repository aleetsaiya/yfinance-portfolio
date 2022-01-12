import React from 'react'
import PropTypes from 'prop-types'
import { FaFileCsv } from 'react-icons/fa'

const InputPage = (props) => {
  const {
    onDragEnter,
    onDragOver,
    onDragLeave,
    onDrop,
    onChange,
    show,
    fileEnter,
    demo
  } = props
  return (
    <div className={show ? '' : 'hide'}>
      <h2>輸入檔案</h2>
      <div
        className="drag-file-block"
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        style={
          fileEnter
            ? { backgroundColor: 'rgba(173, 216, 230, .5)' }
            : { backgroundColor: 'inherit' }
        }
      >
        <div className="dropInfo">
          <div className="fileIcon">
            <FaFileCsv size={30} />
          </div>
          <div>將 csv 檔拖曳至此</div>
        </div>
      </div>
      <label className="input-label">
        <span>📁 上傳檔案</span>
        <div style={{ display: 'none' }}>
          <input type="file" accept=".csv" onChange={onChange} />
        </div>
      </label>
      <label className="input-label" onClick={demo}>
        <span>💡 使用範例</span>
      </label>
    </div>
  )
}

InputPage.propTypes = {
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
  onChange: PropTypes.func,
  show: PropTypes.bool,
  fileEnter: PropTypes.bool,
  demo: PropTypes.func
}

export default InputPage
