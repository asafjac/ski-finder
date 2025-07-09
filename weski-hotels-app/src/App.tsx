import React from "react";
import NavBar from "./components/navbar/nav-bar";
import ResortCard from "./components/resort-card/resort-card.tsx";

const App: React.FC = () => {
  return (
    <div className="app">
      <NavBar />
      <ResortCard
        title={"a"}
        location={"a"}
        price={1999}
        rating={3}
        imageUrl={
          "https://i.travelapi.com/hotels/16000000/15400000/15395900/15395820/c6c377fa_z.jpg"
        }
      />
    </div>
  );
};

export default App;
