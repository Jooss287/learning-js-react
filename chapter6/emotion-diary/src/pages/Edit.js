import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParms, setSearchParams] = useSearchParams();

  const id = searchParms.get("id");
  const mode = searchParms.get("mode");
  console.log(id);
  console.log(mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다. </p>
      {/* <button onClick={() => setSearchParams({ who: "jooss" })}>
        QS 바꾸기
      </button> */}

      <button onClick={() => navigate("/home")}>Home으로 가기</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default Edit;
