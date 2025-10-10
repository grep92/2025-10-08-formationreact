import React from 'react';
import { MemeSVGViewer as Msvg } from 'orsys-tjs-meme';
import { useSelector } from 'react-redux';

const MemeSvgViewer = (props) => {
  const current = useSelector((storeState)=>{return storeState.current.meme});
  const images= useSelector(storeState => {return storeState.resources.images});
  return (
    <Msvg {...props} image={images.find((img) => img.id === current.imageId)} meme={current}></Msvg>
  )
};
export default MemeSvgViewer;
