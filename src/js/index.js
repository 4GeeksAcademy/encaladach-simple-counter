//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";
//include your index.scss file into the bundle
import "../styles/index.scss";
//import your own components
//import { Home } from "./component/home.js";
function SimpleCounter(props) {
	return (
		<div className="BigCounter">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 10000);
	const three = Math.floor(counter / 1000);
	const two = Math.floor(counter / 100);
	const one = Math.floor(counter / 10);
	//console.log(one, two, three, four);
	counter++;
	//render your react application
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	); //diq 02.04.2020
}, 300);
