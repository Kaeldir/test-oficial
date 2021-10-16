const PROMPTS = {
  0: {
    "question": "¿De qué color es la vela que me regalaste?",
    "options": {
      "Lavanda floral": "La lavanda huele bien pero la vela no es de este color!",
      "Púrpura de Tiro": "No sé dónde está tiro, pero la vela no es de este color!",
      "Sésamo": "No sé por qué se llama así, si el sésamo no tiene este color; pero la vela tampoco x)",
      "Morado": "No tiene un nombre exótico como los demás, pero este color es el correcto!",
    },
    "answer": "Morado",
    "buttonSpecial": cardColor,
  },
  1: {
    "question": "¿Cuál de estas dos opciones es mejor para poner a una pizza?",
    "options": {
      "Aceitunas negras": "<strong>¡¡¡ASÍ QUE ADMITES QUE LAS ACEITUNAS SON LO MEJOR DE LO MEJOR!!!</strong>\nNo sólo sirven de decoración, sino que su sabor refinado y particular complementan de manera perfecta el resto de ingredientes.",
      "Piña": "Uj... ¡No! ¡No tienes ni idea de la vida y no se te debería permitir acercarte a menos de 200 metros de una pizza!",
    },
    "answer": "Aceitunas negras",
    "cardSpecial": evasiveButton,
  },
  2: {
    "question": "¿En qué año se fundó la USAL?",
    "options": {
      "1.218": "Qué bien te lo sabes, ¿eh? Cómo se nota el amor que sientes por tu querida universidad...",
      "1.492": "Ese año es el descubrimiento de América, o al menos cuando Colón se perdió y acabó allí. Me temo que la USAL ya llevaba tiempo construída por aquél entonces...",
      "1.440": "¡Este es el año en el que se inventó la imprenta! Más de dos siglos después de que se fundara tu universidad. Me pregunto si estudiaban con libros escritos a mano...",
      "1.211": "Ese año se completó la construcción de la catedral de Santiago de Compostela. ¡Algún día quiero visitarla! (guiño, guiño)"
    },
    "answer": "1.218",
  },
  3: {
    "question": "¿Cuál es la población de Salamanca?",
    "options": {
      "143.978": "Y la mitad de ellos viejunos, según tú. ¿Los has contado o cómo va la cosa?",
      "331.577": "Nope, ¡esa es la población de Alicante! Aunque si te soy sincero, me da la sensación de que hay mucha más gente en Salamanca...",
      "220.020": "Esa es la población de Oviedo. ¿Que por qué Oviedo? No sé, estaba buscando una que estuviera entre la de Salamanca y la de Alicante.",
      "34.466": "Esa es la población de Skövde, el pueblo/ciudad en el que estudié el máster. Chiquitito, ¿verdad?",
    },
    "answer": "143.978",
  },
  4: {
    "question": "Su nombre oficial es Bell, pero ¿cuál es su <strong>VERDADERO</strong> nombre?",
    "options": {
      "Bellinchi": "Suena bonito, te lo tengo que reconocer. Pero ambos sabemos que ese nombre no capta la verdadera esencia malvada de Bell.",
      "Bellunchusca": "Qué te puedo decir, es su nombre. No lo decidí yo.",
      "Taco Bell": "Tal vez después de convertirla en un purrito...",
      "Bell": "Seguro que has pensado: 'Las demás son respuestas trampa. Este es el nombre en el que está basado.' ¡JA! ¡¡¡SI PIENSAS QUE ESTE TEST TIENE SENTIDO, TE EQUIVOCAS!!!",
    },
    "answer": "Bellunchusca",
  },
  5: {
    "question": "Acabas de cumplir 24 tacos. ¿Te hace sentir vieja? ¡Pues adivina cuántos segundos has vivido!",
    "options": {
      "756.864.000": "Increíble, ¿verdad? ¡Y los que te quedan!",
      "201.304.186": "¡Eso sólo serían 6 añitos! Eres joven, ¡pero tampoco te pases!",
      "503.981.200": "Eso son aproximadamente 16 años, la edad que te echan en Hungría 🤣",
      "1.009.152.000": "Eso es lo que he vivido yo 😅 Un <strong>BILLÓN</strong> de segundos. Flipa. Y los que me quedan pero contigo...",
    },
    "answer": "756.864.000",
  },
  6: {
    "question": "¿Cuál de estas afirmaciones sobre las marmotas es cierta?",
    "options": {
      "Además de <em>marmot</em>, y <em>groundhog</em>, también se le puede llamar <em>woodchuck</em>": "How much wood would a woodchuck chuck if a woodchuck could chuck wood? He would chuck, he would, as much as he could, and chuck as much wood as a woodchuck would if a woodchuck could chuck wood.",
      "Viven sobre todo por América central y Norteamérica" : "Casi, pero en realidad están repartidas por Nortemérica, Europa y Asia.",
      "Nacen con incisivos muy largos, y se van desgastando conforme envejecen": "Todo lo contrario. Sus dientes crecen durante toda su vida, por lo que tienen que desgastarlo mordiendo cosas.",
      "Su día es el 3 de Febrero" : "Eres tan dormilona que podrías llegar un día tarde al día de la marmota, pero no. Es el 2 de Febrero.",
    },
    "answer": "Además de <em>marmot</em>, y <em>groundhog</em>, también se le puede llamar <em>woodchuck</em>",
  },
  7: {
    "question": "Según <em>www.significadodenombres.com.es</em>, ¿qué significa tu nombre?",
    "options": {
      "Valiente y bella": "Totalmente cierto. Y buena, con buenos valores, inteligente, sexy, divertida, maravillosa...",
      "La elegida de Dios": "Ya me jodería que tu nombre significara eso, con la coña de que soy Jesús xD",
      "La dama o la señora": "Ese es el significado de Marta. Así que ya sabemos que Max es una señorita xD",
      "Luminosa o resplandeciente": "Eso es para Lucas. El señor Kiwi es un ser de luz, demostrado.",
    },
    "answer": "Valiente y bella",
  },
  8: {
    "question": "¿Cuál de estas afirmaciones sobre Edgar Allan Poe es cierta?",
    "options": {
      "Todas son ciertas": "Muy fácil para ti, supongo.",
      "Se casó con su prima de 13 años cuando él tenía 27": "¡Yikes! Y yo que pensaba que nuestra diferencia de edad era ya bastante... Si a eso le sumamos incesto... En fin, tiempos distintos x) Todas eran ciertas, por cierto (:",
      "Se quedó huérfano antes de cumplir los 4 años": "Afortunadamente para él, un mercader adinerado lo adoptó. Aunque ambos sabemos que su vida no fue un campo de rosas... Todas eran ciertas, por cierto (:",
      "Publicó su primer libro con 18 años": "Y yo jugando a las cartas en la facultad politécnica con esa edad... Todas eran ciertas, por cierto (:",
    },
    "answer": "Todas son ciertas",
  },
  9: {
    "question": "¿Cuál de las siguientes curiosidades sobre Hungría es cierta?",
    "options": {
      "Se considera maleducado chocar las jarras de cerveza antes de beber": "Todo lo contrario. Según el mito, después de que los Austríacos celebraran su victoria contra Hungría chocando jarras de cerveza, los Húngaros prometieron no volver a hacerlo.",
      "El primer restaurante extranjero de comida rápida que se abrió fue británico": "Fue un maldito McDonald's.",
      "Ha ganado más de 465 medallas olímpicas": "¡Es el segundo país con más medallas per capita <strong>del mundo</strong>!",
      "El alfabeto húngaro tiene 42 letras": "Tiene 44. Le sobran como unas 20, creo.",
    },
    "answer": "Ha ganado más de 465 medallas olímpicas",
  },
  10: {
    "question": "¿Cuánto te quiere tu novio?",
    "options": {
      "Lo suficiente como para ver musicales conmigo": "Es decir, infinitamente. Porque todo el mundo sabe que los musicales son un bodrio y ver uno supone un sacrificio enorme",
      "Muchísimo": "A ver, sí. Pero eso es quedarse un poco cortos, creo.",
      "Tanto como para hacerme este estúpido juego": "No estoy seguro de si esto es una prueba de amor o un experimento raro, pero al menos el regalo es original, ¿no? xD",
      "Todas las anteriores y más": "Ninguna acción o palabra le hará justicia a cuánto te quiero, mi amor. Y cada momento que disfrutamos juntos, más.",
    },
    "answer": "Todas las anteriores y más",
  },
  11: {
    "question": "Vamos a ver cómo andas de memoria. ¿A cuál de estos juegos de Jackbox <strong>NO</strong> has jugado todavía?",
    "options": {
      "Among Us": "Respuesta trampa. Among us no es un juego de Jackbox x)",
      "Drawful": "A ese sí que hemos jugado! Es el de dibujar lo que te piden y luego intentar adivinar qué es lo de los demás.",
      "You don't know Jack!": "A menos que lo hayas jugado con Beñat y cia y no me lo hayas dicho, a este no has jugado x) Es otro juego de trivia, pero con las preguntas un tanto enrevesadas...",
      "Trivia Murder Party": "O no has leído bien el enunciado o no me lo explico. ¡Si este te encanta y hemos jugado un montón de veces!",
    },
    "answer": "You don't know Jack!",
  },
  12: {
    "question": "¿Cuál de estos botones es el color 'Labrador'?",
    "options": {
      "rgb(37, 150, 190)": "Aparentemente, 'Labrador' no es el color de los perros labrador sino un azul que toma su nombre del mineral labradorite.",
      "rgb(238, 216, 181)": "Típico color de labrador, ¿verdad? Pues no era este x)",
      "rgb(192, 192, 192)": "Un labrador plateado molaría mil, pero no viene de ahí el color, no.",
      "rgb(169, 80, 50)": "¡Nunca he visto un labrador pelirrojo!",
    },
    "answer": "rgb(37, 150, 190)",
    "cardSpecial": buttonColor,
    "buttonSpecial": cardColor,
  },
  13: {
    "question": "La subcultura gótica lleva ya desde finales de los 70 pero ¿dónde se dice que se originó?",
    "options": {
      "Españita": "Sí, claro. Porque España siempre ha sido un ejemplo a seguir de modernidad y pluriculturalidad xD",
      "Estados Unidos": "Podría haber sido, y más contando con escritores como Poe; pero no. No fue en Estados Unidos.",
      "Alemania": "Bueno, si aplicamos el concepto de 'gótico' a rajatabla... Sí, había muchos godos en lo que ahora se conoce como Alemania xD",
      "Reino Unido": "Según la wiki, apareció dentro de la escena del rock gótico, una derivación del post-punk con influencias del glam rock. El nombre, subcultura gótica, deriva directamente del género musical.",
    },
    "answer": "Reino Unido",
    //"buttonSpecial": cardBackground,
  },
  14: {
    "question": "A ver si te quedas con los nombres que te voy soltando... ¿Cómo se llaman mis mejores amigos?",
    "options": {
      "Tomás, Pablo, Antonio y Miguel": "Dos de cuatro, pero no. Además, Pablo es el chico que una vez tiró un juego de mesa al suelo porque iba perdiendo, así que de amigo poco XD",
      "Peter, Aitor, Daniel y Francisco": "Creo que nunca he conocido a un 'Aitor' xD",
      "Tomás, Pedro, Miguel y Andrés": "Junto conmigo, los 5 integrantes del clan más cutre del Guild Wars 2 xD ¡Buena memoria!",
      "Francisco, Tomás, Miquel y Andrés": "Casi, casi. El segundo nombre de Tomás es Francisco, así que cuentan como la misma persona xD",
    },
    "answer": "Tomás, Pedro, Miguel y Andrés",
  },
  15: {
    "question": "Además de ser el cumpleaños de mi recién nacido sobrino, ¿qué otra cosa se celebra el 9 de octubre?",
    "options": {
      "El día de la Comunidad Valenciana": "Se conmemora la entrada a la ciudad de Valencia del rey de Aragón Jaime I El Conquistador (y por eso a veces llamo a mi sobrino 'Jaume' x))",
      "El día de Alicante": "¿Hay un día de Alicante? Ni idea xD",
      "El día internacional de la croqueta": "Nah, eso es el 16 de Enero. Sí, hay un día de la croqueta.",
      "No se celebra nada más": "Se celebran muchas cosas ese día, ¡lo acabo de mirar!",
    },
    "answer": "El día de la Comunidad Valenciana",
  },
  16: {
    "question": "Está claro que Halloween 🎃 es una festividad que mola mucho, pero ¿cuál es su origen?",
    "options": {
      "Una fiesta gaélica llamada 'Samhein'": "Obviamente una fiesta pagana, que podría haber sido luego cristianizada en forma de 'día de todos los santos'.",
      "La celebración cristiana de la víspera del día de todos los santos": "Aunque es una de las teorías, teniendo en cuenta cómo la iglesia 'adaptaba' creencias paganas para extenderse, personalmente creo que no es la correcta."
    },
    "answer": "Una fiesta gaélica llamada 'Samhein'",
  },
  17: {
    "question": "¿Con cuál de las siguientes celebridades compartes cumpleaños?",
    "options": {
      "Oscar Wilde": "Oscar Fingal O'Flahertie Wills Wilde (toma nombraco). No está mal compartir cumpleaños con uno de los dramaturgos más destacados del siglo XIX (o de todos los tiempos, ya que estamos).",
      "Miguel Delibes": "Nació un día más tarde, el 17 de Octubre x)",
      "Anne Rice": "Nació el 4 de Octubre.",
      "Todos nacieron el 16 de Octubre": "Nah, sólo hay uno de estos escritores que nació el 16 de Octubre 🙂",
    },
    "answer": "Oscar Wilde",
  },
  18: {
    "question": "Según el todopoderoso horóscopo, tú eres Libra y yo Capricornio. En teoría, ¿son signos compatibles o no?",
    "options": {
      "Compatibles": "Se supone que nos sentiríamos atraídos por nuestro intelecto, pero mi fijación con el trabajo sería un obstáculo. Puedes estar tranquila, estoy desempleado xD",
      "Incompatibles": "Se supone que nos sentiríamos atraídos por nuestro intelecto, pero mi fijación con el trabajo sería un obstáculo. Puedes estar tranquila, estoy desempleado xD",
    },
    "answer": "Incompatibles",
  },
  19: {
    "question": "Vale, eres libra; pero ¿sabes qué animal serías en el horóscopo chino?",
    "options": {
      "La rata 🐀": "Aunque yo suela decir que eres un roedor, no es ese animal, no.",
      "El tigre 🐅": "Es uno de los animales que más molan del horóscopo chino, pero no has tenido esa suerte, no.",
      "El dragón 🐉": "Nah, ese soy yo. Porque molo un copón 😎",
      "El buey 🐂": "¡Ding, ding, ding! Como animal no mola mucho, pero eh, se supone que eres tranquila y paciente, irradias amor e infundes respeto. It's something!",
    },
    "answer": "El buey 🐂",
  },
}

