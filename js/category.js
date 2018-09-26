window.addEventListener('load', function(){
	var swiper = new Swiper('.category-left .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });

	var swiper = new Swiper('.category-right .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });

	var ul = document.querySelector('.category-left ul');
	var lis = ul.children;

	for(var i = 0; i < lis.length; i++){
		lis[i].index = i;
	}

	ul.addEventListener('click', function(e){
		console.log(e);
		var li = e.target.parentNode;
		for(var i = 0; i < lis.length; i++){
			lis[i].classList.remove('active');
		}
		li.classList.add('active');

		var index = li.index;
		var distanceY = -index * li.offsetHeight;

		var maxDistanceY = document.querySelector('.category-left').offsetHeight-ul.offsetHeight;
		console.log(maxDistanceY);
		if(distanceY > maxDistanceY){
			ul.parentNode.parentNode.style.transform = 'translate3d( 0px,'+distanceY+'px,0px)';
		}else{
			ul.parentNode.parentNode.style.transform = 'translate3d( 0px,'+maxDistanceY+'px,0px)';
		}
		

	})
});