import { LeftRule } from '../../store/context'
import {
	ButtonWrapper,
	Container,
	StyledImg,
	TextWrapper,
} from './developmentsComponentStyles'

const DevelopmentsComponent = ({
	title,
	area,
	status,
	description,
	gdv,
	img,
}) => {
	return (
		<Container>
			<TextWrapper>
				<h1>{title}</h1>

				<h3>{area}</h3>
				<LeftRule background="var(--main-dark)" />
				<h3>{status}</h3>
				<p>{description}</p>
				<ButtonWrapper>
					<p>GDV: {gdv}</p>
					<p>
						<a>More info ➤ </a>
					</p>
				</ButtonWrapper>
			</TextWrapper>
			<StyledImg src={img} alt="" />
		</Container>
	)
}

export default DevelopmentsComponent
