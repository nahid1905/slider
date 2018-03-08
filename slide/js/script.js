var left_btn=document.querySelector(".left")
var right_btn=document.querySelector(".right")
var slideImg=document.querySelector(".slideItems img")
count=0;
var imgs=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
left_btn.addEventListener("click",function(){

	slideImg.setAttribute("src",imgs[count])
	count--;
	if(count<=0){
		count=imgs.length-1;
	}
	console.log(count)
})

right_btn.addEventListener("click",function(){
	slideImg.setAttribute("src",imgs[count])
	count++;
	if(count>=imgs.length){
		count=0;
	}
	console.log(count)
})