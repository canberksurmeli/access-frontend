import React from "react";
import "./user.style.css";
import styled from "styled-components";
import Profile from "./row-items/profile";
import { Status as StatusEnum } from "../../lib/enums";

const Created = styled.div`
	display: flex;
	font-size: 0.875em;
`;


function UserRow(params: { status: StatusEnum }) {
  const Status = styled.div`
      padding: 0.2em 0.6em 0.3em;
      font-size: 75%;
      font-weight: 700;
      line-height: 1;
      color: #fff;
      border-radius: 0.25em;
      background-color: #5cb85c;
  `;
	return (
		<div className="user-container">
			<Profile name="Can Berk" title="Laborer"></Profile>
			<Created>17/06/2022</Created>
			<Status
				style={{
					backgroundColor:
						params.status === StatusEnum.Active
							? "#5cb85c"
							: "#d9534f",
				}}
			>
				{params.status === StatusEnum.Active ? "Active" : "Passive"}
			</Status>
		</div>
	);
}

export default UserRow;
