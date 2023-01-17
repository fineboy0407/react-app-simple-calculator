import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

// import the static JSON file
import allItems from "./ItemList.json";

// components
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";

// css
import "../../css/todolist.css";

const ItemList = () => {
  // declaring the state
  const todoItemList = {
    items: allItems,
    value: "",
  };

  // setting the initial list of TODO items
  const [todoItems, setTodoItems] = useState(todoItemList);
  const lastElement = useRef(null);

  useEffect(() => {
    scrollToBottom();
  });

  // always scroll to the bottom
  const scrollToBottom = () => {
    // lastElement.current.scrollTop = lastElement.current.scrollHeight - lastElement.current.clientHeight
    lastElement.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  // find and delete the item whose X button is clicked
  const handleDelete = (id) => {
    setTodoItems({
      ...todoItems,
      items: todoItems.items.filter((item) => item.id != id),
    });
  };

  // insert an item into the list and reset the input field
  const handleInsert = () => {
    setTodoItems({
      items: [...todoItems.items, { id: uuidv4(), item: todoItems.value }],
      value: "",
    });
  };

  // update the value of the state when input box changes
  const handleUpdateInput = (e) => {
    setTodoItems({ ...todoItems, value: e.target.value });
  };

  // capture the ENTER key
  const handleEnterEvent = (e) => {
    if ((e.keyCode == 13 || e.which == 13) && todoItems.value != "") {
      handleInsert();
    }
  };

  return (
    <div className="show-add-items">
      <AddItem
        addItemValue={todoItems.value}
        handleUpdateInput={handleUpdateInput}
        handleEnterEvent={handleEnterEvent}
      />
      <div className="list-items">
        {todoItems.items.map((ele) => {
          return <TodoItem key={ele.id} {...ele} handleDelete={handleDelete} />;
        })}
        <div ref={lastElement}></div>
      </div>
    </div>
  );
};

export default ItemList;
