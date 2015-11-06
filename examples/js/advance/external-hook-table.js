'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


var products = [];

function addProducts(quantity) {
  var startId = products.length;
  for (var i = 0; i < quantity; i++) {
    var id = startId + i;
    products.push({
      id: id,
      name: "Item name " + id,
      price: 2100 + i
    });
  }
}

addProducts(70);

export default class StoreHookPaginationTable extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAfterSearchOrFilter(filteredData) {
    console.log(filteredData.length);
  }

  render() {
    return (
      <div>
        <BootstrapTable
          data={products}
          pagination
          options={{afterSearchOrFilter: this.handleAfterSearchOrFilter}}
        >
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
};