const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  }, 
  {
  name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'female',
    location: 'IDAHO',
    image: 'https://randomuser.me/api/portraits/men/81.jpg'
  }, 
  {
  name: 'Jamie Bessie',
    age: 38,
    gender: 'male',
    lookingfor: 'male',
    location: 'IDAHO',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }, 
  
];

const profiles = profileIterator(data);

//call auto-to view 1st profile
nextProfile();


//Next Even
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile(){
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined){
    

  document.getElementById('profileDisplay').innerHTML = `
  <ul class="list-group">
   <li class="list-group-item">Name: ${currentProfile.name}
    </li>
    <li class="list-group-item">Age: ${currentProfile.age}
    </li>
    <li class="list-group-item">Location: ${currentProfile.location}
    </li>
    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}
    </li>
  </ul>
  `;

  document.getElementById('imageDisplay').innerHTML = `
  <img src="${currentProfile.image}">`;

  
}else{
  //no more profiles 
  window.location.reload();

}

}
//profile Iterator

function profileIterator(profiles)
{
  let nextIndex = 0;


  return{
    next:function(){

      // if ----- dot this {} elese or : {}

      // if (nextIndex < profiles.length)
      // {
      //   console.log({value:profiles[nextIndex++]})
      // }

      return nextIndex < profiles.length ?
      {value: profiles[nextIndex++], done: false} :
      {done: true}
    }
  }
}





/* 

The way I did it


document.getElementById('next').addEventListener('click', function(e)
{
  console.table(data[0].name)

  const addName = `<div class="dynamicName">${data[0].name}</div>`;
  const divProfile = document.getElementById('profileDisplay');

  const randNum = Math.floor(Math.random(1,100)*100);
  const divImage = document.getElementById('imageDisplay');
  const addImage =   `<img src="https://randomuser.me/api/portraits/men/${randNum}.jpg" alt="">`

  divProfile.innerHTML = addName;
  divImage.innerHTML = addImage;


});


 */

