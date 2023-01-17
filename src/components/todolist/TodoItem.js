// TodoItem component
const TodoItem = ({ id, item, handleDelete }) => {
  // return a card like div with the item and a X button to delete it
  return (
    <div className="card" id={id}>
      <div className="heading">
        {item}
        <i
          className="fa fa-times close-icon"
          onClick={() => {
            handleDelete(id);
          }}
        />
      </div>
    </div>
  );
};

export default TodoItem;
