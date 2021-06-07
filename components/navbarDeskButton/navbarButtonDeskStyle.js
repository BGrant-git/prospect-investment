import styled from 'styled-components'

export const ButtonContainer = styled.div`
	margin: 0 10px;
	text-align: center;
`

export const ActiveButtonContainer = styled.div``

export const LinkStyle = styled.a`
	text-decoration: none;
	cursor: pointer;
	font-size: 22px;

	color: black;
	text-transform: uppercase;
	text-decoration: none;
	letter-spacing: 0.15em;

	display: inline-block;
	padding: 10px 10px;
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
