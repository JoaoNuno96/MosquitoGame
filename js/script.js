var altura = 0
var largura = 0
var vidas = 1
var tempo_passado = 10

var criaMosquitotempo = 1500

var nivel = window.location.search
nivel = nivel.replace("?","")

//FUNÇAO PARAMETRO DE DIFICULDADE DE JOGO----------------------
if(nivel === "normal"){
	criaMosquitotempo = 1500
}else if(nivel === "dificil"){
	criaMosquitotempo = 1000
}else if(nivel === "chuck_norris"){
	criaMosquitotempo = 750
}



function ajustaTamanhojogo(){
altura = window.innerHeight
largura = window.innerWidth

}
//FUNÇAO INICIAR JOGO----------------------


function iniciarJogo(){
	var nivel = document.getElementById("nivel").value

	if(nivel === ""){
		alert("Selecione uma dificuldade para começar um jogo")
		return false
	}

	window.location.href = "app.html?" + nivel

}


//CRIAR CRONOMETRO----------------------

var cronometro = setInterval(function(){

	tempo_passado-=1

	if (tempo_passado < 0) {
		clearInterval(cronometro)
		clearInterval(cria_mosquito)
		window.location.href = "vitoria.html"
	}else{
		document.getElementById("time").innerHTML = tempo_passado
	}

} ,1000)


ajustaTamanhojogo()

//CRIAR ELEMENTO HTML MOSQUITO----------------------

function posicaoRandom(){

	//remover automaticamente mosquito anteriror(caso exista)
	if(document.getElementById("mosquito")){
		document.getElementById("mosquito").remove()

		if(vidas>3){
			window.location.href = "fim_de_jogo.html"
		
		}else{
			document.getElementById("vida" + vidas).src = "imagens/coracao_vazio.png"
		vidas++
		}
	}

	//coordenadas RANDOM------------------------------
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//ELEMENTO MOSQUITO------------------------------
	var mosquito = document.createElement("img")
	mosquito.src ="imagens/mosquito.png"
	mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
	mosquito.style.left = posicaoX + "px"
	mosquito.style.top = posicaoY + "px"
	mosquito.style.position = "absolute"
	mosquito.id ="mosquito"
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito)

}

//FUNCAO TAMANHO ALEATORIO MOSQUITO------------------------------

function tamanhoAleatorio(){

	var classe = Math.floor(Math.random() * 3)

	switch(classe){
	case 0:
		return "mosquito1"
	case 1:
		return "mosquito2"
	case 2:
		return "mosquito3"
	}
}

//FUNCAO LADO ALEATORIO MOSQUITO------------------------------

function ladoAleatorio(){

	var classe = Math.floor(Math.random() * 2)

	switch(classe){
	case 0:
		return "ladoA"
	case 1:
		return "ladoB"
	}
}





