import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const Container = styled.div`
	border: 1px solid black;
	width: 1000px;
	height: 400px;
	margin: 20px auto;

	@media (max-width: 855px) {
		margin: 10px 0;
		width: 100%;
		height: auto;
	}
`

export const FormStyle = styled.form`
	display: flex;
`

export const FormUnitContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: flex-end;
`

export const TextFieldWrapper = styled(TextField)(() => ({
	'& fieldset': {
		borderRadius: '0px',
	},
}))

export const messageBoxStyle = {
	margin: '10px auto',
	fontSize: '18px',
	width: '90%',
}

export const buttonStyle = {
	margin: '10px auto',
	fontSize: '18px',
	width: '300px',
	height: '50px',
	borderRadius: '0',
}
