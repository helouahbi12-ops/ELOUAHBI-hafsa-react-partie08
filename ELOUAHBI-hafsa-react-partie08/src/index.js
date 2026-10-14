import React from "react";
import ReactDOM from "react-dom/client";
import Presentation from "./components/presentation";
import PresentationClasse from "./components/presentationClasse";

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