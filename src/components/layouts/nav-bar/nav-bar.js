(function () {
    var mobileNavBtn = document.getElementById('mobileNav'),
        nav = document.getElementById('nav');

    mobileNavBtn.onclick = function toggleNav () {

        if ( mobileNavBtn.className == "nav-icon hidden") {
            mobileNavBtn.className = "nav-icon shown";
            nav.className = "nav shown";

        } else {
            mobileNavBtn.className = "nav-icon hidden";
            nav.className = "nav hidden";
        }
    }

    console.log(mobileNavBtn.className);
})();
