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