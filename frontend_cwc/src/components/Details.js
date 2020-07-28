import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
class detail extends Component {
   constructor(props) {
      super(props) 
      this.state = {  
         details: [
            { id: 1,state: 'Tamilnadu', district:'Chennai',contact:'Raj',phone:22420681,address:'abcdefg',email:'ccichennai@gmail.com',children:3},
          
              
         ]
      }
   }

   renderTableData() {
    return this.state.details.map((details, index) => {
       const { id,state,district,contact,phone,address,email,children} = details 
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{state}</td>
             <td>{district}</td>
             <td>{contact}</td>
             <td>{phone}</td>
             <td>{address}</td>
             <td>{email}</td>
             <td>{children}</td>
            <NavLink to="/childrenlist">List of Children</NavLink>
             
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
          <h1 id='title'>Detail Information</h1>
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
export default detail
