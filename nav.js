// замена атрибута иконки бургера
function nav() {
   document.querySelector('.nav').classList.toggle('show'); 
    let attr = document.querySelector('.image').getAttribute('src');
    if(attr == `img/menu-svgrepo-com.svg`) {
        document.querySelector('.image').setAttribute('src', `img/close2-svgrepo-com.svg`);
    } else {
        document.querySelector('.image').setAttribute('src', `img/menu-svgrepo-com.svg`);
    }  
}
document.querySelector('.burger').onclick = nav;  


// переключение активного класса
let link = document.querySelectorAll('.nav__link');

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function() {

        let current = document.querySelectorAll(".active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
  });
}

