let activties = [
  {
    name: "Clean your room",
    description: "It's a mess and so are you",
    image: "./images/broom.png"
  },
  {
    name: "Bake something",
    description: "And then you can eat it",
    image: "./images/cupcake.png"
  },
  {
    name: "Solo dance party",
    description: "Throw it back",
    image: "./images/dance.png"
  },
  {
    name: "Impulsively dye your hair",
    description: "No one will see it if it turns out really bad",
    image: "./images/hair.png"
  },
  {
    name: "Annoy your friends",
    description: "They are bored too",
    image: "./images/phone.png"
  },
  {
    name: "Exercise",
    description: "When everyone sees me again I will be HOT",
    image: "./images/exercise.png"
  },
  {
    name: "Find a new show to watch",
    description: "The possibilities are endless!",
    image: "./images/tv.png"
  },
  {
    name: "Take a nap",
    description: "You deserve it after a long day of  doing nothing",
    image: "./images/sleep.png"
  },
  {
    name: "Make a craft",
    description: "Bring out your inner pinterest goddess",
    image: "./images/paint.png"
  },
  {
    name: "Animal Crossing",
    description: "The only place where peace exists",
    image: "./images/game.png"
  },
  {
    name: "Do a puzzle",
    description: "A wholesome, relaxing activity",
    image: "./images/puzzle.png"
  },
  {
    name: "Window shop for cats on petfider",
    description: "I want a cat so bad",
    image: "./images/cat.png"
  },
  {
    name: "Yoga",
    description: "Align those chakras whatever that means",
    image: "./images/yoga.png"
  }
];

function generate() {
  let choice = activties[Math.floor(Math.random() * activties.length)];
  console.log(choice);
  document.querySelector(".before").style.display = "none";
  document.querySelector(".after").style.display = "block";
  document.querySelector(".today").style.display = "block";

  document.querySelector(".title").innerText = choice.name;

  document.querySelector(".description").innerText = choice.description;

  let actimg = document.querySelector(".actimage");
  actimg.src = choice.image;
  console.log(choice.name);
}
