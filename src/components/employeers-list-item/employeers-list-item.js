import { Component } from "react";
import "./employeers-list-item.scss";

class EmployeersListItem extends Component {
  render() {
    const {
      name,
      salary,
      id,
      onDel,
      onIncrease,
      increase,
      onPremium,
      premium,
    } = this.props;
    let color = premium
      ? "employeers-list-item-increase"
      : "employeers-list-item";
    return (
      <li key={id} className={color}>
        <span onClick={() => onIncrease(id)} className="name">
          {name}
        </span>
        <input
          className={color}
          type="text"
          name="salary"
          defaultValue={salary + "$"}
        />
        <div className="block-icon-btns">
          <div className="btns-wrapper">
            <button onClick={() => onPremium(id)}>
              <i className="fa-solid fa-cookie"></i>
            </button>
            <button onClick={onDel}>
              <i className="fa-solid fa-trash"></i>
            </button>
            {increase ? (
              <button>
                <i className="fa-solid fa-star"></i>
              </button>
            ) : null}
          </div>
        </div>
      </li>
    );
  }
}
export default EmployeersListItem;