const TOTAL_ROUNDS = 10;
var promptsLeft = [];
var score = 0;
var roundNumber = 1;


startScreen();


$("#next-button").click(function(){
  roundNumber += 1;
  $(".flip-card-inner").toggleClass("is-flipped");
  newCard(chooseRandomPrompt());
});

$("#finish-button").click(function(){
  $(".answer-button").remove();
  $("#question").html("Vaya, no te ha salido muy bien el test.... ¡Mejor inténtalo otra vez!");
  retryButton();
  if (score > 6){
    $("#question").html("¡Enhorabuena! No te ha salido nada mal, te mereces un premio! Intenta clavarlo la próxima vez para recibir el diploma oficial de persona de 24 años! ☺");
    $(".answer-button-div").prepend($("<button class=answer-button>Receta del caramelo</button>").click(function(){
      window.open("https://drive.google.com/file/d/1qEOA31d1quTEdO0po_Twev-1pSbwJRpa/view?usp=sharing", "_blank");
    }));
  }
  if (score >= 9){
    $("#question").html("¡Lo has clavado! Vaya, lo he puesto demasiado fácil? Espero que te haya gustado el pequeño juego y disfruta de tu diploma oficial ☺");
    $(".answer-button-div").prepend($("<button class=answer-button>Diploma</button>").click(function(){
      window.open("https://drive.google.com/file/d/1gKqyfD-G7TIwR1v33yxRKozNXHCYa0XX/view?usp=sharing", "_blank");
    }));
  }
  $(".flip-card-inner").toggleClass("is-flipped");
});

