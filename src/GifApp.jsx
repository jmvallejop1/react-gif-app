import { useState } from "react";
import { AddCategory, Grid} from "./components";

export const GifApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCatgory) =>{
    // console.log(newCatgory)
    // console.log
    if(categories.includes(newCatgory)) return;
    setCategories(
        [ newCatgory,...categories]
    )
  }
  return (
    <>
        {/* titulo */}
        <h1>Gif Expert app</h1>

        {/* input */}
        <AddCategory 
          onNewCategory = {onAddCategory}
        />


        { categories.map( category =>
            {
            return <Grid key={category} category={category}/>
            }) 
        }


    </>
  )
}
