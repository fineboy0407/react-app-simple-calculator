// router dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Title from "./components/Title";
import Calculator from "./components/calculator/Calculator";

// css
import "./css/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        {/* including the Title and other components */}
        <Title />
        <Routes>
          <Route path="/" element={<Calculator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
