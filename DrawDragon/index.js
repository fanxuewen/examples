document.onmousemove = function (ev) {

    var divs = document.getElementsByTagName('div');
    var evt = ev || event;
    var pos = getPosition(evt);
    for (var i = divs.length - 1; i > 0; i--) {
        divs[i].style.left = divs[i - 1].offsetLeft + 'px';
        divs[i].style.top = divs[i - 1].offsetTop + 'px';
    }
    divs[0].style.left = pos.x+'px';
    divs[0].style.top = pos.y+'px';

}
function getPosition(evt) {

    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    return { x: scrollTop + evt.clientX, y: scrollLeft + evt.clientY };
}