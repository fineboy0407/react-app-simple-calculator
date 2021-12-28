// components
import Title from "./components/Title"
import Calculator from "./components/Calculator"

// css
import "./css/style.css"

const App = () => {
	return (
		<div className="container">
			{/* including the Title and other components */}
			<Title />
			<Calculator />
		</div>
	)
}

export default App
