/*crear un algoritmo para optener el promedio de edad de un grupo de alumnos*/
 /*let cantAlumnos = parseInt(prompt("indique cuantos alumnos va a registrar"));
 let edadAlumnos;
 let sumaAlumnos = 0;
 let i;
 for(i=1; i<=cantAlumnos; i++){
    edadAlumnos = parseInt(prompt("ingrese la edad del alumno "+i));
    
    sumaAlumnos = sumaAlumnos + edadAlumnos;
 }

 console.log(`El promedio de las edades de los ${cantAlumnos} alumnos es: ${sumaAlumnos/cantAlumnos}`);*/


 /*Crear un algoritmo para optener la estatura promedio de un grupo de personas en centimetros
 cuya cantidad de miembros se desconoce el ciclo debe efectuarze siempre y cuando se tenga 
 una estatura registrada */

 let estatura = parseInt(prompt("ingrese la estatura en centimetros"));
 let cantPersona = 0;
 let sumaEstatura = 0;

 while (estatura>0){
    estatura = parseInt(prompt("Ingrese la estatura en centimetros"));
    cantPersona = cantPersona + 1;
    sumaEstatura = sumaEstatura + estatura;

 } 
 if ( cantPersona === 0){
    console.log("no hay estaturas ingresadas");
    
    }else{
        console.log(`El promedio de las estaturas de las ${cantPersona} personas es de: ${sumaEstatura/cantPersona} centimetros`);
    }
 