/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["we", "they", "our", "the", "us"];
  let adj = ["scary", "beautiful", "nice", "yellow", "fast"];
  let noun = ["car", "man", "people", "woman", "pen"];
  let domainList = [];

  let domain = document.querySelector("#domain");

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        // domain.innerHTML += `<li>${pronoun[i]}${adj[j]}${noun[k]}.com</li>`;
        domainList.push(`<ul>${pronoun[i]}${adj[j]}${noun[k]}.com</ul>`);
      }
    }
  }
  domain.innerHTML = domainList.join("");
};
