import {
	Container,
	EventContainer,
	DateBox,
	TextBox,
} from './timelineComponentStyles'
const TimelineComponent = ({ date, text }) => {
	return (
		<Container>
			<DateBox>
				<h2>{date}</h2>
			</DateBox>
			<TextBox>
				<p>{text}</p>
			</TextBox>
		</Container>
	)
}

export default TimelineComponent
