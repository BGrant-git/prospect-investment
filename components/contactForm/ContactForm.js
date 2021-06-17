import { Grid, TextField, Button } from '@material-ui/core'

import {
	Container,
	FormStyle,
	TextFieldWrapper,
	messageBoxStyle,
	FormUnitContainer,
	buttonStyle,
} from './contactFormStyles'

const ContactForm = () => {
	return (
		<Container>
			<h1>Contact Us</h1>
			<FormStyle>
				<Grid container>
					<Grid item xs={12} md={4}>
						<FormUnitContainer>
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
						</FormUnitContainer>
					</Grid>
					<Grid item xs={12} md={8}>
						<FormUnitContainer>
							<TextFieldWrapper
								label="Message"
								type="text"
								name="message"
								variant="outlined"
								multiline
								rows={8}
								style={messageBoxStyle}
							/>
							<Button variant="contained" type="submit" style={buttonStyle}>
								Submit
							</Button>
						</FormUnitContainer>
					</Grid>
				</Grid>
			</FormStyle>
		</Container>
	)
}

export default ContactForm
