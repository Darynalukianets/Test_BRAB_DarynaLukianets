(function() {
    var carousel = document.getElementById('slider'),
        list = carousel.querySelector('.sliders'),
        prev = document.getElementById('prev'),
        next = document.getElementById('next'),
        listElems = carousel.querySelectorAll('.slide'),

        width = (+((getComputedStyle(listElems[0])).width.slice(0,3))+1),
        carouselWidth = +((getComputedStyle(carousel)).width.slice(0,3)),
        count = 1,
        amount = listElems.length,
        position = 0;

    function slide(currentPosition, clickedElem) {
        var start = Date.now(),
            timer = setInterval(function() {
                var timePassed = Date.now() - start,
                    duration = 360,
                    step = duration / width;
                console.log(step);

                if (timePassed >= duration) {
                    clearInterval(timer);
                    return;
                }

                draw(timePassed, step, currentPosition, clickedElem);
            }, 10);

        function draw(timePassed, step, currentPosition, clickedElem) {
            list.style.left = (clickedElem === next) ?
                currentPosition + (-(timePassed / step)) - ((width / 100)* 2.5) + 'px' :
                currentPosition + (timePassed / step) + ((width / 100)* 2) + 'px';
        }
    }

    function switchNav (switchNext) {
        var currentActive = document.querySelectorAll('.active');

        if (switchNext) {
            currentActive[0].nextElementSibling.className = "slider_nav_item active";
        } else {
            currentActive[0].previousElementSibling.className = "slider_nav_item active";
        }
        currentActive[0].className = "slider_nav_item";
    }

    next.onclick = function() {
        if (position <= ((width * count) - (width * amount))) {}
        else {
            slide(position, this);
            position -= width;
            switchNext = true;
            switchNav(switchNext);
        }
    };

    prev.onclick = function() {
        if (position <= -width) {
            slide(position, this);
            position += width;
            switchNext = false;
            switchNav(switchNext);
        }
    };
})();
