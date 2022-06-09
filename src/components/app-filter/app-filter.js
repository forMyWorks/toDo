import "./app-filter.css";
import SearchPanel from "../search-panel/search-panel";

function AppFilter(props) {
  // function tugg(e){
  //   e.target.className
  // }

  const btn = [
    { name: "all", label: "Всі працівники" },
    { name: "increase", label: "На підвищення" },
    { name: "one-thousand", label: "З/П більша ніж 1000$" },
  ];

  const btns = btn.map((item) => {
    const active = props.filter === item.name;
    const classss = active ? "btn active" : "btn";
    return <button onClick={()=>props.onFiltetTabClass(item.name)} className={classss}>{item.label}</button>
  });

  return (
    <div className="app-filter">
      <SearchPanel onSearch={props.onSearch} />
      <div className="btns">
      {btns}
      </div>
    </div>
  );
}
export default AppFilter;
