function TomarLista(){
    let estudiante = document.getElementById("respuesta").value;
    //conditional
    if (estudiante=== "presente"){
        alert ("El estudiante está presente")
    }
    else{
        alert("El estudiante no asistio")
    }
    if (estudiante ===false){
        alert("El estudiante no está presente")
    }
}

