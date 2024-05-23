const DBZ = document.getElementById('DBZ');

console.log(DBZ);

const LOGO = document.querySelector(".logo");

console.log(LOGO)

const SAGAS = document.querySelectorAll(".sagas");

console.log(SAGAS);

const elementos = document.querySelectorAll('.elemento');

document.addEventListener('DOMContentLoaded', function() {

    const IMG = document.getElementById("SSJ");

    if (DBZ) {
        DBZ.addEventListener('click', function() {
            alert('Hiciste clic en DBZ');
            DBZ.style.fontSize="25px";
        });
    }

    if (LOGO) {
        LOGO.addEventListener('click', function() {
            alert('Hiciste clic en LOGO');
            LOGO.style.backgroundColor = 'coral';
        });
    }

    if (IMG) {
        IMG.addEventListener('click', function(){
            alert('Hiciste click en koku y se transformo a SSJ fase 4...')
            IMG.src="koku ssj4.jpg"
        })
    }

    

});

