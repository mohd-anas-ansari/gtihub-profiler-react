import React from "react";
import Repo from "./Repo";

class Repos extends React.Component {
	state = {};
	render() {
		return (
			<>
				<h2>Repos</h2>
				{this.props.repos ? (
					<>
						{this.props.repos.map((repo) => (
							<Repo {...repo} />
						))}
					</>
				) : (
					<h6>Loading...</h6>
				)}
			</>
		);
	}
}

export default Repos;
