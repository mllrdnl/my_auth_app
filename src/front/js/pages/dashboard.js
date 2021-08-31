import React from "react";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css";

export function Dashboard() {
	const { store, actions } = React.useContext(Context);

	return (
		<div className="container-fluid">
			<div className="row w-100 mt-2 mx-0 p-4 d-flex justify-content-between" id="header">
				<h1>Dashboard</h1>
				<button className="btn btn-outline-warning" onClick={() => actions.logout()}>
					Log out
				</button>
			</div>
			<div className="row" />
		</div>
	);
}
