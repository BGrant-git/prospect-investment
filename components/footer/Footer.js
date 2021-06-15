import { useContext } from 'react'

import { StoreContext } from '../../context/context'
import { Container, LogoContainer } from './footerStyles'

const year = new Date().getFullYear()

const Footer = () => {
	const { links } = useContext(StoreContext)
	return (
		<Container>
			<div>
				<LogoContainer>
					<h1>
						PROSPECT{' '}
						<span style={{ color: 'var(--main-colour' }}>INVESTMENT</span>
					</h1>
				</LogoContainer>
			</div>
			<div>
				<p>
					© Prospect Investment {year} -{' '}
					{links.map((item, i) => (
						<a href={`/${item.toLowerCase()}`} key={i}>
							{item} {i < 3 ? `|` : null}{' '}
						</a>
					))}
				</p>
			</div>
		</Container>
	)
}

export default Footer
