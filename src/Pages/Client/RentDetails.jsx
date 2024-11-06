import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAirlineSeatIndividualSuite } from "react-icons/md";
import ReviewCard from "../../Components/ReviewCard";
import { UserData } from "../../Context/UserContext";

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

const RentDetails = () => {
  const { id } = useParams();
  const { user } = UserData();

  const [roomData, setRoomData] = useState([]);
  const [review, setReview] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [distance, setDistance] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const message = "Hello, I want to chat with you!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const roomDetails = async (req, res) => {
    try {
      const res = await axios.get(
        `https://room-rental-backend-ece1.onrender.com/api/roomdetails/${id}`
      );
      // console.log(res.data.roomDetails);
      setRoomData(res.data.roomDetails);
      setPhoneNumber(res.data.roomDetails.mob_no);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const reviews = async (req, res) => {
    try {
      const res = await axios.get(
        `https://room-rental-backend-ece1.onrender.com/api/all-reviews/${id}`
      );
      setReview(res.data.allReviews.reviews);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const feedback = {
      rating: data.rating,
      comment: data.comment,
    };
    // await feedback(data.rating, data.comment);

    await axios
      .post(`https://room-rental-backend-ece1.onrender.com/api/add-review/${id}`, feedback, {
        headers: { token: user.token },
      })
      .then(({ data }) => {
        if (data) {
          // console.log(data);
          toast.success("You feedback Submit Successfully");
        }
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response?.data?.message);
        }
      });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error fetching geolocation: ", error);
          toast.error("Could not fetch your location.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (userLocation && roomData.latitude && roomData.longitude) {
      const dist = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        roomData.latitude,
        roomData.longitude
      );
      setDistance(dist.toFixed(2)); // Round to 2 decimal places
      // console.log(dist.toFixed(2));
    }
  }, [userLocation, roomData]);
  const generateGoogleMapsUrl = () => {
    if (userLocation && roomData.latitude && roomData.longitude) {
      return `https://www.google.com/maps/dir/?api=1&origin=${userLocation.latitude},${userLocation.longitude}&destination=${roomData.latitude},${roomData.longitude}`;
    }
    return "#"; // Fallback URL
  };

  useEffect(() => {
    roomDetails();
    reviews();
  }, [id]);

  return (
    <>
      <section className="section">
        <div className="mt-24">
          <div className="details-img">
            <img src={`https://room-rental-backend-ece1.onrender.com/${roomData.image}`} alt="" />
          </div>
          <div className="details-room">
            <p> &#8377; {roomData.price}</p>
            <h2 className=" font-semibold">{roomData.title}</h2>
            <div className=" flex items-center gap-2">
              <CiLocationOn size={20} />
              {roomData.address}
            </div>
            {roomData.city}, {roomData.state}, {roomData.pincode}
            <p className=" text-blue-400">
              <a
                href={generateGoogleMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {distance} km away
              </a>
            </p>
            <h2>About</h2>
            <p>{roomData.description}</p>
            <h2>Room Type</h2>
            <div className=" flex items-center gap-2">
              <MdOutlineAirlineSeatIndividualSuite size={22} />{" "}
              {roomData.roomType} Seater
            </div>
            <div>
              <h2>Facilities:</h2>
              {roomData.facilities}
            </div>
            <h4>Owner: {roomData.owner?.fullname}</h4>
            <div>
              <button className=" btn btn_style">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with Seller
                </a>
              </button>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="rating">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="rating_heading">
              <h2 className=" text-center">Rating and Reviews</h2>
            </div>
            <div className="input_style">
              <div className="select_style">
                <label htmlFor="">Rating:</label>
                <select name="" id="" {...register("rating")}>
                  <option>Choose Rating</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                  <option value="4">⭐⭐⭐⭐</option>
                  <option value="3">⭐⭐⭐</option>
                  <option value="2">⭐⭐</option>
                  <option value="1">⭐</option>
                </select>
              </div>
              <label htmlFor="">Comment Your Views:</label>
              <textarea name="" id="" {...register("comment")}></textarea>
            </div>
            <div className=" text-center">
              <button className=" btn btn_style">Submit</button>
            </div>
          </form>
        </div>

        {/*  */}
        <div className="user-review">
          <h2>What People Say</h2>
          <div className="reviewcards">
            {review && review.length > 0 ? (
              review.map((item, id) => <ReviewCard item={item} key={id} />)
            ) : (
              <p>No Reviews Yet!!</p>
            )}
          </div>
          <div className=" text-center mt-10">
            <Link className="design_txt">View all reviews &#8594;</Link>
          </div>
        </div>
      </section>

      {/*  */}
    </>
  );
};

export default RentDetails;
