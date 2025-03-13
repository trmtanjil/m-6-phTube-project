
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
    .then(data=>console.log(data))
}

function deteltsLoadVideos(thumbnail){
console.log(thumbnail);
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