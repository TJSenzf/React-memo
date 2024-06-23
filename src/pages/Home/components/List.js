import { logDOM } from "@testing-library/react";
import Item from "./Item";

const List = ({ listEvent, deleteEvent }) => {
  //這裡的listEvent是從Home.js傳過來的
  console.log("listEvent", listEvent);
  return (
    <div className="list">
      {listEvent.map((newitem) => {
        const { name, date, id } = newitem; //將item裡面的name和date拿出來(由子元件Item.js傳過來的)
        return (
          <Item
            key={id}
            idItem={id}
            nameItem={name}
            dateItem={date}
            deleteItem={deleteEvent}
          />
        ); //將name和date傳給Item.js

        // = listEvent.map(function(newitem){
        //     const name = newitem.name;
        //     const date = newitem.date;
        //     const id = newitem.id;
        //     return name, date, id;
        // });
      })}
      {/* 用map來將listEvent裡面的每個元素都傳給Items 要給items 給key #不可用index 因為index會隨排序變動更新 */}
    </div>
  );
};

export default List;

//在jsx寫javascript要用{}包起來
