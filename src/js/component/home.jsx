import { event } from "jquery";
import { func } from "prop-types";
import React, { useState } from "react";

//create your first component
const Home = () => {
	const [lists, setLists] = useState(["Buy dog food", "Go to swim"]);
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
		<div className="container-fluid todos">
			<h1 className="title">My to do list</h1>
			<input
				value={newTask}
				className="p-2 bg-transparent border-1 box"
				placeholder="What needs to be done?"
				id="newTask"
				onChange={changeValue}
				onKeyDown={pressEnter}
			/>
			<ul className="lists ">
				{lists.map((list, index) => (
					<li className="list " key={index}>
						<span>{list}</span>
						<i
							onClick={() => {
								deleteTask(index);
							}}
							className="fas fa-trash-alt delete trash"></i>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
