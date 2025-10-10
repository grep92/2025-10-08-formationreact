import "./App.css";
import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import FlexVGrow1 from "../layout/FlexVGrow1/FlexVGrow1";
import Header from "../ui/Header/Header";
import Navbar from "../ui/Navbar/Navbar";
import MemeForm from "../functionnal/MemeForm/MemeFormStoreConnector";
import MemeSVGViewer from "../ui/MemeSVGViewer/MemeSVGViewerStoreConnector";
import Footer from "../ui/Footer/Footer";

// Lecture directe du fichier...
//import {memes as file_memes, images as file_images} from "../../../db/db.json";

const App = () => {
  
  return (
    <FlexHGrow3>
      <Header/>
      <Navbar/>
      <FlexVGrow1>
        <MemeSVGViewer basePath=""/>
        <MemeForm/>
      </FlexVGrow1>
      <Footer/>
    </FlexHGrow3>
  )
};

export default App;
