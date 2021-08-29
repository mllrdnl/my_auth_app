import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row text-center mt-5">
				<div className="col">
					<h1>New User?</h1>
					<a type="button" className="btn btn-primary" href="/register">
						Register Here!
					</a>
				</div>
			</div>

			<div className="row text-center">
				<div className="col">
					<h1>Returning User</h1>
					<a type="button" className="btn btn-outline-primary" href="/login">
						Login Here!
					</a>
				</div>
				{/* <div className="alert alert-info">{store.message || "Loading message from the backend..."}</div> */}
			</div>
		</div>
	);
};
