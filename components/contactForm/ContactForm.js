import { Container } from './contactFormStyles'

const ContactForm = () => {
	return (
		<Container>
			<h2>Contact Us</h2>
			<form>
				<label>
					Name:
					<input type="text" name="name" placeholder="Name..." />
				</label>
			</form>
		</Container>
	)
}

export default ContactForm
