import "./App.css";
import { useState } from "react";
import "./Modal";
import Modal from "./Modal";

function App() {
  const [글제목, 글제목변경] = useState([
    "[React] 리액트 React 설치와 개발환경 셋팅",
    "[React] 중요한 데이터는 변수말고 state에 담는다.",
    "[React] state 변경하는 방법",
  ]);
  const [like, setLike] = useState([0, 0, 0]);
  const [input, setInput] = useState("");
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  return (
    <div>
      <div className="black-nav">
        <h4>React_Blog by 서은</h4>
      </div>
      <div className="myButton">
        <button
          className="sort"
          onClick={() => {
            const copy = [...글제목];
            글제목변경(copy.sort());
          }}
        >
          가나다순정렬
        </button>

        <button
          className="changeTopic"
          onClick={() => {
            const copy = [...글제목];
            copy[0] = "[React] 글변경 완료!";
            글제목변경(copy);
          }}
        >
          글변경
        </button>
      </div>
      <hr />
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(event) => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                  event.stopPropagation();
                }}
              >
                👍
              </span>
              {like[i]}
            </h4>
            <p>1월 10일 발행</p>
            <button
              className="del"
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <div className="input">
        <input
          onChange={(event) => {
            setInput(event.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy.unshift(input);
            글제목변경(copy);
          }}
        >
          확인
        </button>
      </div>

      {modal == true ? (
        <Modal 글제목={글제목} 글제목변경={글제목변경} title={title}></Modal>
      ) : null}
    </div>
  );
}

export default App;
