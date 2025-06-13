/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/subscribe/initiate", {
        email,
        amount: 10, // KES 10.00
      });
      window.location.href = res.data.authorization_url;
    } catch (err) {
      alert("Payment initiation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow max-w-sm w-full">
        <h1 className="text-xl font-bold mb-4 text-center">Subscribe to Premium - KES 10</h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border px-4 py-2 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="w-full bg-blue-600 text-black py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Processing..." : "Subscribe"}
        </button>
      </div>
    </div>
  );
}
