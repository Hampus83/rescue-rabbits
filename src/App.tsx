import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Location from "./components/Locations";
import AnimalOverlay from "./components/AnimalOverlay";
import Footer from "./components/Footer";
import jsonData from "./animals.json";
import { Animal } from "./models/animalInterface";
import { Routes, Route } from "react-router-dom";
import AdoptionForm from "./Views/Adoptionform";

function App() {
  const [animals, setAnimals] = useState<Animal[]>(jsonData.animals);

  return (
    <div className="App">
      <Header />
      <Nav />
      <AnimalOverlay />
      <Routes>
        <Route path="1" element={<AdoptionForm />} />
        <Route path="/" element={<Main animals={animals} />} />
      </Routes>
      <Location />
      <Footer />
    </div>
  );
}

export default App;
