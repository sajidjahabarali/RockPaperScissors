var value = Math.floor(Math.random()*3+1);
console.log(value);

if(value===1){
  document.querySelector('#choice').innerHTML = "rock";
  document.querySelector('img').setAttribute('src', 'img/rock.png');
}
else if(value===2){
  document.querySelector('#choice').innerHTML = "paper";
  document.querySelector('img').setAttribute('src', 'img/paper.png');
}
else{
  document.querySelector('#choice').innerHTML = "scissors";
  document.querySelector('img').setAttribute('src', 'img/scissors.png');
}
