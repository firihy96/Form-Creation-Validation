async function fetchUserData(){
let apiUrl ='https://jsonplaceholder.typicode.com/users',
  dataContainer = document.getElementById('api-data');
  try {
    let response = await fetch(apiUrl);
    let users = await response.json();
    dataContainer.innerHTML = '';
    let userList = document.createElement('ul');
    users.forEach(user=> {
        let userElement =  document.createElement('li');
      userElement.innerText = user.name;
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
