import React from "react";
import DessertImage from "/Users/victorturitzin/family-recipes/client/src/Images/IMG-5839.jpg"
import LemonCakeImage from "/Users/victorturitzin/family-recipes/client/src/Images/lemon_cake.jpeg"
import Piroshki from "/Users/victorturitzin/family-recipes/client/src/Images/IMG-5266.jpg"

const Home = () => {
  return (
    <div>
      <h3 id="home-header-summary">
        Share your family recipes with the world, passing down generations of
        fun family meals!
      </h3>
      <h4 id="home-header-signin">User must be signed in to view and create recipes</h4>
        <img src={DessertImage} className="rounded float-start" height="300" width="300"/>
        <img src={Piroshki} className="rounded float-middle" height="300" width="300"/>
        <img src={LemonCakeImage} className="rounded float-end" height="300" width="300"/>
    </div>
  );
};

export default Home;
