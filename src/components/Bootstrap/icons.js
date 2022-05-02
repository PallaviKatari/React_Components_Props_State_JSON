//npm install react-icons --save

import React, { Component } from "react";

// gi is sort name of game icon.
import { GiPoliceBadge } from "react-icons/gi";
import { MdAndroid } from "react-icons/md";
import { GoBroadcast } from "react-icons/go";
import { FaAmazon } from "react-icons/fa";
// The GiPoliceBadge is icon name.
class Icons extends Component {
	render() {
		return (
			<div>
				<GiPoliceBadge size="50px" color="black"/>
				<MdAndroid size="50px" color="yellow" />
				<GoBroadcast size="50px" color="purple"/>
				<FaAmazon size="50px" color="black" />
			</div>
		);
	}
}
export default Icons;
