import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px auto;
	max-width: 1200px;
`

export const TitleWrapper = styled.div`
	margin: 0 auto -30px;
	font-size: 22px;
`

export const ProjectsWrapper = styled.div`
	margin: auto;
	padding: 30px;

	@media (max-width: 855px) {
		padding: 0;
	}
`

export const Rule = styled.div`
	height: 3px;
	width: 600px;
	background-color: var(--main-colour);
	margin: auto;

	@media (max-width: 855px) {
		width: 200px;
		margin-bottom: 10px;
	}
`
