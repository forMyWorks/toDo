import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import AppInfo from "../app-info/app-info";
import AppFilter from "../app-filter/app-filter";
import EmployeersList from "../employeers-list/employeers-list";
import EmployeersAddForm from "../employeers-add-form/employeers-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Никон", salary: 1000, increase: true, premium: true, id: 1 },
        { name: "Єремія", salary: 900, increase: true, premium: false, id: 2 },
        { name: "Парфен", salary: 700, increase: false, premium: true, id: 3 },
      ],
      finde: "",
      filter: "all",
    };

    this.onFiltetTabClass = this.onFiltetTabClass.bind(this);
  }

  onDel = (id) => {
    const arr = this.state.data.filter((item) => id !== item.id);
    this.setState({
      data: arr,
    });
  };

  onAdd = (e, name, salary) => {
    e.preventDefault();

    const arr = [
      ...this.state.data,
      {
        name: name,
        salary: salary,
        increase: false,
        premium: false,
        id: uuidv4(),
      },
    ];
    if (name.length > 2 && salary.length > 2) {
      this.setState({
        data: arr,
      });
    }
  };
  onIncrease = (id) => {
    const arr = this.state.data.map((item) => {
      if (item.id === id) {
        item.increase = !item.increase;
      }
      return item;
    });
    this.setState({
      data: arr,
    });
  };
  onPremium = (id) => {
    const arr = this.state.data.map((item) => {
      if (item.id === id) {
        item.premium = !item.premium;
      }
      return item;
    });
    this.setState({
      data: arr,
    });
  };

  onFilter = (name, arr) => {
    if (name.length === 0) {
      return arr;
    }

    return arr.filter((item) => {
      return item.name.indexOf(name) > -1;
    });
  };
  onSearch = (finde) => {
    this.setState({
      finde: finde,
    });
  };

  onFilterTab = (filter, arr) => {
    switch (filter) {
      case "increase":
        return arr.filter((item) => item.increase);
      case "one-thousand":
        return arr.filter((item) => item.salary > 1000);
      default:
        return arr;
    }
  };

  onFiltetTabClass(filter) {
    this.setState({ filter });
  }
  render() {
    const { data, finde } = this.state;
    this.number = data.length;
    this.numberPremium = data.filter((item) => item.premium).length;
    const dataNew = this.onFilterTab(
      this.state.filter,
      this.onFilter(finde, data)
    );
    return (
      <div className="app">
        <AppInfo number={this.number} numberPremium={this.numberPremium} />
        <AppFilter
          filter={this.state.filter}
          onFiltetTabClass={this.onFiltetTabClass}
          onSearch={this.onSearch}
        />
        <EmployeersList
          data={dataNew}
          onDel={this.onDel}
          onPremium={this.onPremium}
          onIncrease={this.onIncrease}
        />
        <EmployeersAddForm data={data} onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;
