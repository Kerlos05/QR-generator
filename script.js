const btn = document.getElementById('add');
const input = document.getElementById('input');
const img = document.getElementById('img');
const image = document.getElementsByClassName('img')[0]

btn.addEventListener('click', () => {
    if(!input.value) {
        return;
    }
    
    gettingImage();
    image.style.display ="inline-block";
}) 

async function gettingImage(){
    return img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + `${input.value}`; 
}
