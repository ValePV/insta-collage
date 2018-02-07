
$('#collage-section').hide();


$('.btn-login').click(function(){
  if($('#username').val() == '') {
    $('.input').add(addClass('error'));
  }
  if($('#password').val() == 123456) {
    alert('La clave debe ser alfanumerica')
  }

  if($('#password').val().length < 6){
    alert('La clave debe tener minimo 6 digitos')
  }

});

$('#login').click(function(){
  $('.section').hide();
  $('#collage-section').show();
});







// --------------------------------------------------------------- //



function allowDrop(ev){
// permite se pueda colocar el elemento sobre el contenedor
  ev.preventDefault();
}

function drag(ev){
  //saber que tipo de dato estamos arrastrando
  //tipo de dato y valor
  //especificar al evento que es la imagen con esta id
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
  // permitir que se pueda soltar la imagen en el contenedor
  ev.preventDefault();
  //obtener los datos 
  var datas = ev.dataTransfer.getData("text");
  //activar el metodo drop - addicionar el elemento sobre el evento
  ev.target.appendChild(document.getElementById(datas));
}

function end(e){
      e.target.style.opacity = ''; // Pone la opacidad del elemento a 1       
      e.dataTransfer.clearData("text");
    }


// --------------------------------------------------------------- //


