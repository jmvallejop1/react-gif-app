import { useFetchGifs } from "../hooks/useFetchGifs"
import { Gif } from "./Gif"

export const Grid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category) 

  console.log(isLoading)

  

  return (
    <>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      
      <div className="card-grid">
        {
          images.map( (image) => {
              return <Gif 
                        key={image.id}  
                        {...image} 
                      />
            
            })
        }   
      </div>
        
    </>
  )
}
