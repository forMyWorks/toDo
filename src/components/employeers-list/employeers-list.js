import EmployeersListItem from "../employeers-list-item/employeers-list-item";
import "./employeers-list.css";

function EmployeersList({ data, onDel, onPremium, onIncrease }) {
  const employeers = data.map((item) => {
    const { id, ...otherItem } = item;
    return (
      <EmployeersListItem
        key={id}
        onIncrease={() => onIncrease(id)}
        onPremium={() => onPremium(id)}
        {...otherItem}
        onDel={() => onDel(id)}
      />
    );
  });
  return <ul className="employeers-list">{employeers}</ul>;
}
export default EmployeersList;
