import { Component } from "react";

import "./employeers-add-form.css";

class EmployeersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onWrite = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { onAdd } = this.props;
    const { name, salary } = this.state;
    return (
      <>
        <form className="employeers-add-form">
          <h2>Додати нового співробітника</h2>
          <div className="wrapper">
            <input
              onChange={(e) => this.onWrite(e)}
              type="text"
              minLength="3"
              value={name}
              name="name"
              placeholder=" Ім'я"
            />
            <input
              onChange={(e) => this.onWrite(e)}
              type="number"
              value={salary}
              name="salary"
              placeholder=" З/П в $"
              min={100}
            />

            <button type="submit" onClick={(e) => onAdd(e, name, salary)}>
              Додати
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default EmployeersAddForm;
