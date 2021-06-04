import Navbar from '../navbar/Navbar'

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<div>Footer</div>
		</>
	)
}

export default Layout
