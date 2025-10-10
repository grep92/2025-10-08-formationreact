import MemeSvgViewer from "../components/ui/MemeSVGViewer/MemeSVGViewer.stored";
import MemeForm from "../components/functionnal/MemeForm/MemeForm.stored";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/current";
import type { RootState } from "../store/store";
import { emptyMeme } from "orsys-tjs-meme";

const Editor = () => {
  const params = useParams();
  const d = useDispatch();
  const memes = useSelector((s: RootState) => s.ressources.memes);
  const navigate = useNavigate();
  useEffect(() => {
    const found = memes.find((m) => m.id === Number(params.id));
    if (found) d(update(found));
    else {
      d(update(emptyMeme));
      navigate("/editor");
    }
  }, [params, d, memes, navigate]);
  return (
    <>
      <MemeSvgViewer basePath="" />
      <MemeForm />
    </>
  );
};

export default Editor;
