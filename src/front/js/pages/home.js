import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="col-4 text-center">
					<div className="container-fluid" id="register">
						<h1>New User?</h1>
						<a type="button" className="btn btn-outline-warning" href="/register">
							Register Here!
						</a>
					</div>
				</div>

				<div className="col-5 text-center">
					<div className="container-fluid" id="login">
						<h1>Returning User?</h1>
						<a type="button" className="btn btn-outline-warning" href="/login">
							Login Here!
						</a>
					</div>
				</div>
			</div>

			<div className="row text-center">
				{/* <div className="alert alert-info">{store.message || "Loading message from the backend..."}</div> */}
			</div>
		</div>
	);
};
