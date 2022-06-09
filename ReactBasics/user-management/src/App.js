import "./App.css";
import { useState } from "react";
import AddUser from "./components/Users/UserForm/AddUser";
import UserList from "./components/Users/UsersList/UserLists";

let PLACEHOLDER = [];

function App() {
	const [users, setUsers] = useState(PLACEHOLDER);
	//recive a obj of form {name: '', age: ''}
	const addUserhandler = (user) => {
    let updatedUser = {
      ...user,
      id: Math.random().toString()
    }
		setUsers((prev) => {
			return [updatedUser, ...prev];
		});
	};

	return (
		<div>
			<AddUser onAddUser={addUserhandler}></AddUser>
			<UserList users={users}></UserList>
		</div>
	);
}

export default App;
