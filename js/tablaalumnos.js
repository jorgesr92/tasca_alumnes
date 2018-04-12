function verificardni () {
    var DNI= document.getElementById("DNIalu").value;
    var DNI1=DNI.substring(0,8);
    var numDNI=parseInt(DNI1);
    var letra = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    //con el final el array no se puede modificar 
    var i=(numDNI%23);
    return DNI.substring(0,8)+letra[i];
}
function error() {
    var DNI= document.getElementById("DNIalu").value;
    var DNIverificado=verificardni();
    if (DNI!=DNIverificado){
        alert("El DNI introducido ("+DNI+") no es correcto, vuelve a introducirlo.");
        return false;
    } if (DNI==DNIverificado){
        return true;
    }
}
function agregarlumno() {
    
    var DNI= document.getElementById("DNIalu").value;
    var NomAlu= document.getElementById("NOMalu").value;
    var Apealu= document.getElementById("APEalu").value;
    var correoalu= document.getElementById("CORREOalu").value;
    var Notaalu= document.getElementById("NOTAalu").value;
    if (error()) {
        document.getElementById("resultat").innerHTML = "<tr> <td>"+DNI+"</td>  <td>"+NomAlu+"</td> <td>"+Apealu+"</td> <td>"+correoalu+"</td><td>"+Notaalu+"</td></tr>";
        //<table class='table table-striped'><tr> <td>"+DNI+"</td>  <td>"+NomAlu+"</td> <td>"+Apealu+"</td> <td>"+correoalu+"</td><td>"+Notaalu+"</td></tr></table>
    }
    return false
}

