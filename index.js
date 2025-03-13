
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

function deteltsLoadVideos(videos){
for(let detelVoade of videos){
   const detailVedioContainer=document.getElementById('detailVedioContainers')

 const detailVedioCreatContainers =  document.createElement('div')

 detailVedioCreatContainers.innerHTML=`
    <div id="detailVedioContainers" class="card bg-base-100 w-56 shadow-sm">
        <figure class="relative">
        <p class="absolute bottom-0 right-0 bg-black text-white text-[12px] rounded-sm p-[2px] mr-2 mb-2">3hrs 56 minn ago</p>
          <img
            src="${detelVoade.thumbnail}" />
        </figure>
        <div class="card-body">
         <div class="flex gap-3">
          <div class="avatar">
            <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            </div>
            <h2 class="card-title">${detelVoade.title}</h2>
         </div>
         <div class="flex">
            <p class="">awlad hosain</p>
           <span> <i class="fa-solid fa-certificate text-green-600"></i></span>
         </div>
         <div>
            <p>91k Views</p>
         </div>
          <!-- <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div> -->
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
     <button class="btn btn-sm">${categori.category}</button>
   `;
   categoriContainer.appendChild(categoryDiv);
  }
}

// {
//     "category_id": "1001",
//     "category": "Music"
//     },

 



LoadCategories()
loadVideo()