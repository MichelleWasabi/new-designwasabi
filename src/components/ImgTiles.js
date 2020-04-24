import React from "react";

let ImgTiles = ({ 
  tiles,
}) => {
  return (

<section>
        <div className="container md:items-center mx-auto px-4">
          <div className="section-header flex flex-col h-56 md:h-96 justify-center text-center">
            <h2 className="text-xl md:text-4xl ">Featured Projects</h2>
            <p className="text-base md:text-xl">my main picks</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {tiles.map(({header, subtext}) => (
              <a key={header} className="relative mx-auto block">
                <div className="content md:rounded opacity-0 absolute text-white h-full w-full text-center items-center flex justify-center flex-col transition-all duration-1000 ease-in-out hover:opacity-100  ">       
                  <div className="details absolute w-full fadeIn-bottom opacity-0 transition-all duration-1000 ease-in-out">
                    <h3 className="title uppercase">{header}</h3>
                    <p className="text">{subtext}</p>
                  </div>
                </div>
                <img className="w-full max-w-lg md:rounded overflow-hidden shadow-lg" src={require("../assets/images/michelle1.jpeg")} alt="" />
              </a>
            ))}
          </div>
        </div>
      </section>

  );
};
 export default ImgTiles;