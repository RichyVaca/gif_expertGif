import React from "react";
import { useFetchGifs } from "../Hooks/useFetchGifs";
// import { getGifs } from "../helpers/GetGifs";
import GifGridItem from "./GifGridItem";

const GiftGrid = ({ category }) => {
  const {loading, data:images} = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__flash" >{category}</h3>

      {loading && <p>Loading</p>}
      <div className="card-grid">
        <ol>
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default GiftGrid;
