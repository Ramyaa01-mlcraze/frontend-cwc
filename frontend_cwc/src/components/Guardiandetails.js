import React, { useState, Fragment } from 'react'
import AddGuardianForm from '/src/components/forms/AddGuardianForm'
import EditGuardianForm from '/src/components/forms/EditGuardianForm'
import GuardianTable from '/src/components/tables/GuardianTable'

const detail = () => {
	
	const usersData = [
		{ id: 1, name: 'Prakash', age: '40'},
		
	]

	const initialFormState = { id: 1, name: '', age: '' }

	
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)


	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, age: user.age})
	}

	return (
		<div className="container">
			<h1>Guardian Data Form</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Guardian</h2>
							<EditGuardianForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Guardian</h2>
							<AddGuardianForm addUser={addUser} />
						</Fragment>
					
					)}
				</div>
				<div className="flex-large">
					<h2>View Guardian data</h2>
					<GuardianTable users={users} editRow={editRow} deleteUser={deleteUser} />
				
				</div>
				
				
			</div>
		</div>

	)
}

export default detail