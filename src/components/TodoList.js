import React from 'react'
import List from './List.js'
import Form from './Form.js'
import Footer from './Footer.js'
import Count from './Count.js'

class TodoList extends React.Component {
  state = {
    data: this.props.data,
    show: "all"
  }

  changeShow(value) {
    this.setState({ show: value });
  }

  onChangeComplete(id) {
    let newData = this.state.data.map((item, index) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    })
    this.setState({ data: newData });
  }

  onDeleteItem(id) {
    const data = JSON.parse(JSON.stringify(this.state.data))
    this.state.data.map((item, index) => {
      if (item.id === id) {
        data.splice(index, 1)
      }
      return item
    })
    this.setState({ data: data })
  }

  OnAddTodoItem(newItem) {
    const data = JSON.parse(JSON.stringify(this.state.data))
    data.push(newItem)
    this.setState({ data: data });
  }

  render() {
    return (
      <div className='comments'>
        <h1>Todo List</h1>
        <Form AddTodoItem={this.OnAddTodoItem.bind(this)} />
        <List
          data={this.state.data}
          show={this.state.show}
          changeComplete={this.onChangeComplete.bind(this)}
          deleteItem={this.onDeleteItem.bind(this)} />
        <Count data={this.state.data} />
        <Footer changeShow={this.changeShow.bind(this)} />
      </div>
    )
  }
}

export default TodoList;