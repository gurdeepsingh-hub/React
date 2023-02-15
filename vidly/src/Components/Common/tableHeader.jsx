import React, { Component } from "react";

// columns: array
//selectedColumn: object
// onSort: func
class TableHeader extends Component {
  raiseSort = (path) => {
    const { selectedColumn, movies } = this.props;
    if (selectedColumn.path == path) {
      selectedColumn.order *= -1;
    } else {
      selectedColumn.path = path;
      selectedColumn.order = 1;
    }
    this.props.onSort(selectedColumn);
  };

  renderIcon(column) {
    if (column.path != this.props.selectedColumn.path) return null;
    else if (this.props.selectedColumn.order == 1)
      return <i className="fa fa-sort-asc"></i>;
    else return <i className="fa fa-sort-desc"></i>;
  }
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column, index = 0) => {
            return (
              <th
                className="clickable"
                key={index++}
                onClick={() => this.raiseSort(column.path)}
              >
                {column.label}
                {this.renderIcon(column)}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
