import { Link } from "react-router-dom";

// Title component
export default () => {
  return (
    <div className="title">
      <span className="caption">
        <Link to="/">Calculator</Link>
        <Link to="clock">Clock</Link>
        <Link to="todolist">ToDoList</Link>
      </span>
    </div>
  );
};
