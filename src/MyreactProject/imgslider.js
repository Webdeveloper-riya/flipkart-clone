import { useEffect, useState } from "react";
// import React from "react";
import flislider_img1 from './flislider_img1.png';
import flislider_img2 from './flislider_img2.png';
import flislider_img3 from './flislider_img3.png';
import flislider_img4 from './flislider_img4.png';
import flislider_img5 from './flislider_img5.png';


function Imgslider(){
    const [selectedImage, setSelectedImage]= useState(0);
    const [allImages, setAllImages]= useState([flislider_img1,flislider_img2,flislider_img3,flislider_img4,flislider_img5])


    // autometic img change
    useEffect(()=>{
        setInterval(()=>{
        setSelectedImage(selectedImage => selectedImage < 4 ? selectedImage + 1:0)
        },2000)
    }, [])
    return( 
        <div id="slidercontainer">
            <img width={1315} height={170} src={allImages[selectedImage]}/>
            
            <button
            onClick={
                ()=>{
                    if(selectedImage < allImages.length-1)
                    setSelectedImage(selectedImage+1)

               
                }
            }
            className="sliderbtn" >
                PREV
            </button>
            
            <button
            onClick={
                ()=>{
                    if(selectedImage > 0)
                    setSelectedImage(selectedImage+1)

               
                }
            }
           className="sliderbtn" >
                Next
            </button>
          
          

        </div>
    )
}
export default Imgslider;