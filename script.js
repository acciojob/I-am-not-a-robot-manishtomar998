let h3=document.createElement("h3");
h3.setAttribute("id","h3");
h3.innerHTML="Please click on Identical tiles to verify that you are not a robot";
document.body.prepend(h3);

// let btn1=document.createElement("button");
// btn1.setAttribute("id","reset");
// btn1.innerHTML="Reset";
// document.body.appendChild(btn1);

// let btn2=document.createElement("button");
// btn2.setAttribute("id","verify");
// btn2.innerHTML="Verify";
// document.body.appendChild(btn2);

// Above two buttons can also be created using method given below by making an array and traverse through it

let arr=["resetBtn","verifyBtn"];
for(let t of arr){
    let btn=document.createElement("button");
    btn.setAttribute("id","t");
    btn.innerHTML=t.toUpperCase();
    btn.style.display="none";
    document.body.appendChild(btn);
}

let imgClass=["img1","img2","img3","img4","img5"];

let randomIndex=Math.floor(Math.random()*imgClass.length);
let randomImg=imgClass[randomIndex];
imgClass.push(randomImg);

let images=document.querySelectorAll("img"); 

let arr1=[];
let k=0;
while(k<imgClass.length){
    let randomIndex1=Math.floor(Math.random()*imgClass.length)
    if(arr1[randomIndex1]==undefined){
        arr1[randomIndex1]=imgClass[k];
        k=k+1;
    }
    else if(arr1[randomIndex1]!=undefined){
        continue;
    }
}

for(let i=0;i<=images.length-1;i++){
    images[i].setAttribute("class",arr1[i]);
    images[i].setAttribute("id",i);
}
for(let t of images){
    t.addEventListener("click",userOrRobot);
}
let resetBtn=document.getElementById("resetBtn");
let verifyBtn=document.getElementById("verifyBtn");
let prevImgId="";
let count=0;
function userOrRobot(e){
    document.getElementById("reset").style.display="inline";
    let currentImgId=e.target.id;
    if(currentImgId!=prevImgId){
        images[currentImgId].classList.add("selected");
        count++;
        prevImgId=currentImgId;
        if(count==2){
            document.getElementById("verify").style.display="inline";
        }
    }
}
resetBtn.addEventListener("click",()=>{
    document.getElementById("verify").style.display="none";
    document.getElementById("reset").style.display="none";
    count=0;
    selectedImages=document.querySelectorAll(".selected");
    for(let t of selectedImages){
        t.classList.remove("selected");
    }
})
verifyBtn.addEventListener("click",()=>{
    let p=document.createElement("p");
    selectedImages=document.querySelectorAll(".selected");
    let class1=selectedImages[0].className;
    let class2=selectedImages[1].className;
    if(class1==class2){
        p.innerHTML="You are a Human. Congratulations!";
    }
    else{
        p.innerHTML="We can't verify you as a human. You selected non-identical tiles";
    }
    document.getElementById("verify").style.display="none";
    document.body.append(p);
})