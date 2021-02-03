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

    var color= [];
    color.push("#4a235a");
    color.push("#1a5276");
    color.push("#2874a6");
    color.push("#148f77");
    color.push("#138d75");
    color.push("#f5b041");
    color.push("#00FF00");
    color.push("#0000FF");
    color.push("#FF0000");
    color.push("#00FFFF");

    var todosIguales = 0;

    var aleatorio = Math.round(Math.random()*9);
    document.getElementById(id).style.backgroundColor = color[aleatorio];4


    var sum = 0;
    var bloques =[]
    bloque= document.getElementById(bloque1).style.background;
    bloque= document.getElementById(bloque2).style.background;
    bloque= document.getElementById(bloque3).style.background;
    bloque= document.getElementById(bloque4).style.background;
    bloque= document.getElementById(bloque5).style.background;
    bloque= document.getElementById(bloque6).style.background;
    bloque= document.getElementById(bloque7).style.background;
    bloque= document.getElementById(bloque8).style.background;
    bloque= document.getElementById(bloque9).style.background;
    bloque= document.getElementById(bloque10).style.background;

for (let index = 0; index < bloques.length - 1; index++) {
    
    if(bloques[index] == bloques[index]){
        sum++;
    }
    if(index == 8){
        if(bloques[9] == bloques[0]){
            sum++;
        }
    }
    if(sum == 9){
        alert("asdfghjklñ");
    }
    
}
}

