function Pokemon(nombre,color,poderDeAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad =0;
  this.vida = 100;
  this.poderDeAtaque = poderDeAtaque;

  this.mostrarPokemon = function(){
     return ("Hola, soy " + this.nombre + " " + "y soy de color " + this.color + " " + "y mi poder de ataque es " + this.poderDeAtaque + "</br>");
}

this.aumentarAmistad = function(valor){
  this.nivelDeAmistad = this.nivelDeAmistad + valor
}

this.atacar = function(pokemon){
  pokemon.vida = pokemon.vida - this.poderDeAtaque
   }
};

const Squirtle = new Pokemon('Squirtle','celeste',200)
const Pikachu = new Pokemon ('Pikachu', 'amarillo', 100)
const Charmander = new Pokemon('Charmander','rojo',20)


Pikachu.atacar(Charmander);
Squirtle.atacar(Pikachu);

console.log(Pikachu.mostrarPokemon());
console.log(Charmander.mostrarPokemon());
console.log(Charmander.vida);
console.log(Pikachu.vida);


function atacaPoke(){
	var pokeNum1 = document.getElementById("pk1").value;
	var pokeNum2 = document.getElementById("pk2").value;

	var valorRandom = Math.random(0,100).toFixed(3);

	var pokem1 = new Pokemon(pokeNum1, 'amarillo', valorRandom);
	var pokem2 = new Pokemon(pokeNum2, 'rojo', valorRandom);

	var res = document.getElementById("resul");


		if(pokeNum1 == pokeNum2){
			alert("No puedes atacarte a ti mismo");
		}else{
			pokem1.atacar(pokem2)
			var texto = ( "<img src='http://vignette2.wikia.nocookie.net/pokemon/images/1/15/007Squirtle_XY_anime.png/revision/latest?cb=20140916184418.jpg' height='400'/>"+'<br><b>'+ pokeNum1 + "</b> ataco a <b>" + pokeNum2 + "</b> y <b>" + pokeNum2 + "</b> tiene <b>" + pokem2.vida + "</b> de vida restante.");
			res.innerHTML = texto
		}
}
