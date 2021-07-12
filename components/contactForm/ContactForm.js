import { Grid, TextField, Button } from '@material-ui/core'

import {
	Container,
	StyledForm,
	messageBoxStyle,
	FormWrapper,
	buttonStyle,
} from './contactFormStyles'

const ContactForm = () => {
	return (
		<Container>
			<h1>Send us a message</h1>
			<StyledForm>
				<Grid container>
					<Grid item xs={12} md={4}>
						<FormWrapper>
							<TextField
								label="Name"
								type="text"
								name="name"
								variant="filled"
								style={messageBoxStyle}
							/>
							<TextField
								label="Email"
								type="email"
								name="email"
								variant="filled"
								style={messageBoxStyle}
							/>
							<TextField
								label="Subject"
								type="text"
								name="subject"
								variant="filled"
								style={messageBoxStyle}
							/>
						</FormWrapper>
					</Grid>
					<Grid item xs={12} md={8}>
						<FormWrapper>
							<TextField
								label="Message"
								type="text"
								name="message"
								variant="filled"
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
