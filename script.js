"use strict";

// ORDENAR EN ORDEN CRONOLOGICO EL JSON OBTENIDO MEDIANTE .sort
const zeldaTime = [
  {
    date: 2000,
    title: "The Legend of Zelda: The Wind Waker",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/79/The_Legend_of_Zelda_The_Wind_Waker.jpg",
    text: "The game is set on a group of islands in a vast sea, a departure for the series. The player controls series protagonist Link as he attempts to save his sister from the sorcerer Ganon and becomes embroiled in a struggle for the Triforce, a sacred wish-granting relic. Aided by allies including pirate captain Tetra – an incarnation of Princess Zelda – and a talking boat named the King of Red Lions, Link sails the ocean, explores islands, and traverses dungeons to acquire the power necessary to defeat Ganon. Wind, which facilitates sailing, plays a prominent role and can be controlled with a magic conductor's baton called the Wind Waker",
  },
  {
    date: 2002,
    title: "The Legend of Zelda: Majora's Mask",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg",
    text: "Majora's Mask earned widespread acclaim from critics and is widely considered one of the best video games ever made. It received praise for the gameplay, graphics, story and has been noted for its darker tone and themes compared to the other titles in the franchise as well for its distinct art style and level design",
  },
  {
    date: 2011,
    title: "The Legend of Zelda: Skyward Sword",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/79/The_Legend_of_Zelda_The_Wind_Waker.jpg",
    text: "Taking the role of series protagonist Link, players navigate the floating island of Skyloft and the land below it, completing quests that advance the story and solving environmental and dungeon-based puzzles. The mechanics and combat, the latter focusing on attacking and blocking with sword and shield, are reliant on the Wii MotionPlus peripheral.",
  },
  {
    date: 1987,
    title: "The Legend of Zelda: A Link to the Past",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_SNES_Game_Cover.jpg",
    text: "Released to critical and commercial success, A Link to the Past was a landmark game for Nintendo and is considered one of the greatest video games of all time. It was ported to the Game Boy Advance as A Link to the Past and Four Swords in 2002; A Link to the Past sold 6.5 million copies across both platforms as of 2004.",
  },
  {
    date: 1998,
    title: "The Legend of Zelda: Ocarina of Time",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg",
    text: "Ocarina of Time received widespread acclaim from critics and consumers and won several awards and accolades, who praised its visuals, sound, gameplay, soundtrack, and writing. It has been ranked by numerous publications as the greatest video game of all time, and is the highest-rated game of all time on the review aggregator Metacritic",
  },
  {
    date: 1987,
    title: "Zelda II: The Adventure of Link",
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/fd/Zelda_II_The_Adventure_of_Link_box.jpg",
    text: "The Adventure of Link is a direct sequel to the original The Legend of Zelda, again involving the protagonist Link, on a quest to save Princess Zelda, who has fallen under a sleeping spell. The game's emphasis on side-scrolling and role-playing elements is a significant departure from its predecessor",
  },
  {
    date: 2006,
    title: "The Legend of Zelda: Twilight Princess",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/79/The_Legend_of_Zelda_The_Wind_Waker.jpg",
    text: "The game is set on a group of islands in a vast sea, a departure for the series. The player controls series protagonist Link as he attempts to save his sister from the sorcerer Ganon and becomes embroiled in a struggle for the Triforce, a sacred wish-granting relic. Aided by allies including pirate captain Tetra – an incarnation of Princess Zelda – and a talking boat named the King of Red Lions, Link sails the ocean, explores islands, and traverses dungeons to acquire the power necessary to defeat Ganon. Wind, which facilitates sailing, plays a prominent role and can be controlled with a magic conductor's baton called the Wind Waker",
  },
  {
    date: 1991,
    title: "The Legend of Zelda: Link's Awakening",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/Link%27s_Awakening.png",
    text: "Link's Awakening was critically and commercially successful. Critics praised the game's depth and number of features; complaints focused on its control scheme and monochrome graphics",
  },
  {
    date: 2017,
    title: "The Legend of Zelda: Breath of the Wild",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    text: "Breath of the Wild received universal acclaim for its open-ended gameplay and attention to detail. Critics called it a landmark in open world game design, although it received minor criticism for its technical performance at launch. It won several game of the year awards and has since been cited as one of the greatest video games of all time. By 2021 it had sold over 27 million copies, making it one of the best-selling video games of all time.",
  },
  {
    date: 1986,
    title: "The Legend of Zelda",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png",
    text: "The Legend of Zelda, originally released in Japan as The Hyrule Fantasy: Zelda no Densetsu, is a 1986 action-adventure video game developed and published by Nintendo and designed by Shigeru Miyamoto and Takashi Tezuka. Set in the fantasy land of Hyrule, the plot centers on an elf-like boy named Link, who aims to collect the eight fragments of the Triforce of Wisdom in order to rescue Princess Zelda from the antagonist, Ganon",
  },
];

//// MEDIANTE .sort y un bucle if-else if ordenamos segun la propiedad especifica date

zeldaTime.sort((a, b) => {
  if (a.date < b.date) {
    return -1;
  } else if (a.date > b.date) {
    return 1;
  } else {
    return 0;
  }
});

console.log(zeldaTime);

// UNA VEZ ORDENADOS LE EMPEZAMOS A METER EN EL HTML CADA UNO DE LOS EVENTOS SEGUN LOS DATOS ESPECIFICOS(AÑO, TITULO, IMAGEN Y TEXTO)

//FUNCION EN LA QUE AGRUPAMOS TODOS LOS DATOS MEDIANTE BUCLE FOR
function mostrarZelda(e) {
  const nUl = document.querySelector("#eUlZelda");

  for (const zelda of zeldaTime) {
    const nLi = document.createElement("li");
    nUl.appendChild(nLi);

    const texto = `${zelda.date} : ${zelda.title}.  ${zelda.text}  ${zelda.image}`;
    const nTexto = document.createTextNode(texto);
    nLi.appendChild(nTexto);
  }
}
window.addEventListener("DOMContentLoaded", mostrarZelda);
