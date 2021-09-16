import React from 'react';
import '../css/form.css'

class Form extends React.Component {

  getId() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);
    return uuid.substr(uuid.lastIndexOf("/") + 1);
  }

  onSubmit(e) {
    if (e.code === "Enter") {
      e.preventDefault()
      let newItem = { id: this.getId(), text: e.target.value, complete: false }
      this.props.AddTodoItem(newItem);
      e.target.value = ""
    }
  }

  render() {
    return (
      <div className='ui reply form'>
        <div className='field'>
          <input type='text' placeholder='what needs to be done?' ref='text' onKeyDown={this.onSubmit.bind(this)} />
        </div>
      </div>
    )
  }
}

export default Form;