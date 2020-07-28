import React, { Component } from 'react'

class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = {  
         details: [
            { id: 1,  state: 'Tamilnadu', district:'Chennai', name:'Hari', contact:9545658745},
           
         ]
      }
   }

   renderTableData() {
    return this.state.details.map((details, index) => {
       const { id, state, district, name, contact } = details 
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{state}</td> 
             <td>{district}</td>
             <td>{name}</td>
             <td>{contact}</td>
             
             
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
          <h1 id='title'>List of PO</h1>
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
