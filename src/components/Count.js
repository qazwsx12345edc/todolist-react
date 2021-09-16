import React from 'react'
import '../css/count.css'

class Footer extends React.Component {
  render(props) {
    return (
      <div className="count">
        共有 {this.all()} 条todo，已完成 {this.completed()} 条，未完成 {this.all() - this.completed()} 条
      </div>
    )
  }

  all(){
    return this.props.data.length
  }
  
  completed() {
    return this.props.data.filter(item => {
      return item.complete === true
    }).length
  }
}

export default Footer;