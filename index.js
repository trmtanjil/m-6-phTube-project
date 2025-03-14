function removeClass (){
  const activeButtons = document.getElementsByClassName('active')


  for(let btn of activeButtons){
    btn.classList.remove('active')
  }
}


// Categories-btn strt 

function LoadCategories()  {
    //1 fetch the data 
   fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
   //2 convert promise to json
   .then((res=>res.json()))
   .then(data=>deteltsCategorys(data.categories))
}

function loadVideo(){
fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res=>res.json())
    .then(data=>{
      removeClass()
      document.getElementById('active-Class').classList.add('active')
      deteltsLoadVideos(data.videos)
    })
}

const LoadCategoryVideos = (id)=>{
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
  // btn.classList.remove('active')

  fetch(url)
  .then(res=>res.json())
  .then(data=>{

    removeClass ()

    const clickedbutton = document.getElementById(`btn-${id}`);
    clickedbutton.classList.add('active');
    deteltsLoadVideos(data.category)
  })

  
}
const loadVideoDetails=(videioId)=>{
console.log(videioId);
const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videioId}`;
fetch(url)
.then(res=>res.json())
.then(data=>loadetailsVideio(data.
  video
  ))
}
const loadetailsVideio =(video)=>{
console.log(video);
document.getElementById('Vidieo_details').showModal();

const ShowDetails= document.getElementById('ShowDetails');

ShowDetails.innerHTML=`
<div class="card bg-base-100 image-full   shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
`;
}

function deteltsLoadVideos(videos){
  const detailVedioContainer=document.getElementById('detailVedioContainers')
  
  detailVedioContainer.innerHTML='';
  if(videos.length==0){
    detailVedioContainer.innerHTML=`
     <div class="col-span-full text-center flex flex-col items-center">
     
        <img class="size-30 " src="./asest/Icon.png" alt="">
        <h1>Oops!! Sorry, There is no content here</h1>
    </div>
    `
  }

for(let detelVoade of videos){

 const detailVedioCreatContainers =  document.createElement('div')

 detailVedioCreatContainers.innerHTML=`
 
   <div class="card bg-base-100    w-[250px]shadow-sm">
        <figure class="relative">
          <img class="w-full h-[140px] object-cover"
            src="${detelVoade.thumbnail}"
            alt="Shoes" />
            <p class="absolute text-white bg-black rounded-sm bottom-0 right-0 p-1 mr-2 mb-2 text-[10px]">3hrs 56 min ago</p>
        </figure>
        <div class="card-body">
            <div class="flex gap-3 items-center">
                <div class="avatar h-6 w-6">
                    <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                      <img   src="${detelVoade.authors[0].profile_picture}" />
                    </div>
                  </div>
                <h2 class="card-title">${detelVoade.title}</h2>
            </div>
          
         <div class="flex">
            <p class="text-sm text-gray-400 flex gap-1 items-center">${detelVoade.authors[0].profile_name}<img class="w-3 h-3" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt=""></p>

         </div>
         <p class="text-sm text-gray-400">${detelVoade.others.views} views</p>

        </div>
      <button onclick=loadVideoDetails('${detelVoade.video_id}') class="btn btn-block">Show deteils</button>
      </div>
   
 `;
 detailVedioContainer.appendChild(detailVedioCreatContainers)
}
}


function deteltsCategorys(categories){
    const categoriContainer = document.getElementById('Categories_btn');

  for(let categori of categories){
   const categoryDiv = document.createElement('div');
   categoryDiv.innerHTML=`
     <button id="btn-${categori.category_id}" onclick="LoadCategoryVideos(${categori.category_id})" class="btn btn-sm hover:bg-[#ff1f3d] hover:text-white">${categori.category}</button>
   `;
   categoriContainer.appendChild(categoryDiv);
  }
}
 



LoadCategories()
