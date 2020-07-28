import React, { Component } from 'react'
class detail extends Component {
   constructor(props) {
      super(props) 
      this.state = {  
         details: [
            { id: 1,state: 'Tamilnadu', district:'Chennai',contact:'Suryakala',phone:245634526,address:'abcdefg',email:'dcpuchennai@gmail.com'},
          
              
         ]
      }
   }

   renderTableData() {
    return this.state.details.map((details, index) => {
       const { id,state,district,contact,phone,address,email} = details 
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{state}</td>
             <td>{district}</td>
             <td>{contact}</td>
             <td>{phone}</td>
             <td>{address}</td>
             <td>{email}</td>
            
             
             
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
