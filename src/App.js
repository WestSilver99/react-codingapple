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
  const [like, setLike] = useState(0);
  const onClick = () => {
    setLike(like + 1);
  };

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

      <div className="list">
        <h4>
          {글제목[0]}
          <span onClick={onClick}>👍</span> {like}
        </h4>
        <p>1월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>1월 10일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>1월 11일 발행</p>
      </div>
      <Modal></Modal>
    </div>
  );
}

export default App;
