//1. Напишите рекурсивную функцию вычисления n факториала.
/*
fact = (n) => {
  return (n === 1 || n === 0) ? 1 : n * fact(n - 1)
};

console.log(fact(6)) //720
*/

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
/*
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector(".popup_open");
  btn.addEventListener('click', () => {
    const headers = {
      'Content-Type': 'application/json;charset=utf-8'
    }
    let elemUrl = document.querySelector("#url");
    let data = "url=" + elemUrl.value;
    let form = elemUrl.closest('form');
    try {
      let res = fetch(form.getAttribute('action'), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers
      }).then(
        response => {
          return !response.ok ? null : response.json();
        })
      if (res) {
        document.querySelector('.popup_open').classList.add('open');
        let popupInner = document.querySelector('.popup_inner');
        popupInner.classList.add('open');
        popupInner.textContent = res.text;
        popupInner.insertAdjacentHTML('afterend', '<h1>' + res.title + '</h1>');
      }
    } catch {
      return null
    }
  });
});
*/

/*
4. Имеются следующие URL
* https://itrack.ru/portfolio/website/
* https://itrack.ru/portfolio/vnedrenie-crm/
* https://itrack.ru/portfolio/website/filter/project_type-is-korporativnyy_sayt/apply/
* https://itrack.ru/portfolio/vnedrenie-crm/filter/crm_project_type-is-amocrm/apply/
* https://itrack.ru/portfolio/website/?PAGEN_1=2
* https://itrack.ru/portfolio/vnedrenie-crm/?PAGEN_1=2
* https://itrack.ru/portfolio/vnedrenie-crm/mobifitness/
* https://itrack.ru/portfolio/website/miratorg/

  Необходимо при загрузке страницы заполнить массив с параметрами страницы:
* Тип страницы (type) - index, filter, project, nextPage
* Направление работы (direct) - website, crm
* Параметры фильтра (filterParam) - строка между filter и apply
* Проект (project) - код проекта из url

И при изменении URL без перезагрузки страницы массив должен быть обновлён.
*/

document.addEventListener('DOMContentLoaded', () => {

  const pageParam = new Map([
    ['type', ''],
    ['direct', ''],
    ['filterParam', ''],
    ['project', '']
  ]);

  window.onpopstate = function (event) {
    let url = document.location.href //'https://itrack.ru/portfolio/vnedrenie-crm/filter/crm_project_type-is-amocrm/apply/';
    const parseUrl = new URL(url);

    const upPageParam = (str) => {

      const arrParam = str.split('/');

      arrParam.splice(0, 2);
      arrParam.pop();

      if (pageParam.get('type') === '') {
        switch (arrParam.length) {
          case 1:
            pageParam.set('type', 'index');
            break;
          case 2:
            pageParam.set('type', 'project');
            pageParam.set('project', arrParam[1]);
            break;
          case 4:
            pageParam.set('type', 'filter');
            pageParam.set('filterParam', arrParam[2]);
            break;
          default:
            console.log('ошибка url');
            break;
        }
      }

      if (arrParam[0] === 'vnedrenie-crm') {
        pageParam.set('direct', 'crm');
      } else {
        pageParam.set('direct', arrParam[0]);
      }
    }

    if (parseUrl.search) {
      pageParam.set('type', 'nextPage');
      upPageParam(parseUrl.pathname);
    } else {
      upPageParam(parseUrl.pathname);
    }
    console.log(pageParam);
  }
});


//5. Напишите на JS простейший «ползунок» (https://i.stack.imgur.com/nYjiU.png). Входные данные min, max, current.

// document.addEventListener('DOMContentLoaded', () => {
//   const range = document.querySelector('#range');
//   const rangeLine = document.querySelector('.range-line');
//   const number = document.querySelector('.number');
//
// //Входные данные min, max, current.
//   const arg = {
//     min: 0,
//     max: 20000,
//     current: 10000
//   }
//   setInput(arg);
//
//   function setInput(arg) {
//     range.setAttribute('min', arg.min);
//     range.setAttribute('max', arg.max);
//     range.setAttribute('value', arg.current);
//     number.textContent = arg.current;
//     rangeLine.style.width = progress(arg.current, arg.max) + '%';
//   }
//
//   function progress(value, max) {
//     return value * 100 / max;
//   }
//
//   range.addEventListener('input', e => {
//     number.textContent = e.target.value;
//     rangeLine.style.width = progress(e.target.value, e.target.max) + "%";
//   })
// });


//6. Приведите пример реализации наследования.
/*
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
*/


