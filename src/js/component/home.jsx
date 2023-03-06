import React from "react";
import { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const[selectedColor,setSelectedColor]=useState('');
	const[showPurple,setShowPurple]=useState(false);
	const handleToggle = () => setShowPurple(!showPurple);

	return (
		
			<div className = "container trafficLights">
					<div onClick={()=> setSelectedColor("red")}
					 className={"redLight light" + (selectedColor === "red"?" selected":"  ")}></div>
					 <div onClick={()=> setSelectedColor("yellow")}
					 className={"yellowLight light" + (selectedColor === "yellow"?" selected":"  ")}></div>
					 <div onClick={()=> setSelectedColor("green")}
					className={"greenLight light" + (selectedColor === "green"?" selected":"  ")}></div>
				    {showPurple && <div onClick={() => setSelectedColor("purple")}
					className={"purpleLight light" + (selectedColor === "purple"?"selected": " ")}></div>}
				<div>
					<button onClick={handleToggle} className="changeToPurple">click me!</button>
				</div>
			</div>	
			
	);
};

export default Home;
