import { createGlobalStyle } from 'styled-components'
import { AnimatePresence } from 'framer-motion'

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
	`

function MyApp({ Component, pageProps }) {
	return (
		<StoreContextProvider>
			<Layout>
				<Component {...pageProps} />
				<GlobalStyle />
			</Layout>
		</StoreContextProvider>
	)
}

export default MyApp
