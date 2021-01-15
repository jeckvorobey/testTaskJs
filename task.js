//1. Напишите рекурсивную функцию вычисления n факториала.
fact = (n) => {
  return ( n === 1 || n === 0) ? 1 : n * fact(n-1)
};

console.log(fact(6)) //720

/*
2. Чем различаются записи:
  1. var arrayData = {}; -- обьект
  2. var arrayData = []; --массив (особенный тип обьектов, typeof возвращает значение object)
*/

/*
3. Напишите аналог кода на чистом js
        $(function(){
        $(".popup_open").on("click", function(){
                var data = "url="+$("#url").val();
                var $form = $("#url").parents("from");
                $.ajax({
                        url: $form.attr('action'),
                        data: data,
                        dataType: "JSON",
                        success: function(data){
                                $(".popup_open").addClass("open");
                                $(".popup_inner").addClass("open");
                                $(".popup_inner").text(data.text);
                                $(".popup_inner").before("<h1>"+data.title+"</h1>");
                        }
                });
        });
});
*/
// document.ready = () => {
//     const btn = document.querySelector(".popup_open");
//     btn.addEventListener('click',  ()  => {
//       const headers = {
//         'Content-Type': 'application/json;charset=utf-8'
//       }
//       let elemUrl = document.querySelector("#url");
//       let data = "url=" + elemUrl.value;
//       let form = elemUrl.closest('form');
//       try {
//         let res = fetch(form.getAttribute('action'), {
//           method: 'POST',
//           body: JSON.stringify(data),
//           headers: headers
//         }).then(
//           response => {
//             return !response.ok ? null : response.json();
//           })
//         if (res) {
//           document.querySelector('.popup_open').classList.add('open');
//           let popupInner = document.querySelector('.popup_inner');
//           popupInner.classList.add('open');
//           popupInner.textContent = res.text;
//           popupInner.insertAdjacentHTML('afterend', '<h1>' + res.title + '</h1>');
//         }
//       } catch {
//         return null
//       }
//     });
// };

//6. Приведите пример реализации наследования.
class Transport {
  constructor(options) {
    this.type = options.type;
  }
  show() {
    console.log(`Это ${this.type}`);
  }
}

class Car extends Transport{
  constructor(options) {
    super(options)
    this.move = options.move
  }
  moves() {
    console.log(`Это ${this.type} он умеет ${this.move}`);
  }
}

class Ship extends Car {
  constructor(options) {
    super(options);
    this.name = options.name
  }
  captain() {
    console.log(`Капитана корабля зовут ${this.name}`)
  }
}

const car = new Car({
  type: 'Автомобиль',
  move: 'ехать'
})

const ship = new Ship({
  type: 'Корабль',
  move: 'плавать',
  name: 'Петрович'
})

car.show() //Это Автомобиль
ship.show() //Это Корабль
ship.captain() //Капитана корабля зовут Петрович
car.moves() //Это Автомобиль он умеет ехать
ship.moves() //Это Корабль он умеет плавать



