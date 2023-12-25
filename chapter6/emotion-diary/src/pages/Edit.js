import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length < 1) {
      return;
    }

    const targetDiary = diaryList.find(
      (it) => parseInt(it.id) === parseInt(id)
    );

    if (!targetDiary) {
      navigate("/", { replace: true });
      return;
    }

    setOriginData(targetDiary);
  }, [id, diaryList]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
