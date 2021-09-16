import React from 'react'
import "../css/todo.css"

class Todos extends React.Component {

  handleChangeComplete() {
    this.props.changeComplete(this.props.id);
  }

  handleDelete() {
    console.log(this.props)
    this.props.deleteItem(this.props.id);
  }

  textStyle(complete) {
    if (complete) {
      return {
        textDecoration: 'line-through',
        color: 'rgb(210, 210, 210)'
      }
    }
  }

  render() {
    return (
      <div className='comment'>
        <div className='content'>
          <span className='text'>
            <span className='value' style={this.textStyle(this.props.complete)}>
              {this.props.text}
            </span>
          </span>
          <span className='complete'
            onClick={this.handleChangeComplete.bind(this)}>
            {this.props.complete ? '已完成' : '未完成'}
          </span>
          <span className='delete'
            onClick={this.handleDelete.bind(this)}>
            删除
          </span>
        </div>
      </div>
    )
  }
}

export default Todos;