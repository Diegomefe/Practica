// pro el momento solo se ejecuta esta linea
//alert("Hola mundo de la programacion en Javascript");

function Hola(){
    alert("No se muestra hasta que se mande llamar");
}

function suma(){
    numero_1 = document.getElementById("n1").value;
    numero_2 = document.getElementById("n2").value;
    resultado = parseInt(numero_1) + parseInt(numero_2);
    alert("Sumar los dos numeros: " + resultado);
}

function resta(){
    numero_1 = document.getElementById("n1").value;
    numero_2 = document.getElementById("n2").value;
    resultado = numero_1 - numero_2;
    alert("Restar los dos numeros: " + resultado);

}

function multiplicacion(){
    numero_1 = document.getElementById("n1").value;
    numero_2 = document.getElementById("n2").value;
    resultado = numero_1 * numero_2;
    alert("Multiplicacion los dos numeros: " + resultado);
}

function division(){
    numero_1 = document.getElementById("n1").value;
    numero_2 = document.getElementById("n2").value;
    resultado = parseInt(numero_1)/parseInt(numero_2);
    alert("Dividir los dos numeros: " + resultado)
}