function startScreen(){
  $("#question").html("¡Feliz cumple, cariño!");
  $("#question").append("<p id=introP>Te he preparado un pequeño test <em>(que se que te encantan xD)</em> para ver cuánto sabes sobre ti misma y el mundo que te rodea. ¡Si te sale bien hay premio!</p>");
  $(".answer-button-div").append($("<button id=introBtn>¡Empezar!</button>").click(startGame));
}

function newCard(promptNumber){
  $(".answer-button").remove();

  $("#question").html(PROMPTS[promptNumber]["question"]);

  for (const [key, value] of Object.entries(PROMPTS[promptNumber]["options"])){
    if (Math.random() < 0.5) $(".answer-button-div").append($("<button class=answer-button snark=value></button>").html(key).attr("snark", value));
    else $(".answer-button-div").prepend($("<button class=answer-button snark=value></button>").html(key).attr("snark", value))
  }

  if (PROMPTS[promptNumber]["cardSpecial"]) PROMPTS[promptNumber]["cardSpecial"]();

  $(".answer-button").click(function(target){
    let answer = (target.currentTarget.innerHTML === PROMPTS[promptNumber]["answer"]) ? "¡Correcto!" : "¡Nope!";
    if (answer === "¡Correcto!") updateScore(1);
    else updateScore(0);
    $("#answer").html(answer);
    $("#snark").html(target.currentTarget.getAttribute("snark"));
    if (PROMPTS[promptNumber]["buttonSpecial"]) PROMPTS[promptNumber]["buttonSpecial"](target);
    else $(".flip-card-back").css("background-color", "#F17105");
    $(".flip-card-inner").toggleClass("is-flipped");
  });
  if (roundNumber >= TOTAL_ROUNDS){
    $("#next-button").css("display","none");
    $("#finish-button").css("display", "inline-block");
  }
  else{
    $("#next-button").css("display","inline-block");
    $("#finish-button").css("display", "none");
  }
}


