/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let pronoun = ["A ", "The ", "A "];
  let subject = ["Clown ", "Bear ", "Shark ", "Thanos ", "Hulk ", "Loki "];
  let action = [
    " threw my",
    " ate my",
    " shredded my ",
    " killed my ",
    " smashed my",
    " stoled my"
  ];
  let possession = [
    " frisbee",
    " homework",
    " book project ",
    " gold fish",
    " car",
    " thesis"
  ];
  let where = [
    " at the park",
    " in the woods",
    " in the ocean ",
    " at Wakanda",
    " on Ragnarock",
    " inside of Asgard"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    "" +
    subject[subjectIndex] +
    "" +
    action[actionIndex] +
    "" +
    possession[possessionIndex] +
    "" +
    where[whereIndex]
  );
};
