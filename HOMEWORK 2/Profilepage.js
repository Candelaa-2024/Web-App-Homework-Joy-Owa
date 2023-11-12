var userProfile1 = {
    Firstname: 'john',
    Lastname: 'doe',
    email: 'john@example.com',
    phoneno: '+012345678',
    briefdescription: 'I am a male.'
};

var userProfile2 = {
    Firstname: 'Jane',
    Lastname: 'Doe',
    email: 'janedoe@gmail.com',
    phoneno: '+987654321',
    briefdescription: 'I am a female'
};

var userProfiles = [userProfile1, userProfile2];

localStorage.setItem('userProfiles', JSON.stringify(userProfiles));

function loadUserProfile() {
  var loadedUserProfiles = JSON.parse(localStorage.getItem('userProfiles'));
    var currentUserProfile = loadedUserProfiles[1]; 

  document.getElementById('firstname').value = currentUserProfile.Firstname;
  document.getElementById('lastname').value = currentUserProfile.Lastname;
  document.getElementById('email').value = currentUserProfile.email;
  document.getElementById('phoneno').value = currentUserProfile.phoneno;
  document.getElementById('description').value = currentUserProfile.briefdescription;
}

loadUserProfile();

function saveDataToLocalStorage(data) {
  const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
  localStorage.setItem('userProfile', JSON.stringify({ ...userProfile, ...data }));
}


// function savechanges(){
//   localStorage.setItem('firstname', document.getElementById('firstname').value);
//   localStorage.setItem('lastname', document.getElementById('lastname').value);
//   localStorage.setItem('phoneno', document.getElementById('phoneno').value);
//   localStorage.setItem('description', document.getElementById('description').value);
//   saveDataToLocalStorage();
//   event.preventDefault();
//  console.log (localStorage);

// }


 document.getElementById('profileForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
     saveDataToLocalStorage();
     console.log(localStorage);
    
 });





