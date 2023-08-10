

let create=document.querySelector("img")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const vals = async (searchTerm)=>{
    try{
        const ACCESS_KEY='K1gmsNKR_78Y10d7mY9m0a-mr_AzT0WnAW1exuN97vU'
        const response= await fetch(`https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&page=1&query=${searchTerm}`)
        if (!response.ok){
            return new Error('bad headers')
        }
        const data=await response.json()
        const l=data.results.length
        let val= getRandomInt(0,l-1)
        // let img_src;
        // const looper= async ()=>{        
        //     for (let i=0;i<l;i++){
        //         img_src=data.results[i].urls.regular
        //         await new Promise((resolve)=>setTimeout(resolve,5000))

        //         //dom manipulation here. in react, this would be quite different, possibly using hooks
        //         create.src=img_src
        //     }
        // }
        // for (let i=0;i<5;i++)
        // {
        //     looper()
        // }
        
        let img_urls  
        img_urls=data.results[val].urls
        console.log(img_urls)
        create.src=img_urls.full
    }
    catch(error){
        console.error(`this is the error ${error}`)
    }
}

const initSearch=()=>{
    const el= document.querySelector('#mainForm')
    const el2=document.querySelector('#mainInput')
    const el3=document.querySelector('#cityReason p')
    el3.textContent=`why ${el2.value}`
    console.log(el2.value)
    vals(el2.value)
    el.addEventListener('submit',(e)=>{
        e.preventDefault()
        const el2=document.querySelector('#mainInput')
        const el3=document.querySelector('#cityReason p')
        el3.textContent=`why ${el2.value}`
        console.log(el2.value)
        vals(el2.value)        
    })
    el.addEventListener('keypress',(e)=>{
        if (e.keyCode===13 || e.which===13){
        e.preventDefault()
        const el2=document.querySelector('#mainInput')
        const el3=document.querySelector('#cityReason p')
        el3.textContent=`why ${el2.value}`
        console.log(el2.value)
        vals(el2.value)
        }        
    }
    )

    

    
}

initSearch()