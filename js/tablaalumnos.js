function verificardni () {
    var DNI= $('#DNIalu').val();
    var DNI1= DNI.substring(0,8);
    console.log(DNI);
    var numDNI=parseInt(DNI1);
    console.log(DNI1);
    var letra = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    
    var i=(numDNI%23);
    return DNI.substring(0,8)+letra[i];
}
function error() { //comprobar que el dni es correcto
    var DNI= $('#DNIalu').val();
    var DNIverificado=verificardni();
    if (DNI!=DNIverificado){
        alert("El DNI introducido ("+DNI+") no es correcto, vuelve a introducirlo.");
        return false;
    } if (DNI==DNIverificado){
        return true;
    }
}

function dniRepetido() { //comprobar que el dni no se repite
    var dni = $('#DNIalu').val();
    var letra = dni.substr(-1).toUpperCase();
    var numero = parseInt(dni.substr(0,dni.length-1));
    var string = numero + letra;
    console.log(string + typeof(string));

    if ((document.documentElement.textContent || document.documentElement.innerText).indexOf(string) > -1
      ) {
        return true;
      } else {
        return false;
      }
}


function agregarlumno() { //agregar alumno
    
    var DNI= $('#DNIalu').val();
    var NomAlu= $('#NOMalu').val();
    var Apealu= $('#APEalu').val();
    var correoalu=  $('#CORREOalu').val(); 
    var Notaalu= $('#NOTAalu').val(); 


    if ( dniRepetido()==true) {
        alert("EL alumno ya existe!");
    }else {
    if (error()) {
       var alumno = "<tr> <td>"+DNI+"</td>  <td>"+NomAlu+"</td> <td>"+Apealu+"</td> <td>"+correoalu+"</td><td>"+Notaalu+"</td> <td><div><input class='btn btn-secondary btn-sm' type='button' id=borrar value='Borrar'></div></td></tr>";
        
        $('#resultat').append(alumno);
        
    }
}
    return false
}
$(function (){ // borrar alumno
    $(document).on('click', '#borrar', function (event) {
        event.preventDefault();
        $(this).closest('tr').remove();
    });
});
$(function() { //borrar tabla
    $(document).on('click' , '.borrar' , function(event){
        event.preventDefault();
        $('td').remove();
    })
});


