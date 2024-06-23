const Items = ({ idItem, nameItem, dateItem, deleteItem }) => {
    function deleteI() {
      deleteItem(function (prev) {
        return prev.filter(function (item) {
          return item.id !== idItem;
        }); //用filter來過濾出不等於idItem的item，回傳給setEvents
      });
    }
  
    return (
      <div className="item">
        <div>
          <p>事件: {nameItem}</p>
          <p>日期: {dateItem}</p>
        </div>
        <button className="remove" onClick={deleteI}>
          刪除
        </button>
      </div>
    );
  };
  
  export default Items;
  