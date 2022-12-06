import React from "react";
import DessertImage from "/Users/victorturitzin/family-recipes/client/src/Images/IMG-5839.jpg"
import LemonCakeImage from "/Users/victorturitzin/family-recipes/client/src/Images/lemon_cake.jpeg"
import Piroshki from "/Users/victorturitzin/family-recipes/client/src/Images/IMG-5266.jpg"

const Home = () => {
  return (
    <div id="home-position">
      <h3 id="home-header-summary">
        Share your family recipes with the world, passing down generations of
        fun family meals!
      </h3>
      <h4 id="home-header-signin">User must be signed in to view and create recipes</h4>
        <div className="grid">
          <img src={DessertImage} className="rounded" height="300" width="300" alt="DessertImage"/>
          <img src={Piroshki} id="middle-image-home" className="rounded" height="300" width="300" alt="Piroshki"/>
          <img src={LemonCakeImage} className="rounded" height="300" width="300" alt="LemonCakeImage"/>
        </div>
    </div>
  );
};

export default Home;
