import "./App.css";
import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import FlexVGrow1 from "../layout/FlexVGrow1/FlexVGrow1";
import Header from "../ui/Header/Header";
import Navbar from "../ui/Navbar/Navbar";
import MemeForm from "../functionnal/MemeForm/MemeForm";
import {emptyMeme, MemeSVGViewer, type ImageInterface, type MemeInterface} from "orsys-tjs-meme";
import Footer from "../ui/Footer/Footer";
import { useEffect, useState } from "react";
import { REST_ADDR, REST_RESOURCES } from "../../config/config";

// Lecture directe du fichier...
//import {memes as file_memes, images as file_images} from "../../../db/db.json";

const App = () => {

  const [currentMeme, setCurrentMeme] = useState<MemeInterface>(emptyMeme);
  const [images, setImages] = useState<Array<ImageInterface>>([]);
 
  useEffect( () => {
    fetch(`${REST_ADDR}${REST_RESOURCES.images}`).then(r=>r.json()).then(imgs=>setImages(imgs));
  }, []);

  return (
    <FlexHGrow3>
      <div>{JSON.stringify(currentMeme)}</div>
      <Header/>
      <Navbar/>
      <FlexVGrow1>
        <MemeSVGViewer basePath="" image={images.find((img) => img.id === currentMeme.imageId)} meme={currentMeme}/>
        <MemeForm 
          meme={currentMeme}
          images={images}
          onMemeChange={ (newMeme:MemeInterface) => {
            setCurrentMeme(newMeme);
            }
          }
        />
      </FlexVGrow1>
      <Footer/>
    </FlexHGrow3>
  )
};

export default App;
