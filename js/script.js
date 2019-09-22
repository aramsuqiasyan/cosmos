var menuBtn = document.getElementsByClassName('menubtn')[0].onclick = function(){
    document.getElementById('menu').classList.toggle('open');
    document.body.classList.toggle('over');
    document.getElementsByClassName('wrapper')[0].classList.toggle('open');
}