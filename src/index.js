import React from "react";
import ReactDOM from "react-dom/client";
import Presentation from "./components/Presentation";
import PresentationClasse from "./components/PresentationClasse";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Presentation>
      <p>Version fonction : ce texte est passé via props.children</p>
    </Presentation>

    <hr />

    <PresentationClasse>
      <p>Version classe : ce texte est passé via this.props.children</p>
    </PresentationClasse>
  </div>
);