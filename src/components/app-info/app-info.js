import { Component } from "react";

import "./app-info.css";

class AppInfo extends Component {
  render() {
    const { numberPremium, number } = this.props;
    return (
      <div className="app-info">
        <h1>Кількість працівників компанії N</h1>
        <h2>Загальна кількість працівників компанії: {number}</h2>
        <h3>Премію отримають: {numberPremium}</h3>
      </div>
    );
  }
}
export default AppInfo;
