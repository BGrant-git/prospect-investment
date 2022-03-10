import { useEffect } from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'
import { createGlobalStyle } from 'styled-components'

import StoreContextProvider from '../store/context'
import Layout from '../components/layout/Layout'

import '@fontsource/sen'

const GlobalStyle = createGlobalStyle`
	html {
		--main-colour: #0076D6;		
		--main-colour-light: #6FCCF4;
		--main-colour-dark: #004E86;
		--main-colour-faded: #C9E8FB;
		--main-grey: #E3E3E3;
		--main-dark: #333333;
	}
  body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Sen";
		background-color: #ffffff;
		color: var(--main-dark);
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	.bioPics {
		border-radius: 3px;
	}

`

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) jssStyles.parentElement.removeChild(jssStyles)
	}, [])

	return (
		<StoreContextProvider>
			<SimpleReactLightbox>
				<Layout>
					<Component {...pageProps} />
					<GlobalStyle />
				</Layout>
			</SimpleReactLightbox>
		</StoreContextProvider>
	)
}

export default MyApp
