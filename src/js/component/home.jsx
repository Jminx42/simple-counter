import React, { useState, useEffect } from "react";
import SecondsBlock from "./secondsblock.jsx";


//create your first component
const Home = () => {
const [timer, setTimer] = useState(0);
const [isPlay, setIsPlay] = useState(true);
const [showButtons, setShowButtons] = useState(true);

useEffect (() => {
	
	const interval = setInterval(() => {
		if (isPlay) {
		setTimer(timer => timer + 1);
		}
	}, 1000);
	
	return () => clearInterval(interval);	
}, [isPlay]);

	return (
		<div className="container">
			<div className="row m-3 justify-content-center text-center">
				<div className="col-4">
				<button className="btn btn-warning" onClick={() => {
					setShowButtons(!showButtons);
				}}>{showButtons ? "HIDE" : "SHOW"}</button>
				</div>
			</div>
			<div className="row bg-dark justify-content-center align-items-center">
				<SecondsBlock time={<i class="fa-regular fa-clock"></i>}/>
				<SecondsBlock time={Math.floor(timer / 10000) % 10}/>
				<SecondsBlock time={Math.floor(timer / 1000) % 10}/>
				<SecondsBlock time={Math.floor(timer / 100) % 10}/>
				<SecondsBlock time={Math.floor(timer / 10) % 10}/>
				<SecondsBlock time={Math.floor(timer) % 10}/>
			</div>
			{
				showButtons ?
				<>
				<div className="row m-3 justify-content-center text-center">
				<div className="col-4 ">
					<button className={"btn btn-" + (isPlay ? "danger" : "success")} onClick={() => {
						setIsPlay(!isPlay);
						}}>{isPlay ? "PAUSE" : "PLAY"}</button>
				</div>
				<div className="col-4 ">
					<button className="btn btn-secondary" onClick={() => {
						setTimer(0);
						setIsPlay(false);
					}}>RESET</button>
				</div>
				</div>
				</>
				: null
			}
			
			
		</div>
	);
};

export default Home;
