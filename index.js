console.log('welcome to spotify');

let songindex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay =document.getElementById('masterplay');
let mypro=document.getElementById('mypro');
let gif=document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let mastersongname=document.getElementById('mastersongname');
let time =Array.from(document.getElementsByClassName('timestamp'));

let songs=[
    {songName: "Warriyo - Mortals",duration:'2.00', filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma",duration:'2.45', filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible ",duration:'2.50', filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart",duration:'2.00', filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning",duration:'3.00', filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq",duration:'3.15', filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq",duration:'3.20', filePath: "songs/7.mp3", coverPath: "covers/7.jpg"}
]

songitems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText= songs[i].songName;
    element.getElementsByClassName('timestamp')[0].innerText= songs[i].duration;
});


//audioelement.play()

//handle play/plause click

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause()
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
});

//listen events
audioElement.addEventListener('timeupdate' ,()=>{
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    mypro.value=progress;
});

mypro.addEventListener('change' ,()=>{
    audioElement.currentTime = (mypro.value*audioElement.duration)/100;
});

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songplayitem')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songplayitem')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if (audioElement.paused || audioElement.currentTime<=0){
            makeAllPlays();
            songindex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `songs/${songindex}.mp3`;
            mastersongname.innerText =songs[songindex-1].songName;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
        }
        else{
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            gif.style.opacity=0;
            masterplay.classList.remove('fa-circle-pause');
            masterplay.classList.add('fa-circle-play');
        }
    })

});


document.getElementById('next').addEventListener('click',()=>{
    if (songindex>=6){
        songindex =0
    
    }
    else{
        songindex+=1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    mastersongname.innerText =songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
});

document.getElementById('previous').addEventListener('click',()=>{
    if (songindex<=0){
        songindex =0
    
    }
    else{
        songindex-=1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    mastersongname.innerText =songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
});



