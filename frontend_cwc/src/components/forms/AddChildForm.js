import React, { useState } from 'react'

const AddChildForm = props => {
	const initialFormState = { id: null, name: '', age: '', interest:'' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.age) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Age</label>
			<input type="String" name="age" value={user.age} onChange={handleInputChange} />
      <label>Interest</label>
      <input type="String" name="interest" value={user.interest} onChange={handleInputChange} />
			<button>Add new child</button>
		</form>
	)
}

export default AddChildForm