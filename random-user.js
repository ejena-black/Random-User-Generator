const btn       = document.querySelector('#btn'),
      fullName  = document.querySelector('#name'),
      username  = document.querySelector('#username'),
      email     = document.querySelector('#email'),
      city      = document.querySelector('#city');
      userPhoto = document.querySelector('#photo')


btn.addEventListener('click', () => {
    const url = 'https://randomuser.me/api';

    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(displayErrors)
})

const handleErrors = (res) =>{
    if(!res.ok){
        throw Error(res.status)
    }
    return res
}

const parseJSON = (res) => {
    const package = res.json()
    return package.then((parsedData) => {
        return parsedData.results[0]
    })
}

const updateProfile = (data) => {
    let fullname     = data.name.first + ' ' + data.name.last;
    
    fullName.innerText = fullname;
    username.innerText = data.login.username;
    email.innerText    = data.email;
    city.innerText     = data.location.city;
    userPhoto.src      = data.picture.medium;
}

const displayErrors = (err) => {
    console.log(err)
}