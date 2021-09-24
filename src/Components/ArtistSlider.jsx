import React from "react";

const ArtistSlider = ({ title, data }) => {
  return (
    <div className="artist-slider">
      <h2>{title}</h2>
      <div className="artist-container">
        {/* <div className="artist-card">
          <div className="card-image">
            <img
              src="https://i.scdn.co/image/ab67616d00001e025fe5c9847c746860a5d6ae94"
              alt="asdfas"
            />
          </div>
          <div className="artist-info">
            <a href="#" className="artist-name">
              asfasdf
            </a>
          </div>
        </div> */}
        {data?.items?.map((item, index) => {
          return (
            <div className="artist-card" key={index}>
              <div className="card-image">
                <img src={item.images[1].url} alt={item.name} />
              </div>
              <div className="artist-info">
                <a href="#" className="artist-name">
                  {item.name}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistSlider;
