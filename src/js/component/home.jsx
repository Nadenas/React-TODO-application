import { func } from "prop-types";
import React, { useState } from "react";

//create your first component
const Home = () => {
	const [lists, setLists] = useState(["Task", "Task2"]);
	const [newTask, setNewTask] = useState("");

	function changeValue(event) {
		setNewTask(event.target.value);
	}

	function pressEnter(event) {
		if (event.keyCode === 13) {
			let repeated = lists.findIndex(list => list === newTask);
			if (repeated === -1) {
				setLists([...lists, newTask]);
				setNewTask("");
			}
		}
	}

	function deleteTask(indexToRemove) {
		setLists(lists.filter((list, index) => index !== indexToRemove));
	}

	return (
		<div className="container-fluid bg-light">
			<h1 className="text-center">TODOS</h1>
			<input
				value={newTask}
				className="p-2 w-100 bg-transparent border-0"
				placeholder="What needs to be done?"
				id="newTask"
				onChange={changeValue}
				onKeyDown={pressEnter}
			/>
			<ul className="lists">
				{lists.map((list, index) => (
					<li className="list" key={index}>
						<span>{list}</span>
						<i
							onClick={() => {
								deleteTask(index);
							}}
							className="fas fa-trash-alt delete"></i>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
