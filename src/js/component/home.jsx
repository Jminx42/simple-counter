import React, { useState, useEffect } from "react";
import SecondsBlock from "./secondsblock.jsx";


//create your first component
const Home = () => {
const [timer, setTimer] = useState(0);

useEffect (() => {
	const interval = setInterval(() => {
		setTimer(timer => timer + 1);
	}, 1000);
}, []);

	return (
		<div className="container">
			<SecondsBlock time={<i class="fa-regular fa-clock"></i>}/>
			<SecondsBlock time={0}/>
			<SecondsBlock time={0}/>
			<SecondsBlock time={0}/>
			<SecondsBlock time={Math.floor(timer * 10) % 10}/>
			<SecondsBlock time={Math.floor(timer) % 10}/>
		</div>
	);
};

export default Home;
