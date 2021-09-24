import React, { lazy, Suspense } from "react";

// importing loading skeletons
import Skeleton from "react-loading-skeleton";

const MusicCard = lazy(() => import("./MusicCard"));

const MusicSlider = ({ title, data }) => {
  return (
    <div className="music-slider">
      <h2>{title}</h2>
      <div className="music-container">
        {data?.items?.map((item, index) => {
          return (
            <div key={index}>
              <Suspense fallback={<Skeleton delay={3} height={200} />}>
                <MusicCard item={item} />
              </Suspense>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MusicSlider;
