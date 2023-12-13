import React, {useEffect, useRef, useState} from "react";

const DiaryEditor = ({onCreate})=>{

    useEffect(() => {
        console.log("DiaryEditor 렌더");
    });

    // react에서 dom 기능을 사용 할 수 있도록 하는 기능 `useRef`
    const authorInput = useRef();
    const contentInput = useRef();
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });



    // rerendering 유발시키고 싶을 때, useState
    // rerendering을 유발시키고 싶지 않을때 useRef or let
    // 일반 상수 대신 useRef를 쓰는 이유: 리렌더링이 될 때 마다 상수는 초기화됨
    const handleChangeState = (e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if (state.author.length < 1) {
            authorInput.current.focus();
            // focus
            return;
        }
        if (state.content.length < 5) {
            contentInput.current.focus();
            return;
        }
        console.log(state);
        onCreate(state.author, state.content, state.emotion);
        alert("저장 성공");
        setState({
            author: "",
            content: "",
            emotion: 1,
        })
    };

    return (
    <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            {/* 
            <input name="author" value={state.author} onChange={(e)=>{
                //console.log(e.target.name);
                setState({
                    ...state,
                    author : e.target.value,
                });
            }}/>
             */}
            <input ref={authorInput} name="author" value={state.author} onChange={handleChangeState}/>
        </div>
        <div>
            <textarea ref={contentInput} name="content" value={state.content} onChange={handleChangeState}/>
        </div>
        <div>
            <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
    </div>
    );
};

export default React.memo(DiaryEditor);