function imprimir (){

    let impresion = ""
    impresion = document.getElementById("name").value + "\n"
    impresion += document.getElementById("lastname").value + "\n"
    impresion += document.getElementById("age").value + "\n"
    impresion += document.getElementById("course").value + "\n"

    alert(impresion) 
    alert ("hola " + "a " + "todos")
}

console.log("funcionando")