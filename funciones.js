(function(){

    var actualizarHora=function(){

        var reloj = new Date(),
            horas = reloj.getHours(),
            ampm,
            minutos = reloj.getMinutes(),
            segundos = reloj.getSeconds();
            

        var phoras = document.getElementById('horas'),
            pminutos = document.getElementById('minutos'),
            psegundos = document.getElementById('segundos'),
            pampm = document.getElementById('ampm');

            if(horas >= 12){
                horas = horas - 12;
                ampm = 'PM';
            }
            else{
                ampm = 'AM';
            }

            if(horas == 0){
                horas = 12;
            }
            phoras.textContent = horas;
            pampm.textContent = ampm;

            if(minutos < 10){
                minutos = '0' + minutos;
            }

            if(segundos < 10){
                segundos = '0' + segundos;
            }
            
            pminutos.textContent = minutos;
            psegundos.textContent = segundos;
            

    };

    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);

}())

function cambiaColor(id){
    let sum= 0;
    var colores = [];
    colores.push(document.getElementById("bloque1").style.backgroundColor);
    colores.push(document.getElementById("bloque2").style.backgroundColor);
    colores.push(document.getElementById("bloque3").style.backgroundColor);
    colores.push(document.getElementById("bloque4").style.backgroundColor);
    colores.push(document.getElementById("bloque5").style.backgroundColor);
    colores.push(document.getElementById("bloque6").style.backgroundColor);
    colores.push(document.getElementById("bloque7").style.backgroundColor);
    colores.push(document.getElementById("bloque8").style.backgroundColor);
    colores.push(document.getElementById("bloque9").style.backgroundColor);
    colores.push(document.getElementById("bloque10").style.backgroundColor);

    /*for (let i = 0; i<colores.length; i++){
    if(colores[i] == colores[i + 1]){
        sum++;
    }}

    if (sum == 9){
        alert("Todos son iguales")
    }
    */
var iguales = false;
    
    document.getElementById(id).style.backgroundColor = color[Math.round(Math.random() * 9)];
    if (document.getElementById('bloque1').style.backgroundColor == document.getElementById('bloque2').style.backgroundColor) {
        if (document.getElementById('bloque2').style.backgroundColor == document.getElementById('bloque3').style.backgroundColor) {
            if (document.getElementById('bloque3').style.backgroundColor == document.getElementById('bloque4').style.backgroundColor) {
                if (document.getElementById('bloque4').style.backgroundColor == document.getElementById('bloque5').style.backgroundColor) {
                    if (document.getElementById('bloque5').style.backgroundColor == document.getElementById('bloque6').style.backgroundColor) {
                        if (document.getElementById('bloque6').style.backgroundColor == document.getElementById('bloque7').style.backgroundColor) {
                            if (document.getElementById('bloque7').style.backgroundColor == document.getElementById('bloque8').style.backgroundColor) {
                                if (document.getElementById('bloque8').style.backgroundColor == document.getElementById('bloque9').style.backgroundColor) {
                                    if (document.getElementById('bloque9').style.backgroundColor == document.getElementById('bloque10').style.backgroundColor) {
                                        if (document.getElementById('bloque10').style.backgroundColor == document.getElementById('bloque1').style.backgroundColor) {
                                            iguales=true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if(iguales){
        alert("Son todos iguales!")
    }
}





var color= [];
color.push("#4a235a");
color.push("#6D0863");
color.push("#2874a6");
color.push("#148f77");
color.push("#138d75");
color.push("#f5b041");
color.push("#00FF00");
color.push("#0000FF");
color.push("#FF0000");
color.push("#00FFFF");
