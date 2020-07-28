import React, { useState } from 'react'

const AddGuardianForm = props => {
	const initialFormState = { id: 1, name: '', age: '' }
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
      
			<button>Add Guardian</button>
		</form>
	)
}

export default AddGuardianForm