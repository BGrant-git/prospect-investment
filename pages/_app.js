import { createGlobalStyle } from 'styled-components'

import Layout from '../components/layout/Layout'

import '@fontsource/sen'

const GlobalStyle = createGlobalStyle`
  body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Sen";
	}
	`

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<GlobalStyle />
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
