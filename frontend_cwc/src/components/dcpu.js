import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = {  
         details: [
            { id: 1,  state: 'Tamilnadu', district:'Chennai' },
           
         ]
      }
   }

   renderTableData() {
    return this.state.details.map((details, index) => {
       const { id, state, district } = details 
       return (
          <tr key={id}>
             <td>{id}</td>
             
             <td>{state}</td>
             <td>{district}</td>
             <NavLink to="/district">Showmore</NavLink>
             
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
          <h1 id='title'>List of DCPU</h1>
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
