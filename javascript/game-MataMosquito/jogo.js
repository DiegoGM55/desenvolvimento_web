var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 30;
var mosquitoAparece = 1500;
var dificuldade = window.location.search;
dificuldade= dificuldade.replace('?','');
mosquitoAparece=parseInt(dificuldade);

// recupera o tamanho da página
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function(){
    tempo--;
    
    if(tempo == 0){
        clearInterval(cronometro);
        clearInterval(criarMosquito);
        window.location.href = 'ganhou.html';
    }else{
        document.getElementById("cronometro").innerHTML = tempo;
    }

},1000)

function criaMosquito(){
    //remove o elemneto com o id mosquito 
    if(document.getElementById("mosquito")){
        document.getElementById("mosquito").remove();

        if(vidas < 3){
            document.getElementById('v'+ vidas).src = 'imagens/coracao_vazio.png';
            vidas++;
        }else{
            window.location.href = 'perdeu.html';
        }
    }

    // cria as coordenadas X e Y para posicionar o mosquito
    var posX = Math.floor(Math.random() * largura) - 90;
    var posY = Math.floor(Math.random() * altura) - 90;

    posX = posX < 0 ? 0: posX;
    posY = posY < 0 ? 0: posY;

    //cria a imagem mosca.png
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = 'mosquito' + tamanhoAleatorio() + ' lado' + ladoAleatorio();
    mosquito.style.left = posX + 'px';
    mosquito.style.top = posY+ 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';

    mosquito.onclick= function(){
        this.remove();
    }

    document.body.appendChild(mosquito); //coloca o elemento criado como filho do Body
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)+1;
return classe;
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)+1;
return classe;
}
