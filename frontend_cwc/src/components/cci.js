import React, { Component } from 'react'
import {NavLink} from "react-router-dom";


class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = {  
         details: [{id:1,state: 'Tamilnadu', district:'Chennai'}],
      };
     
            
         
      
   }

   renderTableData() {
    return this.state.details.map((details, index) => {
       const { id,  state, district } = details 
       return (
          <tr key={id}>
             <td>{id}</td>
             
             <td>{state}</td>
             <td>{district}</td>
             
             <td>
             
             <NavLink to="/details">Showmore</NavLink>
                  
                </td>
          </tr>
       )
    })
 }
 renderTableHeader() {
  let header = Object.keys(this.state.details[0])
  return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
  })
}
 render() {
    return (
       <div>
          <h1 id='title'>List of CCI</h1>
          <table id='details'>
             
                <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
             
          </table>
       </div>
    )
 }
}
export default Table
