import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = ()=>{
    //     setCategories( [...categories, 'HunterXHunter']);

    // }
    //REFERENCIA AL setCategories para enviarlo a AddCategory
    return(
        <>
        <h2>Gif expert App</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        
        <ol>
            {
                categories.map( category => (
                     <GifGrid 
                     key={category}
                     category={category}/>
                ))
            }
        </ol>
        </>
        

    );
}  

export default GifExpertApp;