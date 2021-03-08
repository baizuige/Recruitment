const oLeft = document.querySelector('#pre');
const oRight = document.querySelector('#next');
const oImgList = document.querySelector('.carousel-item');
let cloneImg = oImgList.firstElementChild.cloneNode();
oImgList.append(cloneImg);
let count = oImgList.childElementCount;
let index = 0;
let oImgListWidth = document.documentElement.clientWidth;
let lock = true;
oLeft.onclick = function(){
	if(!lock) return;
	if(index===0){
		oImgList.style.left=-(count-1)*oImgListWidth + 'px';
		oImgList.style.transition = 'none';
		setTimeout(function(){
			index=count-2;
			oImgList.style.left=-(count-2)*oImgListWidth + 'px';
			oImgList.style.transition = '.5s ease';
		},0);
	}else{
		index--;
		oImgList.style.left = -index*oImgListWidth + 'px';
	}
	lock=!lock;
	setTimeout(function(){
		lock=!lock;
	},500);
}
oRight.onclick = function(){
	if(!lock) return;
	index++;
	if(index===count-1){
		setTimeout(function(){
			oImgList.style.left = 0 ;
			index=0;
			oImgList.style.transition = 'none';
		},500);
	}
	oImgList.style.transition = '0.5s ease';
	oImgList.style.left = -index*oImgListWidth + 'px';
	lock=!lock;
	setTimeout(function(){
		lock=!lock;
	},500);
}
let timer = setInterval(function(){
	oRight.click();
},7000);

const carousel = document.querySelector('.carousel-block');
carousel.onmouseover = function(){
	carousel.classList.toggle('carousel-hover');
	clearInterval(timer);
}
carousel.onmouseout = function(){
	carousel.classList.toggle('carousel-hover');
	timer = setInterval(function(){
		oRight.click();
	},7000);
}

const search = document.querySelector('.search-block');
const headerFix = document.querySelector('.fixed-header');
window.onscroll = function(){
	if(search.getBoundingClientRect().y<=70){
		headerFix.style.display = 'flex';
		search.style.opacity=0;
	}else{
		headerFix.style.display = 'none';
		search.style.opacity=1;
	}
}
