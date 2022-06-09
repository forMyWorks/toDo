import { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finde: "",
    };
  }
  onSearchPanel = (e) => {
    this.setState({
      finde: e.target.value,
    });
    this.props.onSearch(e.target.value);
  };
  render() {
    return (
      <input
        value={this.state.finde}
        className="app-search"
        type="text"
        onChange={this.onSearchPanel}
        name="employeers"
        placeholder=" Знайти співробітника"
      />
    );
  }
}
export default SearchPanel;
