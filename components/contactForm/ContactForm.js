import { Grid, Button } from '@material-ui/core'

import {
	Container,
	StyledForm,
	TextFieldWrapper,
	messageBoxStyle,
	FormWrapper,
	buttonStyle,
	StyledMuiButton,
} from './contactFormStyles'

const ContactForm = () => {
	return (
		<Container>
			<h2>Send us a message</h2>
			<StyledForm>
				<Grid container>
					<Grid item xs={12} md={4}>
						<FormWrapper>
							<TextFieldWrapper
								label="Name"
								type="text"
								name="name"
								variant="outlined"
								style={messageBoxStyle}
							/>
							<TextFieldWrapper
								label="Email"
								type="email"
								name="email"
								variant="outlined"
								style={messageBoxStyle}
							/>
							<TextFieldWrapper
								label="Subject"
								type="text"
								name="subject"
								variant="outlined"
								style={messageBoxStyle}
							/>
						</FormWrapper>
					</Grid>
					<Grid item xs={12} md={8}>
						<FormWrapper>
							<TextFieldWrapper
								label="Message"
								type="text"
								name="message"
								variant="outlined"
								multiline
								rows={8}
								style={messageBoxStyle}
							/>
						</FormWrapper>
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained" type="submit" style={buttonStyle}>
							Submit
						</Button>
					</Grid>
				</Grid>
			</StyledForm>
		</Container>
	)
}

export default ContactForm
