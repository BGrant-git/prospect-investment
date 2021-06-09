import { createGlobalStyle } from 'styled-components'

import StoreContextProvider from '../context/context'
import Layout from '../components/layout/Layout'

import '@fontsource/sen'

const GlobalStyle = createGlobalStyle`
	html {
		--main-colour: #009eef;
	}
  body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Sen";
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
				<GlobalStyle />
				<Component {...pageProps} />
			</Layout>
		</StoreContextProvider>
	)
}

export default MyApp
