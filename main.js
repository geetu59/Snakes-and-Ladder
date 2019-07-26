//initially
var scores,activePlayer,game;
init();
function init()
{
game=true;
scores=[0,0];
activePlayer=0;
document.querySelector('.player-0').textContent='PLAYER 1';
document.querySelector('.player-1').textContent='PLAYER 2';
document.querySelector('.position-0').textContent=0;
document.querySelector('.position-1').textContent=0;
document.querySelector('.diceImage').style.display='none';
document.querySelector('.player1').classList.add('active');
document.querySelector('.player2').classList.remove('active');
document.querySelector('.col-md-8').style.top='-322px';
$('.position-0custom').css("backgroundColor","none");;
$('.position-0custom').css("display","none");
$( ".circle" ).removeClass('position-0custom');
$('.position-1custom').css("backgroundColor","none");;
$('.position-1custom').css("display","none");
$( ".circle" ).removeClass('position-1custom');
}

document.querySelector('.newGame').addEventListener('click',function(){init();});
document.querySelector('.roll').addEventListener('click',function(){
	var prescores=[];
	if(game){
	var dice=Math.floor(Math.random()*6)+1;
	//document.querySelector('.position-'+activePlayer+'custom').style.backgroundColor='none';
	//document.querySelector('.position-'+activePlayer+'custom').style.display='none';
	//document.querySelector('.circle').classList.remove('position-'+activePlayer+'custom');
	$('.position-'+activePlayer+'custom').css("backgroundColor","none");;
	$('.position-'+activePlayer+'custom').css("display","none");
	$( ".circle" ).removeClass('position-'+activePlayer+'custom');
	scores[activePlayer]+=dice;
	prescores[activePlayer]=scores[activePlayer];
	document.querySelector('.diceImage').style.display='block';
	document.querySelector('.dice').src='images/dice-'+dice+'.png';
	
	if(scores[activePlayer]<=100){
	document.querySelector('.position-'+activePlayer).textContent=scores[activePlayer];
	var selectedPlayerColor=document.querySelector('.position-'+activePlayer).classList.item(1);
	//document.querySelector("#"+scores[activePlayer]+' .circle').style.display='block';
	//document.querySelector("#"+scores[activePlayer]+' .circle').classList.add('position-'+activePlayer+'custom');
	//document.querySelector("#"+scores[activePlayer]+' .circle').style.backgroundColor=selectedPlayerColor;
		
	if(scores[activePlayer]==99){
		document.querySelector('.position-'+activePlayer).textContent='64';  scores[activePlayer]=64;
		$("#"+scores[activePlayer]+' .circle').css("display","block");
		$("#"+scores[activePlayer]+' .circle').addClass('position-'+activePlayer+'custom');
		$("#"+scores[activePlayer]+' .circle').css("backgroundColor",selectedPlayerColor);
		}
	else if(scores[activePlayer]==73){
		document.querySelector('.position-'+activePlayer).textContent='54';  scores[activePlayer]=54;
		$("#"+scores[activePlayer]+' .circle').css("display","block");
		$("#"+scores[activePlayer]+' .circle').addClass('position-'+activePlayer+'custom');
		$("#"+scores[activePlayer]+' .circle').css("backgroundColor",selectedPlayerColor);
		}
	else if(scores[activePlayer]==43){
		document.querySelector('.position-'+activePlayer).textContent='24';  scores[activePlayer]=24;
		$("#"+scores[activePlayer]+' .circle').css("display","block");
		$("#"+scores[activePlayer]+' .circle').addClass('position-'+activePlayer+'custom');
		$("#"+scores[activePlayer]+' .circle').css("backgroundColor",selectedPlayerColor);
		}
	else if(scores[activePlayer]==29){
		document.querySelector('.position-'+activePlayer).textContent='7';  scores[activePlayer]=7;
		$("#"+scores[activePlayer]+' .circle').css("display","block");
		$("#"+scores[activePlayer]+' .circle').addClass('position-'+activePlayer+'custom');
		$("#"+scores[activePlayer]+' .circle').css("backgroundColor",selectedPlayerColor);
		}
	else if(scores[activePlayer]==62){
		document.querySelector('.position-'+activePlayer).textContent='81';  scores[activePlayer]=81;
		$("#"+scores[activePlayer]+' .circle').css("display","block");
		$("#"+scores[activePlayer]+' .circle').addClass('position-'+activePlayer+'custom');
		$("#"+scores[activePlayer]+' .circle').css("backgroundColor",selectedPlayerColor);
		}
	else if(scores[activePlayer]==42){
		document.querySelector('.position-'+activePlayer).textContent='63';  scores[activePlayer]=63;
		$("#"+scores[activePlayer]+' .circle').css("display","block");
		$("#"+scores[activePlayer]+' .circle').addClass('position-'+activePlayer+'custom');
		$("#"+scores[activePlayer]+' .circle').css("backgroundColor",selectedPlayerColor);
		}
	else if(scores[activePlayer]==56){
		document.querySelector('.position-'+activePlayer).textContent='93';  scores[activePlayer]=93;
		$("#"+scores[activePlayer]+' .circle').css("display","block");
		$("#"+scores[activePlayer]+' .circle').addClass('position-'+activePlayer+'custom');
		$("#"+scores[activePlayer]+' .circle').css("backgroundColor",selectedPlayerColor);
		}
	else if(scores[activePlayer]==50){
		document.querySelector('.position-'+activePlayer).textContent='69';  scores[activePlayer]=69;
		$("#"+scores[activePlayer]+' .circle').css("display","block");
		$("#"+scores[activePlayer]+' .circle').addClass('position-'+activePlayer+'custom');
		$("#"+scores[activePlayer]+' .circle').css("backgroundColor",selectedPlayerColor);
		}
	else if(scores[activePlayer]==33){
		document.querySelector('.position-'+activePlayer).textContent='49';  scores[activePlayer]=49;
		$("#"+scores[activePlayer]+' .circle').css("display","block");
		$("#"+scores[activePlayer]+' .circle').addClass('position-'+activePlayer+'custom');
		$("#"+scores[activePlayer]+' .circle').css("backgroundColor",selectedPlayerColor);
		}
	else if(scores[activePlayer]==13){
		document.querySelector('.position-'+activePlayer).textContent='46';  scores[activePlayer]=46;
		$("#"+scores[activePlayer]+' .circle').css("display","block");
		$("#"+scores[activePlayer]+' .circle').addClass('position-'+activePlayer+'custom');
		$("#"+scores[activePlayer]+' .circle').css("backgroundColor",selectedPlayerColor);
		}
	else if(scores[activePlayer]==4){
		document.querySelector('.position-'+activePlayer).textContent='25';  scores[activePlayer]=25;
		$("#"+scores[activePlayer]+' .circle').css("display","block");
		$("#"+scores[activePlayer]+' .circle').addClass('position-'+activePlayer+'custom');
		$("#"+scores[activePlayer]+' .circle').css("backgroundColor",selectedPlayerColor);
		}
	else if(scores[activePlayer]==100) {
		document.querySelector('.player-'+activePlayer).textContent='WINNER';
		$("#"+scores[activePlayer]+' .circle').css("display","block");
		$("#"+scores[activePlayer]+' .circle').addClass('position-'+activePlayer+'custom');
		$("#"+scores[activePlayer]+' .circle').css("backgroundColor",selectedPlayerColor);
		document.querySelector('.player1').classList.remove('active');
		document.querySelector('.player2').classList.remove('active');
		game=false;
		}
		$("#"+scores[activePlayer]+' .circle').css("display","block");
		$("#"+scores[activePlayer]+' .circle').addClass('position-'+activePlayer+'custom');
		$("#"+scores[activePlayer]+' .circle').css("backgroundColor",selectedPlayerColor);
		activePlayer==0?activePlayer=1:activePlayer=0;
		document.querySelector('.player1').classList.toggle('active');
		document.querySelector('.player2').classList.toggle('active');
		document.querySelector('.col-md-8').style.top='-425px';	
	}//if <=100
	else{
		scores[activePlayer]=scores[activePlayer]-dice;
		$("#"+scores[activePlayer]+' .circle').css("display","block");
		$("#"+scores[activePlayer]+' .circle').addClass('position-'+activePlayer+'custom');
		$("#"+scores[activePlayer]+' .circle').css("backgroundColor",selectedPlayerColor);
		activePlayer==0?activePlayer=1:activePlayer=0;
		document.querySelector('.player1').classList.toggle('active');
		document.querySelector('.player2').classList.toggle('active');
		document.querySelector('.col-md-8').style.top='-425px';	
		}
	}//game=true
	});
