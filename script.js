async function showData(){
    const data = await(await fetch("./data/db.json")).json()
            
        const dataFormations = data.formation    
        dataFormations.map(data=>(document.getElementById("academicFormation")
        .innerHTML+=`
        <div class="box">
            <div class="boxLeft">
                <div id="imgForm${data.id}" class="imgBox"></div>
                <h3>${data.initiation_year}-${data.conclusion_year}</h3>
                <h4>${data.name}</h4>
            </div>
            <div class="boxRight">
                <p>${data.description}</p>
            </div>
        </div>
        `))

        const dataProjects = data.projects    
        dataProjects.forEach(data=>document
        .getElementById(`slide-${data.id}`)
        .innerHTML=`
        <img class="slideImage" src="${data.image}" alt="${data.name}">
        <p class="author-info">
            <a href="${data.url}" target="_blanck">${data.name}</a>
        </p>
        `)    
}
showData()







