import styled from 'styled-components'

export const Container = styled.div`
	/* background: linear-gradient(rgba(25, 25, 112, 0.3), rgba(25, 25, 112, 0.1)),
		url(${(props) => props.background}); */
	background-position: top;
	background-repeat: no-repeat;
	background-size: 100% auto;
	margin-top: -80px;
	padding-top: 120px;
	min-height: 1000px;
`

export const TitleWrapper = styled.div`
	margin: 10xp auto;
	padding: 80px 0 20px;
	text-align: center;

	h1 {
		margin: 0 0 20px;
		font-size: 50px;
	}

	h2 {
		margin-top: -10px;
	}
`

export const DescWrapper = styled.div`
	text-align: center;
	margin-top: -20px;
`

export const IndexButtonWrapper = styled.div`
	margin: auto;
	text-align: center;
	background-color: rgba(228, 233, 237, 0.2);
	width: 600px;
	padding: 15px;
	border-radius: 5px;

	h2 {
		margin: 0;
	}

	a {
		padding: 0 15px;
		font-size: 25px;
	}

	@media (max-width: 690px) {
		display: flex;
		flex-direction: column;
		width: auto;

		a {
			margin-bottom: 5px;
		}
	}
`