function repopulatePromptPicker(){
  promptsLeft = [];
  for (const [key, value] of Object.entries(PROMPTS)){
    promptsLeft.push(key);
  }
}


function chooseRandomPrompt(){
  let randomNumber = Math.floor(Math.random()*(promptsLeft.length));
  let newPrompt = promptsLeft[randomNumber];
  promptsLeft.splice(randomNumber, 1);
  console.log(promptsLeft.length);
  return newPrompt;
}


function updateScore(points){
  if (points > 0) $("#score").addClass("score-up");
  else $("#score").addClass("score-down");
  score += points;
  $("#score").text("Puntos: " + score);
  setTimeout(() => {$("#score").removeClass("score-down").removeClass("score-up");}, 1000);
}


function cardColor(target){
  let color;
  switch(target.currentTarget.innerHTML){
    case ("Lavanda floral"):
      color = "rgb(181,126,220)";
      break;
    case ("Púrpura de Tiro"):
      color = "rgb(102,2,60)";
      break;
    case ("Sésamo"):
      color = "rgb(255,140,105)";
      break;
    case ("Morado"):
      color = "rgb(197,75,140)";
      break;
    default:
      color = target.currentTarget.innerHTML;
      break;
  }
  $(".flip-card-back").css("background-color", color);
}


function buttonColor(){
    for(let btn of $(".answer-button")){
      btn.style = "background-color: " + btn.innerHTML;
    }
}


function evasiveButton(){
  $(".answer-button").mouseover(function(btn){
    if (btn.currentTarget.innerHTML === "Piña"){
      btn.currentTarget.style = "display: none";
      setTimeout(function() {
        btn.currentTarget.style = "display: inline-block";
      }, 1000);
    }
  });
}


function retryButton(){
  $(".answer-button-div").append($("<button class=answer-button>Volver a intentarlo</button>").click(function(){
    $(".flip-card-inner").toggleClass("is-flipped");
    roundNumber = 1;
    updateScore(-score);
    repopulatePromptPicker();
    $(".flip-card-inner").toggleClass("is-flipped");
    newCard(chooseRandomPrompt());
  }));
}


function startGame(){
  $("#introP").remove();
  $("#introBtn").remove();
  $("h3").css("display", "inline-block");
  repopulatePromptPicker();
  newCard(chooseRandomPrompt());
}
