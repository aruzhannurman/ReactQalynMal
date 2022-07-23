import React from "react";
import { useState } from "react";
import "../qalynmal/qalynmalquiz.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { QalynmalAnswer } from "./qalynmalAnswer/qalynmalAnswer";
import { useContext } from "react";
import { SumContext } from "../Context";

export const QalynMalquiz = () => {
  const {sum, setSum} = useContext(SumContext);
  
  const [check, setCheck] = useState(false);

  const [data,setData] = useState([
    {
      id: "01",
      name: "Оңтүстіктің қызы",
      price: "100",
    },
    {
      id: "02",
      name: "Мектепті Алтын белгі/ Қызыл аттестатпен бітірді",
      price: "200",
    },
    {
      id: "03",
      name: "18-25 жас арасында",
      price: "300",
    },
    {
      id: "04",
      name: "Инста блогер/Тиктокер",
      price: "400",
    },
    {
      id: "05",
      name: "Бойы 165+ см",
      price: "500",
    },
    {
      id: "06",
      name: "Ішімдік ішпейді",
      price: "100",
    },
    {
      id: "07",
      name: "Кредиті бар",
      price: "200",
    },
    {
      id: "08",
      name: "Астана/Алматыда жеке пәтері бар",
      price: "300",
    },
    {
      id: "09",
      name: "Көлігі Camry 70/ BMW X8 / Mercedes-Maybach",
      price: "400",
    },
    {
      id: "10",
      name: "Мамандығы Медик/ Айтышница",
      price: "500",
    },
    {
      id: "11",
      name: "НУ/КБТУ/КИМЕП/СДУ бітірді",
      price: "100",
    },
    {
      id: "12",
      name: "Jquery-дi ТАМАША бiледi",
      price: "200",
    },
    {
      id: "13",
      name: "Толық, текті және әулиетті отбасынан",
      price: "300",
    },
    {
      id: "14",
      name: "Насыбай/IQOS шекпейді",
      price: "400",
    },
    {
      id: "15",
      name: "Құдаларға қоржынды(кит) жақсы таратады",
      price: "500",
    },
    {
      id: "16",
      name: "Руы Найман",
      price: "100",
    },
    {
      id: "17",
      name: '"SENIOR" Ішек қарын мастері',
      price: "200",
    },
    {
      id: "18",
      name: "Tinder/ OnlyFans аккаунты ЖОҚ",
      price: "300",
    },
    {
      id: "19",
      name: "90-60-90",
      price: "400",
    },
    {
      id: "20",
      name: "Instagram фильтрларынсыз сұлу",
      price: "500",
    },
    {
      id: "21",
      name: "Радикалды феминистка",
      price: "100",
    },
  ]);

  const [value, setValue] = useState({});

  const clickStyle = (id) => {
    
    setData((prevData)=>prevData.map((el)=>{
      if(el.id===id){
        return {...el,isActive:!el.isActive}
      }else return el;
    }))
    // setCheck(true)
  };


  const onCheckboxChange = (checkbox, x) => {
    if (checkbox.target.checked) {
      setSum(sum + parseInt(x.price));
    } else {
      setSum(sum - parseInt(x.price));
    }
  };

  return (
    <div>
      <div className="whole">
        <h1 className="logoTitle">Қалың Малыңыз</h1>

        <div className="items">
          {data.map((x) => (
            <div
              className={x.isActive ? "item-wrapper back" : "item-wrapper"}
              id={x.id}
              key={x.id}
            >
              <input
                id="checkbox"
                type="checkbox"
                onClick={() => clickStyle(x.id)}
                onChange={(event) => onCheckboxChange(event, x)}
              />
              <p className="description">{x.name}</p>
            </div>
          ))}

          {/* <Link
  to={{
    path:"/answerPage",
    state: sum // your data array of objects
  }}
/> */}
        </div>
        <div className="button-group">
          <div className="backpage">
            <Link to="/">
              <button className="bubbly-button">{sum}</button>
            </Link>
          </div>
          <div className="calc">
            <Link to="/answerPage">
              <button className="bubbly-button">Есепте </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
