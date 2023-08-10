import fetch from 'node-fetch'

const vals = async (searchTerm)=>{
    try{
        const ACCESS_KEY='K1gmsNKR_78Y10d7mY9m0a-mr_AzT0WnAW1exuN97vU'
        const response= await fetch(`https://api.unsplash.com/search/photos?clientpage=1&query=${searchTerm}`)
        if (!response.ok){
            return new Error('bad headers')
        }
        const data=await response.json()
        const img_url=data.results[0].url.regular
        console.log(img_url)
        
    }
    catch(error){
        console.error(`this is the error ${error}`)
    }
}

export default vals