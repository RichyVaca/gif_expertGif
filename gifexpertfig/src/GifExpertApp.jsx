import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GiftGrid from "./Components/GiftGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);
  // const handleAdd = () => {
  //      setCategories(cats => [...categories, 'HunterxHunter']);
  // }
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
             <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
