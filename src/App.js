import { BrowserRouter } from "react-router-dom";
// components
import Title from "./components/Title";
import Calculator from "./components/Calculator";

// css
import "./css/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        {/* including the Title and other components */}
        <Title />
        <Calculator />
      </div>
    </BrowserRouter>
  );
};

export default App;
