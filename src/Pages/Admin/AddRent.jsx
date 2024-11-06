import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserData } from "../../Context/UserContext";

const AddRent = () => {
  const { addRoomRent } = UserData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await addRoomRent(
      data.title,
      data.description,
      data.address,
      data.mob_no,
      data.city,
      data.state,
      data.pincode,
      data.roomType,
      data.price,
      data.image,
      data.facilities,
      data.latitude,
      data.longitude
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="section">
        <div className="rent_sec mt-24">
          <h2 className=" text-center mb-3">Add Home Rent Details !!</h2>
          <div className="rent_details">
            <form
              enctype="multipart/form-data"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="input_style mb-3">
                <label>House's Name:</label>
                <input type="text" {...register("title", { required: true })} />
              </div>
              <div className="input_style mb-3">
                <label>About House:</label>
                <textarea
                  type="text"
                  {...register("description", { required: true })}
                />
              </div>
              <div className="input_style mb-3">
                <label>Address:</label>
                <input
                  type="text"
                  {...register("address", { required: true })}
                />
              </div>
              <div className="input_style mb-3">
                <label>
                  Contact No:{" "}
                  <span className=" text-sm">(*Whatsapp number)</span>
                </label>
                <input
                  type="number"
                  {...register("mob_no", { required: true })}
                />
              </div>
              <div className="input_style mb-3 input_flex">
                <label>City:</label>
                <input type="text" {...register("city", { required: true })} />
                <label>State:</label>
                <input type="text" {...register("state", { required: true })} />
                <label>Pin Code:</label>
                <input
                  type="text"
                  {...register("pincode", { required: true })}
                />
              </div>
              <section class="radio-section mb-3">
                <label>Number of Rooms:</label>
                <div class="radio-list">
                  <div class="radio-item">
                    <input
                      name="radio"
                      id="radio1"
                      type="radio"
                      value="1"
                      {...register("roomType", { required: true })}
                    />
                    <label for="radio1">1 Seater</label>
                  </div>
                  <div class="radio-item">
                    <input
                      name="radio"
                      id="radio2"
                      type="radio"
                      value="2"
                      {...register("roomType", { required: true })}
                    />
                    <label for="radio2">2 Seater</label>
                  </div>
                  <div class="radio-item">
                    <input
                      name="radio"
                      id="radio3"
                      type="radio"
                      value="3"
                      {...register("roomType", { required: true })}
                    />
                    <label for="radio3">3 Seater</label>
                  </div>
                  <div class="radio-item">
                    <input
                      name="radio"
                      id="radio4"
                      type="radio"
                      value="4"
                      {...register("roomType", { required: true })}
                    />
                    <label for="radio4">4 Seater</label>
                  </div>
                </div>
              </section>
              <section>
                <div className="input_style mb-3">
                  <label>Upload Main Image:</label>
                  <input
                    type="file"
                    {...register("image", { required: "image is required" })}
                  />
                </div>
                <div className="input_style mb-3">
                  <label htmlFor="">Price:</label>
                  <input
                    type="number"
                    {...register("price", { required: true })}
                  />
                </div>
              </section>
              <section className="mb-3">
                <label htmlFor="">Select Facilities:</label>
                <div>
                  <input
                    type="checkbox"
                    value="WiFi" // Unique value
                    {...register("facilities", { required: true })}
                  />
                  <label htmlFor="">WiFi</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="Gym" // Unique value
                    {...register("facilities", { required: true })}
                  />
                  <label htmlFor="">Gym</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="Parking" // Unique value
                    {...register("facilities", { required: true })}
                  />
                  <label htmlFor="">Parking</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="AirConditioning" // Unique value
                    {...register("facilities", { required: true })}
                  />
                  <label htmlFor="">AirConditioning(AC)</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="Dining Room" // Unique value
                    {...register("facilities", { required: true })}
                  />
                  <label htmlFor="">Dining Room</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="Worship Room" // Unique value
                    {...register("facilities", { required: true })}
                  />
                  <label htmlFor="">Worship Room</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="Kitchen" // Unique value
                    {...register("facilities", { required: true })}
                  />
                  <label htmlFor="">Kitchen</label>
                </div>
              </section>

              <section>
                <div className="input_style mb-3">
                  <label htmlFor="">Latitude:</label>
                  <input
                    type="text"
                    inputmode="decimal"
                    id="float-input"
                    name="float-input"
                    pattern="[0-9]*[.,]?[0-9]*"
                    {...register("latitude", { required: true })}
                  />
                </div>
                <div className="mb-3 input_style">
                  <label htmlFor="">Longitude:</label>
                  <input
                    type="text"
                    inputmode="decimal"
                    id="float-input"
                    name="float-input"
                    pattern="^-?[0-9]*[.,]?[0-9]*"
                    {...register("longitude", { required: true })}
                  />
                </div>
              </section>
              <div className=" text-center">
                <button className="btn btn_style">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRent;
