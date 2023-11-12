// const request = new XMLHttpRequest();
// request.open("GET", "http://localhost:5000/api/user");
// request.setRequestHeader("Access-Control-Allow-Credentials", "true");
// request.setRequestHeader("Content-Type", "application/json");
// request.onload = processData;
// request.send();

// function processData() {
//     const response = JSON.parse(request.response);
// }

async function loadUserProfile() {
    const response = await fetch('http://localhost:5000/api/user/${user_id}');
    const userProfile = await response.json();
   
    document.getElementById('firstname').value = userProfile.Firstname;
    document.getElementById('lastname').value = userProfile.Lastname;
    document.getElementById('email').value = userProfile.email;
    document.getElementById('phoneno').value = userProfile.phoneno;
    document.getElementById('description').value = userProfile.briefdescription;
}
   
   loadUserProfile();

async function saveUserProfile() {
    const Firstname = document.getElementById('firstname').value;
    const Lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phoneno = document.getElementById('phoneno').value;
    const description = document.getElementById('briefdescription').value;
    
    
    const updatedUserProfile = {
       Firstname,
       Lastname,
       email,
       phoneno,
       description
    };
   
    await fetch('http://localhost:5000/api/user/${user_id}', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUserProfile),
    });
}
   
document.getElementById('save-button').addEventListener('click', saveUserProfile);
