
async function showProject (){
    const data= await(await fetch("./data/data.json")).json()
    const dataProjects = data.projects    
const newSlides= dataProjects
    .forEach(data=>document
    .getElementById(`slide-${data.id}`)
    .innerHTML=`<img class="slideImage" src="${data.image}" alt="${data.name}"><p class="author-info"><a href="${data.url}" target="_blanck">${data.name}</a></p>`)
 
return (newSlides)
    
    
    
    // console.log(finalAd)
    // dataProjects.map( data =>(        
    //           document.querySelector(".slides").innerHTML = `
    //           <img src="${data.image}" alt="">
    //                           <p class="author-info">
    //                                             <a href="${data.url}">Projeto ${data.name}</a>                
    //                                             </p>              `))
}

showProject()