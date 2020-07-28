import React, { useState, Fragment } from 'react'
import AddChildForm from '/src/components/forms/AddChildForm'
import EditChildForm from '/src/components/forms/EditChildForm'
import ChildTable from '/src/components/tables/ChildTable'

const App = () => {
	
	const usersData = [
		{ id: 1, name: 'Ajay', age: '12', interest: 'Singing' },
		
	]

	const initialFormState = { id: 1, name: '', age: '', interest:'' }

	
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

		setCurrentUser({ id: user.id, name: user.name, age: user.age, interest: user.interest})
	}

	return (
		<div className="container">
			<h1>Child Data Form</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit child</h2>
							<EditChildForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add child</h2>
							<AddChildForm addUser={addUser} />
						</Fragment>
					
					)}
				</div>
				<div className="flex-large">
					<h2>View Child data</h2>
					<ChildTable users={users} editRow={editRow} deleteUser={deleteUser} />
				  
				</div>

				
				
			</div>
		</div>

	)
}

export default App