import React, { useState } from "react";

const Booking = () => {
  const drivers = [
    {
      id: 1,
      name: "Ravi Kumar",
      phone: "9876543210",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      vehicle: "Mini Truck",
      pickupLocation: "Noida",
      dropLocation: "Delhi",
    },
    {
      id: 1,
      name: "Ravi Kumar",
      phone: "9876543210",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      vehicle: "Mini Truck",
      pickupLocation: "Noida",
      dropLocation: "Greater Noida",
    },
    {
      id: 2,
      name: "Amit Sharma",
      phone: "9812345678",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      vehicle: "Pickup Van",
      pickupLocation: "Greater Noida",
      dropLocation: "Ghaziabad",
    },
    {
      id: 3,
      name: "Sandeep Yadav",
      phone: "9898989898",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      vehicle: "Large Truck",
      pickupLocation: "Delhi",
      dropLocation: "Gurgaon",
    },
    {
      id: 4,
      name: "Imran Khan",
      phone: "9765432109",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      vehicle: "Mini Truck",
      pickupLocation: "Ghaziabad",
      dropLocation: "Noida",
    },
    {
      id: 5,
      name: "Deepak Verma",
      phone: "9123456780",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      vehicle: "Pickup Van",
      pickupLocation: "Gurgaon",
      dropLocation: "Greater Noida",
    },
    {
      id: 6,
      name: "Rahul Singh",
      phone: "9988776655",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      vehicle: "Large Truck",
      pickupLocation: "Noida",
      dropLocation: "Ghaziabad",
    },
  ];

  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", form);
    alert("✅ Slot Booked Successfully!");

    setForm({
      pickup: "",
      drop: "",
      date: "",
      time: "",
      phone: "",
    });
  };

  // 🔥 Filter Logic
  const filteredDrivers = drivers.filter((driver) => {
    const pickupMatch = driver.pickupLocation
      .toLowerCase()
      .includes(form.pickup.toLowerCase());

    const dropMatch = driver.dropLocation
      .toLowerCase()
      .includes(form.drop.toLowerCase());

    return pickupMatch && dropMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      {/* FORM */}
      <div className="flex items-center justify-center mb-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-4"
        >
          <h1 className="text-2xl font-bold text-center">
            🚚 Book Your Shift
          </h1>

          <input
            type="text"
            name="pickup"
            placeholder="Pickup Location"
            value={form.pickup}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="drop"
            placeholder="Drop Location"
            value={form.drop}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="date"
            name="date"
            placeholder="Shifting Date"
            value={form.date}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="time"
            name="time"
            placeholder="Shifting Time"
            value={form.time}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Book Slot
          </button>
        </form>
      </div>

      {/* DRIVERS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredDrivers.length > 0 ? (
          filteredDrivers.map((driver) => (
            <div key={driver.id} className="bg-white p-4 rounded-xl shadow">
              <img
                src={driver.image}
                alt={driver.name}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <h2 className="text-center font-bold mt-2">
                {driver.name}
              </h2>
              <p className="text-center text-sm">{driver.phone}</p>
              <p className="text-center text-sm mt-2">
                🚚 {driver.vehicle}
              </p>
              <p className="text-center text-sm">
                📍 {driver.pickupLocation} → {driver.dropLocation}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No drivers found 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default Booking;