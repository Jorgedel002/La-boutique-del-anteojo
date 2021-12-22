import styled from "styled-components";
import '@progress/kendo-theme-default/dist/all.css';
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from '../json/products.json';
import React, {Component} from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import categories from '../json/caregories.json';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import App from "../css/App.css"

class Filter extends Component{
    state = {
        dropdownlistCategory: null,
        gridDataState: {
          sort: [
            { field: "ProductName", dir: "asc" }
          ],
          skip: 0,
          take: 10
        },
        windowVisible: false,
        gridClickedRow: {}
      }
    
      handleDropDownChange = (e) => {
        let newDataState = { ...this.state.gridDataState }
        if (e.target.value.CategoryID !== null) {
          newDataState.filter = {
            logic: 'and',
            filters: [{ field: 'CategoryID', operator: 'eq', value: e.target.value.CategoryID }]
          }
          newDataState.skip = 0
        } else {
          newDataState.filter = []
          newDataState.skip = 0
        }
        this.setState({
          dropdownlistCategory: e.target.value.CategoryID,
          gridDataState: newDataState
        });
      }
    
      handleGridDataStateChange = (e) => {
        this.setState({gridDataState: e.dataState});
      }
    
      handleGridRowClick = (e) => {
        this.setState({
            windowVisible: true,
            gridClickedRow: e.dataItem
        });
      }
    
      closeWindow = (e) => {
        this.setState({
            windowVisible: false
        });
      }
    
      render() {
        return (
          <div className="kendo-react-getting-started">
            <p>
              <DropDownList
                data={categories}
                dataItemKey="CategoryID"
                textField="CategoryName"
                defaultItem={{CategoryID: null, CategoryName: "Filtro"}}
                onChange={this.handleDropDownChange}
                className="filter"
                />
            </p>
    
          </div>
        );
      }
    }
    
    class checkboxColumn extends Component {
      render() {
        return (
            <td>
              <input type="checkbox" checked={this.props.dataItem[this.props.field]} disabled="disabled" />
            </td>
        );
      }
    }

export default Filter;