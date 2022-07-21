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
            <button type="button" class="btn btn-primary model-button" data-bs-toggle="modal" data-bs-target="#myModal">
            See Projects
          </button>
     </li>`;
    }
    document.querySelector('.card-container').innerHTML = html;
    
}
getProject(project);

// function popupWindow(){
//     let html=``;
//     html+=` <div class='popup-container' id='Popup'>
//     <div class='popup'>

//       <div class='modal-container'>
//          <div class='btn-wrapper'>
//           <button type='button' class='close-btn' data-dismiss='modal'>&times;</button> 
//           <h4 class='project-title'>Multi Post Stories</h4>
//         </div>
         
//         <div class='technology-list'>
//           <ul class="tags"> 
//             <li class="tag-text">css</li>
//              <li class="tag-text">html</li>
//              <li class="tag-text">bootstrap</li>
//              <li class="tag-text">ruby</li>
//            </ul>
//         </div>
//         <div class='modal-img-container'>
//           <div class='modal-img'>
//             <img src='./img/popup.png' alt='SnapshootPortfolio'>
//           </div>
//           <div class='project-content'>
//             <div class='supporting-text7'>
//               Lorem Ipsum is simply dummy text of the printing 
//               and typesetting industry. Lorem Ipsum has been the industry's 
//               standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
//                but also the leap into electronic typesetting, remaining essent
//             </div>
//             <div class='modal-btn'>
//               <button type='button' class='bottom-btn' ><a href='${projects[0].livedemo}'>See Live</a><i class='fa fa-external-link' aria-hidden='true'></i></button>
//               <button type='button' class='bottom-btn'><a href='${projects[0].sourceCode}'>See Source</a><i class='fa fa-github' aria-hidden='true'></i></button>
//             </div>
//           </div>
//         </div>
//         </div>
        
//       </div>
      
//     </div>
//   </div> `
// }
// document.querySelector('popup-container').innerHTML=html;
// popupWindow();