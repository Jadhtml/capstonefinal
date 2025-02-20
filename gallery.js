                

/*photogallery*/
function upDate(previewPic) {

    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
}

function unDo() {

    document.getElementById('image').style.backgroundImage = "url('')"
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';
}

previewImages.forEach((img) => {
    img.addEventListener('focus', () => upDate(img)); 
    img.addEventListener('blur', unDo); 
});

