import React from 'react'
import "../css/footer.css"

class Footer extends React.Component {
  changeShow(e) {
    const value = e.target.value
    this.props.changeShow(value)
  }

  render() {
    return (
      <div className="footer">
        <div className="btn">
          <button onClick={this.changeShow.bind(this)} value='all'>
            全部
          </button>
        </div>
        <div className="btn">
          <button onClick={this.changeShow.bind(this)} value='uncompleted'>
            未完成
          </button>
        </div>
        <div className="btn">
          <button onClick={this.changeShow.bind(this)} value='completed'>
            已完成
          </button>
        </div>
      </div>
    )
  }
}

export default Footer;