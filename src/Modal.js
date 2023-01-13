function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = "[React] 자식이 부모의 state 가져다 쓰고 싶을 때는 props";
          props.글제목변경(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default Modal;
