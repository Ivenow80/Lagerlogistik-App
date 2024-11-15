// src/table.js
// DynamicTable
import React from 'react';

export default class DynamicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Name: '', Data: [] };
  }

  UpdateData(event) {
    this.setState({ Name: event.target.value });
  }

  ClickAction() {
    var Data = this.state.Data;
    Data.push(this.state.Name);
    this.setState({ Data: Data, Name: '' });
  }

  OnDataChange(i, event) {
    var Data = this.state.Data;
    Data[i] = event.target.value;
    this.setState({ Data: Data });
  }

  OnDataDelete(i) {
    var Data = this.state.Data;
    Data.splice(i, 1);
    this.setState({ Data: Data });
  }

  DrawTable() {
    var context = this;
    return this.state.Data.map(function (o, i) {
      return (
        <tr key={'item-' + i}>
          <td>
            <input type="text" value={o} onChange={context.OnDataChange.bind(context, i)} />
          </td>
          <td>
            <button onClick={context.OnDataDelete.bind(context, i)}>Delete</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.DrawTable()}</tbody>
        </table>
        <hr />
        <input type="text" value={this.state.Name} onChange={this.UpdateData.bind(this)} />
        <button onClick={this.ClickAction.bind(this)}>Add Item</button>
      </div>
    );
  }
}
