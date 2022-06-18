import React from "react";
import UserRow from "./user-row";
import "./main.style.css";
import styled from "styled-components";
import { Status } from "../../lib/enums";

const RowContainer = styled.div`
	display: flex;
	width: 70%;
	height: 100px;
	margin-bottom: 20px;
`;

function UserList() {
	return (
		<div className="container">
			<RowContainer>
				<UserRow status={Status.Active}></UserRow>
			</RowContainer>
			<RowContainer>
				<UserRow status={Status.Active}></UserRow>
			</RowContainer>
			<RowContainer>
				<UserRow status={Status.Passive}></UserRow>
			</RowContainer>
			<RowContainer>
				<UserRow status={Status.Active}></UserRow>
			</RowContainer>
			<RowContainer>
				<UserRow status={Status.Passive}></UserRow>
			</RowContainer>
			<RowContainer>
				<UserRow status={Status.Active}></UserRow>
			</RowContainer>
		</div>
	);
}

export default UserList;
