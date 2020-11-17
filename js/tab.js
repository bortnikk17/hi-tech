	var accItem = document.getElementsByClassName('tabItem');
    var accHD = document.getElementsByClassName('tabs-name');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'tabItem close';
        }
        if (itemClass == 'tabItem close') {
            this.parentNode.className = 'tabItem open';
        }
    }