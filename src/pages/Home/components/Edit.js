import { useState } from "react";
import { v4 } from "uuid"; //用uuid來產生id

const Edit = ({ addEvent }) => {
  //用add來接收父元件傳遞過來的setEvents函數，要記得用{}包住，因為是物件

  const [name, setName] = useState(""); //useState('')是todos的初始值
  function nameChange(e) {
    setName(e.target.value);
  } //用setName來設定name的值

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }
  function add() {
    addEvent(function (prev) {
      return [
        
        {
          id: v4(), //用uuid來產生id，可結合後端資料庫的id
          name,
          date,
        },
        ...prev //將prev裡面的元素展開
      ];
      // 先用prev來接收目前的events，再用[...prev, {name, date}]來新增一個新的events，這樣就不會直接改變原本的events，將name和date新增到events裡面，回傳給setEvents // id:v4() 用uuid來產生id,
    }); //呼叫父元件傳遞過來的setEvents函數
  }
  return (
    <div>
      <h1>代辦事項</h1>
      <p>事件</p>
      <input type="text" value={name} onChange={nameChange} />{" "}
      {/* 用value={name}來顯示name的值，onchange 來表示當input的值改變時要執行的函數 */}
      <p>截止日</p>
      <input type="date" value={date} onChange={dateChange} />
      <button onClick={add} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
