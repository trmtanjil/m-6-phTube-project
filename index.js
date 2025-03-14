
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
    .then(data=>deteltsLoadVideos(data.videos))
}

const LoadCategoryVideos = (id)=>{
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>deteltsLoadVideos(data.category))
}

function deteltsLoadVideos(videos){
  const detailVedioContainer=document.getElementById('detailVedioContainers')
  detailVedioContainer.innerHTML='';
for(let detelVoade of videos){

 const detailVedioCreatContainers =  document.createElement('div')

 detailVedioCreatContainers.innerHTML=`
 
   <div class="card bg-base-100 w-[200px] shadow-sm">
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
      </div>
   
 `;
 detailVedioContainer.appendChild(detailVedioCreatContainers)
}
}


// {
//     "status": true,
//     "message": "successfully fetched all the videos",
//     "videos": [
//     {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//     {
//     "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//     "profile_name": "Olivia Mitchell",
//     "verified": ""
//     }
//     ],
//     "others": {
//     "views": "100K",
//     "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
//     },
//     {

function deteltsCategorys(categories){
    const categoriContainer = document.getElementById('Categories_btn');

  for(let categori of categories){
   const categoryDiv = document.createElement('div');
   categoryDiv.innerHTML=`
     <button onclick="LoadCategoryVideos(${categori.category_id})" class="btn btn-sm">${categori.category}</button>
   `;
   categoriContainer.appendChild(categoryDiv);
  }
}

// {
//     "category_id": "1001",
//     "category": "Music"
//     },

 



LoadCategories()
