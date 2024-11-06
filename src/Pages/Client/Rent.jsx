import React, { useEffect, useState } from "react";
import rentheader from "../../Assets/rentheader.png";
import Card from "../../Components/Card";
import { IoIosSearch } from "react-icons/io";
import toast from "react-hot-toast";
import axios from "axios";

const Rent = () => {
  const [room, setRoom] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredRooms = room.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery) ||
      item.city.toLowerCase().includes(searchQuery) ||
      item.state.toLowerCase().includes(searchQuery) ||
      item.roomType.toLowerCase().includes(searchQuery)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching location", error);
        }
      );
    }
  }, []);

  const allRentRooms = async (req, res) => {
    try {
      const res = await axios.get("https://room-rental-backend-ece1.onrender.com/api/allRoom");
      setRoom(res.data.getAllRoom);
      // console.log(res.data.getAllRoom);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    allRentRooms();
  });

  return (
    <>
      <div className=" mt-20">
        <div className="rentcontainer">
          <div className="rentheadertext">
            <h1 className=" font-semibold">
              Find Your <span className=" text-orange-400">Dream</span> Home.
            </h1>
            <p className=" text-center mb-8 text-white">
              No more stress. Your home search ends here.
            </p>
          </div>
          <div className="rentheader">
            <img src={rentheader} alt="" />
          </div>
        </div>
        <div className="section">
          <h2 className="heading_txt font-semibold text-center mt-8">
            Find Properties in These Cities
          </h2>
          <p className=" text-center mb-8">
            Explore our range of beautiful properties with the addition of
            separate accommodation suitable for you.
          </p>
          <div className="search_style">
            <input
              type="search"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="search your dream home..."
            />
            <IoIosSearch />
          </div>
          <div className="popular_residence">
            {filteredRooms && filteredRooms.length > 0 ? (
              filteredRooms.map((item, id) => (
                <Card item={item} key={id} userLocation={userLocation} />
              ))
            ) : (
              <h6>Room not found!</h6>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rent;
