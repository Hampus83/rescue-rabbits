import "./Card.scss";
import { Animal } from "../../../models/animalInterface";
import Adopted from "../../../assets/adopterad.svg";

interface Props {
  animal: Animal;
  setHiddenCss: (hiddenCss: boolean) => void;
  hiddenCss: boolean;
  setChosenAnimal: (chosenAnimal: Animal) => void;
  chosenAnimal: Animal;
}

const Card = ({
  animal,
  hiddenCss,
  setHiddenCss,
  setChosenAnimal,
  chosenAnimal,
}: Props) => {
  function handleAnimalClick() {
    setHiddenCss(!hiddenCss);
    setChosenAnimal(animal);
  }
  if (animal.adopted) {
    return (
      <>
        <article onClick={() => handleAnimalClick()} className="animalCard">
          <h1>{animal.name}</h1>
          <img src={animal.image} alt="bild" />
          <p>Uppladdat: {animal.uploaded}</p>
          <p>{animal.age} år.</p>
          <p>Finns i {animal.location}.</p>
          <button>Läs mer om {animal.name}</button>
          <div>
            <img
              className="adoptedTag"
              src={Adopted}
              alt="har blivit adopterad"
            />
          </div>
        </article>
      </>
    );
  } else {
    return (
      <>
        <article onClick={handleAnimalClick} className="animalCard">
          <h1>{animal.name}</h1>
          <img src={animal.image} alt="bild" />
          <p>Uppladdat: {animal.uploaded}</p>
          <p>{animal.age} år.</p>
          <p>Finns i {animal.location}.</p>
          <button>Läs mer om {animal.name}</button>
        </article>
      </>
    );
  }
};

export default Card;
