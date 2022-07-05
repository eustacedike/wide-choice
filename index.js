function like (x) {
    x.classList.toggle('favved');
}

function navbar () {
    document.getElementById('hamburg').classList.toggle('hamburg2');

    var nv = document.getElementById('mobile');
    if (nv.style.display==='block')
    {nv.style.display='none';}
    else {nv.style.display='block';}
    
}

var thisForm = document.getElementById('thisform');
thisForm.onsubmit = function loggedIn () {
window.location.href = "./dashboard.html";
return false;
}; 


// thisForm.onsubmit = function goHome (event) {
//     event.preventDefault();
//     var userEmail = document.getElementById('ema');
//     var thatemail = userEmail.value;
//     var userdata = document.getElementById('userp');
//     var wholePage = document.getElementById('login');
//     userdata.innerHTML = thatemail;
//     wholePage.style.display = 'none';

// console.log(userEmail);
// console.log(thatemail);
// console.log(userdata);
// }
