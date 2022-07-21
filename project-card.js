
const  project = 
  [  
    {
        Name:"Profesional Art Printing Data",
        Description:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        Featured_image:"/img/card-bg1.png",
        Technologies: ["HTML",'css','ruby'],
        livedemo: 'link to live version',
        github: 'link to source',
    },
    {
        Name:"Profesional Art Printing Data",
        Description:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        Featured_image:"/img/card-bg1.png",
        Technologies: ["HTML",'css','ruby'],
        livedemo: 'link to live version',
        github: 'link to source',
    },
    {
        Name:"Profesional Art Printing Data",
        Description:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        Featured_image:"/img/card-bg1.png",
        Technologies: ["HTML",'css','ruby'],
        livedemo: 'link to live version',
        github: 'link to source',
    },
    {
        Name:"Profesional Art Printing Data",
        Description:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        Featured_image:"/img/card-bg1.png",
        Technologies: ["HTML",'css','ruby'],
        livedemo: 'link to live version',
        github: 'link to source',
    },
    {
        Name:"Profesional Art Printing Data",
        Description:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        Featured_image:"/img/card-bg1.png",
        Technologies: ["HTML",'css','ruby'],
        livedemo: 'link to live version',
        github: 'link to source',
    },
    {
        Name:"Profesional Art Printing Data",
        Description:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        Featured_image:"/img/card-bg1.png",
        Technologies: ["HTML",'css','ruby'],
        livedemo: 'link to live version',
        github: 'link to source',
    }

]
 function getProject(project) {
    let html =``;
    for(let i = 0; i<project.length ; i++){
        html += ` <li class="card"'>
        <div class="card-summary">
            <h3 class='title'>${project[i].Name}</h3>
            <p class='surpporting-text3'>${project[i].Description} </p>
            <ul class='tags'>
                <li>${project[i].Technologies[0]}</li>
                <li>${project[i].Technologies[1]}</li>
                <li>${project[i].Technologies[2]}</li>
            </ul>
            </div>
            <a href="#" target="_blank" class="butt1">See Project</a>
     </li>`;
    }
    document.querySelector('.card-container').innerHTML = html;
    
}
getProject(project);

