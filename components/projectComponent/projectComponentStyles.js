import styled from 'styled-components'
import { LeftRule } from '../../store/context'

export const Container = styled.div`
	display: flex;
	margin: 20px auto;
	max-width: 1200px;
	max-height: 250px;
	cursor: pointer;
	transition: 0.1s ease-in-out;
	background-color: white;
	border-radius: 5px;

	&:hover {
		transform: scale(1.01);
		border-radius: 0px;
	}

	@media (max-width: 855px) {
		flex-direction: column;
		max-height: unset;

		&:hover {
			transform: none;
		}
	}
`

export const StyledH1 = styled.h1`
	font-size: 35px;
	margin-top: 10px;
`

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px 20px;
`

export const StyledUl = styled.ul`
	list-style-type: square;
	margin-left: -15px;
`

export const StyledP = styled.p`
	font-size: 20px;
`

export const StyledImg = styled.img`
	height: 250px;
	width: auto;
	border-radius: 0 5px 5px 0;

	@media (max-width: 855px) {
		border-radius: 0 0 5px 5px;
	}
`

export const LeftRuleStyled = styled(LeftRule)`
	margin-top: -12px;
`
