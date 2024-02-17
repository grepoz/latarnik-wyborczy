import React from 'react';
import './styles/App.css';
import Slider from "./components/Slider";

function App() {
  return (
      <div className={"app-grid"}>

        <header className={"app-header"}>
          <h3>Latarnik Wyborczy</h3>
        </header>

        <main className={"app-main"}>
          <Slider/>
        </main>

        <footer className={"app-footer"}>
          © 2023. Wszystkie prawa zastrzeżone.
        </footer>

      </div>
  );
}

export default App;
