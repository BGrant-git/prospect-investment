import { Grid, TextField, Button } from '@material-ui/core'
import { useContext } from 'react'

import { StoreContext, CenterRule } from '../../store/context'
import { Container, StyledForm, buttonStyle } from './contactFormStyles'

const ContactForm = () => {
	const { matchesMd } = useContext(StoreContext)

	const inputDetailsStyles = {
		width: matchesMd ? '94%' : '100%',
		margin: '10px 0',
	}

	const inputMessageStyles = {
		width: matchesMd ? '97%' : '100%',
		margin: '10px 0',
	}

	return (
		<Container>
			<h1>Send us a message</h1>
			<CenterRule style={{ background: 'black' }} />
			<StyledForm>
				<Grid container>
					<Grid item xs={12} md={6}>
						<TextField
							label="Name"
							type="text"
							name="name"
							variant="filled"
							style={inputDetailsStyles}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Email"
							type="email"
							name="email"
							variant="filled"
							style={inputDetailsStyles}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Subject"
							type="text"
							name="subject"
							variant="filled"
							style={inputMessageStyles}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Message"
							type="text"
							name="message"
							variant="filled"
							multiline
							rows={12}
							style={inputMessageStyles}
						/>
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
