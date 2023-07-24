function open_pop(){
    const open = document.getElementById("pop_wrap");
    open.style.display = "block";
}
function close_pop(){
    const open = document.getElementById("pop_wrap");
    open.style.display = "none";
}
const htmlFiles = [
    'Ba블루아카메인.html',
    'Ba게임소개 세계관.html',
    'Ba학생명부.html',
    'Ba캐릭터소개1.html',
    'BaMedia1.html',
    'BaMedia2.html',
    'Ba커뮤니티.html'
];
function loadHTMLFile(index) {
    return htmlFiles[index];
}
let currentFileIndex = 1;
function handleWheel(event) {
    const page02 = document.getElementById("page02");
    page02.style.display='none';
    if (event.deltaY > 0) {
        currentFileIndex++;
        if (currentFileIndex >= 7) {
            currentFileIndex = 0;
        }
    } else {
        currentFileIndex--;
        if (currentFileIndex < 0) {
            currentFileIndex = 6;
        }
    }
    showNextImage();
    setInterval(showNextImage, 1900);
    loadHTMLFile(currentFileIndex);
    setTimeout(function() {
        location.href=(loadHTMLFile(currentFileIndex));
    },1900);
}
document.addEventListener('wheel', handleWheel)

function showNextImage() {
    currentIndex = (currentIndex+1) % images.length;
    images[currentIndex].style.display = 'block';
    images[currentIndex].style.opacity = '1';
}

$(document).ready(function(){
    adjustPlayButtonPosition();

    $(window).resize(function(){
        adjustPlayButtonPosition();
    });
});

function adjustPlayButtonPosition() {
    let windowWidth = $(window).innerWidth();
    let playButton = $("#sec06_btn");
    let playButtonWidth = playButton.outerWidth();

    let leftPosition = (windowWidth - playButtonWidth) -100;
    playButton.animate({ left: leftPosition + "px" }, 15);
}

