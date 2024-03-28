const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(function(){
    $("#enviarMensaje").click(function(){
        alert("El correo fue enviado correctamente...");
    });
  });

  $(function(){
    $("#destacados").on("dblclick", function(){
        $(this).css("color", "yellow");
    });
});

$(function(){
    $("#contacto").on("dblclick", function(){
        $(this).css("color", "yellow");
    });
});
