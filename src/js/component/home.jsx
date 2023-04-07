import React, { useState, useEffect } from "react";
import SecondsBlock from "./secondsblock.jsx";


//create your first component
const Home = () => {
const [timer, setTimer] = useState(0);
const [isPlay, setIsPlay] = useState(true);
const [showButtons, setShowButtons] = useState(true);
const [countdown, setCountDown] = useState(0);
const [countdownStarted, setCountdownStarted] = useState(false); 

const handleChange = (e) => {
    // 👇 Store the input value to local state
    setCountDown(parseInt(e.target.value));
  };

const handleStartCountdown = () => {
	setCountdownStarted(true);
	setIsPlay(true);
  };

useEffect(() => {
	if (countdownStarted && isPlay && countdown > 0) {
	  const intervalId = setInterval(() => {
		setCountDown(countdown => countdown - 1);
	  }, 1000);
  
	  return () => {
		clearInterval(intervalId);
	  };
	}
  }, [countdownStarted, countdown, isPlay]);

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
			<div className="row bg-dark justify-content-center align-items-center rounded">
				{!countdownStarted?
				<>
				<SecondsBlock time={<i className="fa-regular fa-clock"></i>}/>
				<SecondsBlock time={Math.floor(timer / 10000) % 10}/>
				<SecondsBlock time={Math.floor(timer / 1000) % 10}/>
				<SecondsBlock time={Math.floor(timer / 100) % 10}/>
				<SecondsBlock time={Math.floor(timer / 10) % 10}/>
				<SecondsBlock time={Math.floor(timer) % 10}/>
				</>
				:
				<>
				<SecondsBlock time={<i className="fa-regular fa-clock"></i>}/>
				<SecondsBlock time={Math.floor(countdown / 10000) % 10}/>
				<SecondsBlock time={Math.floor(countdown / 1000) % 10}/>
				<SecondsBlock time={Math.floor(countdown / 100) % 10}/>
				<SecondsBlock time={Math.floor(countdown / 10) % 10}/>
				<SecondsBlock time={Math.floor(countdown) % 10}/>
				</>
				}
				
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
						setCountDown(0);
  						setCountdownStarted(false);
					}}>RESET</button>
				</div>
				</div>
				</>
				: null
			}
			<div className="row m-3 justify-content-center p-3">
				<div className="col-4 border border-primary p-3 rounded">
					<div className="mb-3">
						<label htmlFor="countdown" className="form-label">Countdown:</label>
						<div className="input-group">
							<input type="number" className="form-control" id="countdown" aria-describedby="basic-addon4" 
							onChange={handleChange} value={countdown || ""} />
							
						</div>
						<div className="form-text" id="basic-addon4">Enter a number to countdown from</div>
					</div>
					<div className="d-flex justify-content-center">
						<button className="btn btn-primary" onClick={handleStartCountdown}>Start Countdown</button>
					</div>
				</div>
			</div>
			
		</div>
	);
};

export default Home;
