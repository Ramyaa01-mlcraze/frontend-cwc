import React, { Component } from 'react'

class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = {  
         details: [
            { id: 1,  name: 'Akhil', age:11, guardian:'Kumar' },
            { id: 2, name:'Rhea', age:16, guardian:'Francis'},
            { id: 3, name:'Sara', age: 14, guardian:'Xavier'},
           
         ]
      }
   }

   renderTableData() {
    return this.state.details.map((details, index) => {
       const { id, name, age, guardian } = details 
       return (
          <tr key={id}>
             <td>{id}</td>
             
             <td>{name}</td>
             <td>{age}</td>
             <td>{guardian}</td>
             
             
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
          <h1 id='title'>Children data</h1>
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
