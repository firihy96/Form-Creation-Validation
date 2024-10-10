async function fetchUserData(){
let apiUrl ='https://jsonplaceholder.typicode.com/users',
  dataContainer = document.getElementById('api-data');
  try {
    let response = await fetch(apiUrl);
    let users = await response.json();
    dataContainer.innerHTML = '';
    let userList = `<ul></ul>`;
    users.forEach(user=> {
        let userElement =  `<li>${user.name}</li>` ;
      return userList.appendChild(userElement)
    })
    dataContainer.appendChild(userList)
  } catch(error){
    dataContainer.innerHTML = 'Failed to load user data.';
  }
}
document.addEventListener('DOMContentLoaded', ()=>{
  fetchUserData();
})
