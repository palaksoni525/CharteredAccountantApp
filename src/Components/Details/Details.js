import React, { useState, useEffect } from "react";
import Header from "../Header";
import Body from "./Body";
import { useParams } from "react-router-dom";
// import data from "../../Backend/data";
import "../Details/Details.css";
import { Rating } from "@mui/material";
import RecommendationCard from "../Details/RecommendationCard";

const Details = () => {
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState();
  const { id } = useParams();// jo bhi details h woh
  
  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(()=>{
    let temp = data.filter((item)=> item.id === parseInt(id));
    setProfile(temp.length? temp[0]:null);
  },[data])
  

  //     const temp= data.find((item)=>
  //       item.id===parseInt(id)
  //      );
  // setDetails(item);
  //console.log(details);
  if (!profile) {
    return <div>Item not found</div>;
  }

  const getRecomdation = () => {
    let sortedRatings = data.sort((a, b) => a.rating - b.rating);

    return sortedRatings.reverse().slice(0, 3);
  };
  return (
    <div className="main-div">
      <div className="Details-container">
        <div className="left-section">
          <h1>{profile.name}</h1>
          <p className="description">{profile.about.description}</p>
          <div className="rating-review-container">
            <Rating name="read-only" value={profile.rating} readOnly />
            <p className="review">
              {" "}
              {profile.rating} <span>(</span>
              {profile.reviewCount}
              <span>)</span>
            </p>
          </div>
          <div className="second-div">
            <div>
              {" "}
              <h3>{profile.taskComplexity}</h3>
              <p>{profile.price}</p>
            </div>
            <div>
              <p>{profile.deliveryTime}</p>
            </div>
            <div>
              <button className="btn1">Request Proposal</button>
              <button className="btn2">Chat with me</button>
            </div>
          </div>
          <div className="third-div">
            <h2>What People Say</h2>
            <p>{profile.testimonial.text}</p>
          </div>
        </div>
        <div className="right-section">
          <div>
            <img
              className="image"
              src="https://i.pinimg.com/236x/a5/b4/bd/a5b4bd4b6e64c39097529f9a0054e5b9.jpg"
              alt="Image"
            />
          </div>
          <div className="info">
            <h1>About {profile.name}</h1>
            <div className="top">
              <div>
                <h3 className="grey-text">From</h3>
                <span>{profile.about.from}</span>
              </div>

              <div>
                <h3 className="grey-text">Partner since</h3>
                <span>{profile.about.partnerSince}</span>
              </div>

              <div>
                <h3 className="grey-text">Average Response time</h3>
                <span>{profile.about.averageResponseTime}</span>
              </div>
            </div>
            <h3 className="grey-text">About</h3>
            <p className="About  ">
              I am professional Chartered Accountant here to offer professional
              services of Accounting and finance,financial
              statements,Bookkeeping in affordable price.
            </p>
            <div className="end">
              <div className="left-section">
                <h3 className="grey-text">Services I Offer</h3>
                {profile.about.services.map((service) => {
                  return <p>{service}</p>;
                })}
              </div>

              <div className="right-section">
                <h3 className="grey-text">Why Me?</h3>
                {profile.about.benefits.map((service) => {
                  return <p>{service}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Recommendation-section">
        {getRecomdation().map((item, index) => {
          return <RecommendationCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Details;
