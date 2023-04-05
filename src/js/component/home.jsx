import React from "react";
import SecondsCounter from "./secondscounter.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container">
			<SecondsCounter seconds={3434}/>
			<div className="text-light"><i class="fa-regular fa-clock"></i></div>
		</div>
	);
};

export default Home;
