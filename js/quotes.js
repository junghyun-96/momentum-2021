const quotes = [
  {
    quote: "I'm gonna make sure that tomorrow is another day.",
    author: "-Inside out-",
  }, //1
  {
    quote: "Hiro, I will always be with you.",
    author: "-Big Hiro6-",
  }, //2
  {
    quote: "Do you wanna build a snowman?",
    author: "-Frozen-",
  }, //3
  {
    quote:
      "The more you gain by pretending, The less you're gonna actually have.",
    author: "-Aladdin-",
  }, //4
  {
    quote:
      "You must not let anyone define your limits because of where you come from. Your only limit is you soul.",
    author: "-Ratatouille-",
  }, //5
  {
    quote: "Sometimes the smallest things take up the most room in your heart.",
    author: "-Winnie the Pooh-",
  }, //6
  {
    quote:
      "It's not until you lose everything that you can truly appreciate everything.",
    author: "-Beauty and the beast-",
  }, //7
  {
    quote: "Venture outside your comfort zone. The rewards are worth it.",
    author: "-Tangled-",
  }, //8
  {
    quote:
      "When life gets you down, do you wanna know what you've gotta do? Just keep swimming, swimming and swimming.",
    author: "-Finding Nemo-",
  }, //9
  {
    quote: " I never look back, darling. It distracts from the now.",
    author: "-The incredibles-",
  }, //10
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
