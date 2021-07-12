import styled from 'styled-components'

export const Container = styled.div`
	max-width: 1000px;
	margin: auto;
	border: 2px solid var(--main-colour-faded);
	border-radius: 5px;

	@media (max-width: 855px) {
		border-radius: 0;
	}
`

export const StyledForm = styled.form`
	display: flex;
	margin-bottom: 40px;
	padding-top: 10px;

	@media (max-width: 960px) {
		margin: 0;
	}
`

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const messageBoxStyle = {
	margin: '9px auto',
	fontSize: '18px',
	width: '90%',
}

export const buttonStyle = {
	margin: '25px auto 0',
	fontSize: '19px',
	width: '300px',
	height: '50px',
	backgroundColor: 'var(--main-colour)',
	color: 'white',
}
