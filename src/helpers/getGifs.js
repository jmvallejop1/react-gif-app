export const getGifts = async(category) => {
    const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=kwLvyqwDWGi53wyPkA1lzyPVdN6kNLtU&q=${category}&limit=10`

    const resp = await fetch(baseUrl)
    const {data} = await resp.json()
    

    const gifs = data.map( img => ({
        id: img.id,
        title : img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
  }