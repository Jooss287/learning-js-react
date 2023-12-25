import "./App.css";
import React, { useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContent = React.createContext();
export const DiaryDispatchContent = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의 일기 1번",
    date: 1703332985815,
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의 일기 2번",
    date: 1703332985816,
  },
  {
    id: 3,
    emotion: 3,
    content: "오늘의 일기 3번",
    date: 1703332985817,
  },
  {
    id: 4,
    emotion: 4,
    content: "오늘의 일기 4번",
    date: 1703332985818,
  },
  {
    id: 5,
    emotion: 5,
    content: "오늘의 일기 5번",
    date: 1703332985819,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  console.log(new Date().getTime());

  const dataId = useRef(0);
  // create
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };
  // remove
  const onRemove = (targetId) => {
    dispatch({ type: "remove", targetId });
  };
  // edit
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: { id: targetId, date: new Date(date).getTime() },
      content,
      emotion,
    });
  };

  return (
    <DiaryStateContent.Provider value={data}>
      <DiaryDispatchContent.Provider value={(onCreate, onEdit, onRemove)}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContent.Provider>
    </DiaryStateContent.Provider>
  );
}

export default App;
