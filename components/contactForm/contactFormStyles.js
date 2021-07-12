import styled from 'styled-components'

export const Container = styled.div`
	margin: auto;

	@media (max-width: 855px) {
		border-radius: 0;
	}
`

export const StyledForm = styled.form`
	display: flex;
	margin-bottom: 20px;
	padding: 10px 10%;
	font-size: 18px;
	max-width: 1200px;

	@media (max-width: 960px) {
		margin: 0;
	}
`

export const buttonStyle = {
	margin: '10px auto 0',
	fontSize: '19px',
	width: '300px',
	height: '50px',
	backgroundColor: 'var(--main-colour)',
	color: 'white',
}
