import "./App.css";
import React, { useState } from "react";
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

	//Another approach is to use <React.Fragment>, or simply <> as a wrapping element around your JSX code
	//With this you can reduce the number of useless HTML elements that are rendered on the page
	return (
		<React.Fragment>
			<AddUser onAddUser={addUserhandler}></AddUser>
			<UserList users={users}></UserList>
		</React.Fragment>
	);
}

export default App;
