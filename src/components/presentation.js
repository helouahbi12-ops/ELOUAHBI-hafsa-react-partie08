import React from "react";

const personne = {
  nom: "Dupont",
  prenom: "Marie",
  age: 21,
};

const diplomes = ["Baccalauréat", "DEUG", "Licence"];

function Presentation(props) {
  return (
    <div>
      <h2>
        {personne.prenom} {personne.nom}
      </h2>
      <p>Âge : {personne.age} ans</p>

      <h3>Diplômes :</h3>
      <ul>
        {diplomes.map((d, index) => (
          <li key={index}>{d}</li>
        ))}
      </ul>

      {props.children}
    </div>
  );
}

export default Presentation;