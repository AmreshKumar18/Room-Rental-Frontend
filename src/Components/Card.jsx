import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAirlineSeatIndividualSuite } from "react-icons/md";

const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Radius of the Earth in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

const Card = ({ item, userLocation }) => {
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    if (userLocation && item.latitude && item.longitude) {
      const dist = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        item.latitude,
        item.longitude
      );
      setDistance(dist.toFixed(2)); // Round to 2 decimal places
      // console.log(dist.toFixed(2));
    }
  }, [userLocation, item]);
  const generateGoogleMapsUrl = () => {
    if (userLocation && item.latitude && item.longitude) {
      return `https://www.google.com/maps/dir/?api=1&origin=${userLocation.latitude},${userLocation.longitude}&destination=${item.latitude},${item.longitude}`;
    }
    return "#"; // Fallback URL
  };

  return (
    <>
      <div className="home_card">
        <div className="home_img">
          <img src={`https://room-rental-backend-ece1.onrender.com/${item.image}`} alt="" />
        </div>

        <div className="home_details">
          <h6>&#8377; {item.price}</h6>
          <h4>{item.title}</h4>
          <p>
            {item.address}, {item.city}, {item.state}
          </p>
          <div className=" flex items-center gap-2">
            <MdOutlineAirlineSeatIndividualSuite size={22} /> {item.roomType}{" "}
            Seater
          </div>
          <p className=" text-blue-400">
            <a
              href={generateGoogleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {distance} km away
            </a>
          </p>
        </div>

        <div className=" m-auto text-center w-2/3 bg-indigo-400 text-white p-2 rounded-md mb-3">
          <Link
            to={`/room-rent-details/${item._id}`}
            userLocation={userLocation}
          >
            <button>View Profile</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
