// AddItem component
const AddItem = ({ addItemValue, handleUpdateInput, handleEnterEvent }) => {
  return (
    <div className="add-items">
      <input
        type="text"
        className="md-input-box"
        placeholder="Enter an item and press ENTER"
        onKeyPress={handleEnterEvent}
        onChange={handleUpdateInput}
        value={addItemValue}
      />
    </div>
  );
};

export default AddItem;
