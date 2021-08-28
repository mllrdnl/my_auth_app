import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export function RegisterUser() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const { store, actions } = React.useContext(Context);
	const history = useHistory();

	React.useEffect(
		() => {
			if (store.authToken) {
				history.push("/loginUser");
			}
		},
		[store.authToken]
	);

	return (
		<div className="container">
			<div className="form-floating mb-3">
				<label>Email address</label>
				<input
					value={email}
					onChange={ev => setEmail(ev.target.value)}
					type="email"
					className="form-control"
					placeholder="name@example.com"
				/>
			</div>
			<div className="form-floating">
				<label>Password</label>
				<input
					value={password}
					onChange={ev => setPassword(ev.target.value)}
					type="password"
					className="form-control"
					placeholder="Password"
				/>
			</div>

			<button className="btn btn-primary mt-3" onClick={() => actions.registerUser(email, password)}>
				Register
			</button>
		</div>
	);
}
