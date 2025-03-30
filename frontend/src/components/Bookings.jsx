import { useState } from "react";

const Bookings = () => {
  const [formData, setFormData] = useState({
    location: "",
    checkin: "",
    checkout: "",
    roomType: "Single",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    alert("Booking submitted!");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow-md rounded">
      <h1 className="text-2xl font-bold text-center mb-4">Book a Homestay</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          value={formData.checkin}
          onChange={(e) => setFormData({ ...formData, checkin: e.target.value })}
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          value={formData.checkout}
          onChange={(e) => setFormData({ ...formData, checkout: e.target.value })}
          className="w-full p-2 border rounded"
        />

        <select
          value={formData.roomType}
          onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="Single">Single Room</option>
          <option value="Double">Double Room</option>
          <option value="Family">Family Room</option>
        </select>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Bookings;
