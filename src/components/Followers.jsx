import React from "react";
import Follower from "./Follower";

class Followers extends React.Component {
	state = {};
	render() {
		return (
			<>
				<h2>Followers</h2>
				{this.props.followers ? (
					<>
						{this.props.followers.map((follower) => (
							<Follower {...follower} />
						))}
					</>
				) : (
					<h6>Loading...</h6>
				)}
			</>
		);
	}
}

export default Followers;
