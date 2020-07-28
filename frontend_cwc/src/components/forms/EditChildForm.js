import React, { useState, useEffect } from 'react'

const EditChildForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [props]
  )
    

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Age</label>
      <input type="String" name="age" value={user.age} onChange={handleInputChange} />
      <label>Interest</label>
      <input type="String" name="interest" value={user.interest} onChange={handleInputChange} />
      <button>Update child</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditChildForm