import styled from 'styled-components'

export const ButtonWrapper = styled.div`
	margin: 0 10px;
`

export const LinkStyle = styled.a`
	cursor: pointer;
	font-size: 22px;
	color: black;
	text-transform: uppercase;
	letter-spacing: 0.15em;
	display: inline-block;
	position: relative;

	&:after {
		background: none repeat scroll 0 0 transparent;
		bottom: 0;
		content: '';
		display: block;
		height: 2px;
		left: 50%;
		position: absolute;
		background: black;
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}
	&:hover:after {
		width: 100%;
		left: 0;
	}
`

export const NavbarDropdownContent = styled.div`
	display: none;
	position: absolute;
	margin: 0 20px 0 0;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
	z-index: 1;
`

export const NavbarDropdown = styled.div`
	position: relative;
	display: inline-block;

	&:hover ${NavbarDropdownContent} {
		display: block;
		margin-left: -11px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
`

export const DropdownLinkWrapper = styled.div`
	background-color: white;
	width: 100%;
	height: 100%;
	text-align: center;
	font-size: 20px;
	padding: 10px 5px;
	transition: 0.1s ease-in-out;

	&:hover {
		background-color: #f0f0f0;
	}
`
