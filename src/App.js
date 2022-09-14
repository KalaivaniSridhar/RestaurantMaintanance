import { useState } from "react";
import Header from "./components/Header";
import MenuList from "./components/MenuList";
import {categories_Data}  from "../src/components/Data"
import Categories  from "./components/Categories";
import './App.css'

function App() {
  const [menuList, setmenuList] = useState(categories_Data);
  return (
    <div className="bs">
      <Header/>
      <Categories/>
      <MenuList categories_Data={menuList} />
    </div>
  );
}

export default App;
