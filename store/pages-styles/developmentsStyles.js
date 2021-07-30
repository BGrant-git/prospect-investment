import styled from 'styled-components'

export const Container = styled.div`
	background: linear-gradient(rgba(25, 25, 112, 0.3), rgba(25, 25, 112, 0.1));
	margin-top: -80px;
	padding: 160px 0 40px;

	@media (max-width: 960px) {
		width: 100%;
		overflow-x: hidden;
		padding-top: 100px;
	}
`

export const StyledH1 = styled.h1`
	text-align: center;
	font-size: 50px;
	color: white;

	@media (max-width: 855px) {
		font-size: 40px;
	}
`

export const ProjectsWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
`
