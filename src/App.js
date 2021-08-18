import "./App.css";
import Card from "./components/Card";
import { Stocks } from "./components/Stocks";
//import food from "./assets/food.jpg";

function App() {
  const recipeAuthor = "Efecan";
  const wedstrijdItem = {
    id: 1,
    datum: "zondag 22 augustus",
    tijd: "9:15",
    speler1: "Bert",
    speler2: "Jo",
    speler3: "Wim",
    speler4: "Marc",
    spelervrij: "Nico",
  //  image: food,
    description:
      "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
  };

  const like= 193;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
      <Stocks />
      <div className="card-header"> Wedstrijden </div>
        <Card
          id={wedstrijdItem.id}
          datum={wedstrijdItem.datum}
          tijd={wedstrijdItem.tijd}
          speler1={wedstrijdItem.speler1}
          speler2={wedstrijdItem.speler2}
          //liked={isLiked}
          //likeCount={like}
        />
          <Card
          id={wedstrijdItem.id}
          datum={wedstrijdItem.datum}
          tijd={wedstrijdItem.tijd}
          speler1={wedstrijdItem.speler1}
          speler2={wedstrijdItem.speler2}
          //liked={isLiked}
          //likeCount={like}
        />
      </header>
    </div>
  );
}

export default App;