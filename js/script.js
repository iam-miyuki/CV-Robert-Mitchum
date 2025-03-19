// // function changeJumbotronTitle
const buttonBlue = document.querySelector('#welcome .btn')
buttonBlue.textContent="Changer le titre"
buttonBlue.removeAttribute("href");

const jumbotron = document.querySelector('#welcome .display-1');

function changeJumbotronTitle(){
        jumbotron.textContent = "Youhou"
        buttonBlue.textContent= "Contactez-moi"
        // buttonBlue.setAttribute("href","contact.html")
        
}
buttonBlue.onclick = changeJumbotronTitle;


const competences = document.querySelectorAll("#competence p");
const titleCompetence = document.querySelector("#competence h2");
const logos = document.querySelectorAll("#competence img");
const tabloP = [
  "L'HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web.",
  "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML. Les standards définissant CSS sont publiés par le World Wide Web Consortium.",
  "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs avec l'utilisation de Node.js.",
  "AngularJS est un framework JavaScript libre et open source développé par Google. Il permet de développer des pages web",
];
const tabloImg = [
  "img/logos/html.png",
  "img/logos/css.png",
  "img/logos/js.png",
  "img/logos/angular.png",
];

function changeCompetence() {
  for (let i = 0; i < competences.length; i++) {
    competences[i].textContent = tabloP[i];
    logos[i].src = tabloImg[i];
  }
}
titleCompetence.onclick = changeCompetence;
