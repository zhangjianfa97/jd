window.addEventListener('load', function() {
    var header = document.querySelector('#header');
    window.addEventListener('scroll', function() {
        var scrollTop = document.documentElement.scrollTop;
        console.log(scrollTop);
        var scrollHeight = document.querySelector('#slide').offsetHeight;
        console.log(scrollHeight);
        var opacity = scrollTop / scrollHeight;
        if (opacity > 1) {
            header.style.backgroundColor = "rgba(222, 24, 27, 1)";
        } else {
            header.style.backgroundColor = 'rgba(222, 24, 27, ' + opacity + ')';
        }
    })

    var futureTime = Math.floor(new Date(2018, 8, 27, 12, 00, 00).getTime() / 1000);
    console.log(futureTime);
    var nowTime = Math.floor(new Date().getTime() / 1000);
    console.log(nowTime);
    var time = futureTime - nowTime;
    var spans = document.querySelectorAll('.down-time span');
    setInterval(setTime, 1000);

    function setTime() {
        time--;
        if(time < 0){
            time = 7200;
        }

        var hour = Math.floor(time / 3600);
        var minute = Math.floor(time % 3600 / 60);
        var second = time % 60;
        console.log(hour, minute, second);
        spans[0].innerHTML = Math.floor(hour / 10);
        spans[1].innerHTML = Math.floor(hour % 10);
        spans[3].innerHTML = Math.floor(minute / 10);
        spans[4].innerHTML = Math.floor(minute % 10);
        spans[6].innerHTML = Math.floor(second / 10);
        spans[7].innerHTML = Math.floor(second % 10);
    }



    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        // speed: 2000,
        autoplay: {
            delay: 2000, //轮播图的延迟
            stopOnLastSlide: false, // 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
            disableOnInteraction: false //当用户滑动的时候禁止自动轮播图 不需要禁止就为false
        },
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
    })

});
