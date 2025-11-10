import React from "react";
import "./featured.css";
import { TitleSection } from "../TitleSection"
import heart from "../../image/1c360f790c1817d3afa266b3c9f8c81ff0ed4428.png";
import womanCollection from "../../image/455c8d6408463f7e8f57dd3048a2444dbfa0cb90.jpg";
import speaker from "../../image/e5659d572977438364a41d7e8c9d1e9a794d43ed.png";
import prefum from "../../image/15315cd15102562cf220504d288fa568eaa816dd.png";

const Featured = () => {
  return (
    <div className="section-featured">
      <TitleSection
        subtitle="Featured"
        mainTitle="New Arrival"
        showNavigation={false}
      />
      <div className="featured">
        <div className="collection-card large">
          <img src={heart} alt="" />
          <div className="text-content">
            <h3>PlayStation 5</h3>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div>
          <div className="collection-card" style={{ height: "200px" }}>
            <img
              src={womanCollection}
              style={{
                transform: " rotateY(148deg)",
                height: " 200px",
                objectit: "fill",
                margin: "auto",
              }}
              alt=""
            />
            <div
              className="woman-text"
              style={{ color: "white", margin: "20px", position: "absolute" }}
            >
              <h3>Women's Collections</h3>
              <p>Featured woman collections that give you another vibe.</p>
              <button>Shop Now</button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "5px",
              gap: "10px",

              color: "white",
            }}
          >
            <div className="collection-card">
              <img src={speaker} alt="" />
              <div className="text">
                <h3>Speakers</h3>
                <p>Amazon wireless speakers</p>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="collection-card">
              <img
                src={prefum}
                alt=""
                style={{ margin: "auto", width: "150px" }}
              />
              <div className="text">
                <h3>Perfume</h3>
                <p>GUCCI INTENSE OUD EDP</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
