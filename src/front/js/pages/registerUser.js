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
				history.push("/dashboard");
			}
		},
		[store.authToken]
	);

	return (
		<div className="container">
			<div className="row d-flex justify-content-center mt-5">
				<div className="col-8 d-flex flex-column">
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

					<button
						className="btn btn-outline-warning mt-3 mx-auto"
						onClick={() => actions.registerUser(email, password)}>
						Register
					</button>
				</div>
			</div>
		</div>
	);
}
