import { createGlobalStyle } from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import StoreContextProvider from '../context/context'
import Layout from '../components/layout/Layout'

import '@fontsource/sen'

const GlobalStyle = createGlobalStyle`
	html {
		--main-colour: #009eef;
		--faded-main-colour: #e0f3fc;
	}
  body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Sen";
		background-color: #ffffff;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	div {
		border-radius: 5px;
	}
	button {
		border-radius: 5px;
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
