import React from 'react'
import Todos from './Todos'
import "../css/list.css"

class List extends React.Component {

  deleteItem(id) {
    this.props.deleteItem(id)
  }

  changeComplete(id) {
    this.props.changeComplete(id);
  }

  render() {
    let list
    if (this.props.show === "all") {
      list = this.props.data.map(({ id, text, complete }, index) => {
        return (
          <Todos
            key={index}
            id={id}
            text={text}
            complete={complete}
            changeComplete={this.changeComplete.bind(this)}
            deleteItem={this.deleteItem.bind(this)}
          />
        )
      })
    }
    else if (this.props.show === "completed") {
      list = this.props.data.map(({ id, text, complete }, index) => {
        if (complete) {
          return (
            <Todos
              key={index}
              id={id}
              text={text}
              complete={complete}
              changeComplete={this.changeComplete.bind(this)}
              deleteItem={this.deleteItem.bind(this)}
            />
          )
        }
        else {
          return null
        }
      })
    }
    else if (this.props.show === "uncompleted") {
      list = this.props.data.map(({ id, text, complete }, index) => {
        if (!complete) {
          return (
            <Todos
              key={index}
              id={id}
              text={text}
              complete={complete}
              changeComplete={this.changeComplete.bind(this)}
              deleteItem={this.deleteItem.bind(this)}
            />
          )
        }
        else {
          return null
        }
      })
    }
    return (
      <div className="list"> {list} </div>
    )
  }
}

export default List;