import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const Container = styled.div`
	max-width: 1000px;
	margin: auto;
`

export const StyledForm = styled.form`
	display: flex;
	margin-left: 10px;
	margin-bottom: 40px;
	padding-top: 20px;

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
	margin: '10px auto',
	fontSize: '19px',
	width: '300px',
	height: '50px',
	backgroundColor: 'var(--main-colour)',
	color: 'white',
}
