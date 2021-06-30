import { Container, DateWrapper, TextWrapper } from './timelineComponentStyles'

const TimelineComponent = ({ date, text }) => {
	return (
		<Container>
			<DateWrapper>
				<h2>{date}</h2>
			</DateWrapper>
			<TextWrapper>
				<p>{text}</p>
			</TextWrapper>
		</Container>
	)
}

export default TimelineComponent
