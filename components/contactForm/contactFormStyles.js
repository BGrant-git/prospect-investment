import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const Container = styled.div`
	width: 1000px;
	height: 435px;
	margin: 20px auto;

	@media (max-width: 855px) {
		margin: 10px 0;
		width: 100%;
		height: 670px;
	}
`

export const FormStyle = styled.form`
	display: flex;
	margin-left: 10px;

	@media (max-width: 855px) {
		margin: 0;
	}
`

export const FormUnitContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const TextFieldWrapper = styled(TextField)(() => ({
	'& fieldset': {
		borderRadius: '0px',
	},
	'& .MuiOutlinedInput-notchedOutline': {
		borderColor: 'black',
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
	backgroundColor: 'var(--main-colour)',
	color: 'white',
}
