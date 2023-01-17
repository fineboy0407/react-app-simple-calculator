// npm dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// components
import Title from "./components/layout/Title";
import Calculator from "./components/calculator/Calculator";
const Clock = lazy(() => import("./components/clock/Clock"));
const ToDoList = lazy(() => import("./components/todolist/ToDoList"));

// css
import "./css/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        {/* including the Title and other components */}
        <Title />
        <Suspense>
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="clock" element={<Clock />} />
            <Route path="todolist" element={<ToDoList />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
