import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/forms.css";

export const LoginUser = () => {
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
			{store.authError && (
				<div className="alert alert-danger" role="alert">
					Authentication Error
				</div>
			)}
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
							placeholder="Enter your password here"
						/>
					</div>

					<button
						className="btn btn-outline-warning mt-3 mx-auto"
						onClick={() => actions.loginUser(email, password)}>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};
