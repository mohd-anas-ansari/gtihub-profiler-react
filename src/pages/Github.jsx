import React from "react";

import Followers from "../components/Followers";
import UserInfo from "../components/UserInfo";
import Repos from "../components/Repos";

class Github extends React.Component {
	state = {
		user: null,
		userName: null,
		repos: null,
		followers: null,
	};

	handleSubmit = (event) => {
		event.preventDefault();
		let userName = this.state.userName;
		const githubURl = `https://api.github.com/users/${userName}`;
		const followersUrl = `https://api.github.com/users/${userName}/followers`;
		const repoUrl = `https://api.github.com/users/${userName}/repos`;

		//Github fetch
		fetch(githubURl)
			.then((res) => res.json())
			.then((user) => {
				this.setState({ user });
			});

		//Followers fetch
		fetch(followersUrl)
			.then((res) => res.json())
			.then((followers) => {
				this.setState({ followers });
			});

		//Repo fetch
		fetch(repoUrl)
			.then((res) => res.json())
			.then((repos) => {
				this.setState({ repos });
			});
	};

	handleChange = (event) => {
		this.setState({ userName: event.target.value });
	};

  render() {
    
		return (
			<>
				<h1>Github Page</h1>
				<div className="components">
					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							className="input"
							onChange={this.handleChange}
							value={this.state.userName}
						/>
					</form>
					<hr />
					<UserInfo user={this.state.user} />
          <Repos repos={this.state.repos}/>
          <Followers followers={this.state.followers}/>
				</div>
			</>
		);
	}
}

export default Github;
