// import probe from "probe-image-size";

const ScaleImage = ( w1:number, h1:number,  scale?:number, h2?:number, w2?:number ) => { // This code looks pretty bad doesnt it 
  if (!w2 && !h2 && !scale) {
    return { width: w1, height: h1 }; // no change
  } else if (!w2 && !h2 && scale) {
    return { width: w1 * scale, height: h1 * scale }; // scale only
  }
  else if (w2 || h2) { // scale based on dimensions
    let ratio = h1 / w1;
    if (w2) { // scale height from width
      let result = { width: w2, height: w2 * ratio };
      if (scale) { // apply scale factor if provided
        return { width: result.width * scale, height: h1 * scale };
      }
    }
    else if (h2) { // scale width from height
      let result = { width: h2 * ratio, height: h2 };
      if (scale) { // apply scale factor if provided
        return { width: result.width * scale, height: h1 * scale };
      }
    }
  }
}

const SimpleScale = (width:number, height:number, scale:number) => { 
  return { width: width * scale, height: height * scale };
}

// const AutoImageScale = async (image:string, scale?:number, w2?:number, h2?:number) => {
//   let result = await probe(image);
//   let finalDimensions = ScaleImage(result.width, result.height, scale, w2, h2);
//   return {width: finalDimensions?.width, height: finalDimensions?.height};
// }


export { ScaleImage, SimpleScale };