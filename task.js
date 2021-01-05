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
// window.onload = () => {
//   let btn = document.querySelector(".popup_open");
// }


