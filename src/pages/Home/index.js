// Home root
// import components
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
import { useState, useEffect } from "react"; //用useState來設定state(宣告變數) 並且可以在function component裡面使用

const Home = () => {
  const [events, setEvents] = useState([]); //todos是變數名稱 setTodos是設定todos的函數名稱，useState(a)是todos的初始值

    useEffect(() => {
        window.alert('新增成功');
    } , [events]);
    //當events改變時，會觸發useEffect，並且會跳出視窗

  return (
    <div className="app">
      <Edit addEvent={setEvents} />
      <List listEvent={events} deleteEvent={setEvents} />
      {/* 用來傳遞state給子元件 */}
    </div>
  );
};

export default Home;
