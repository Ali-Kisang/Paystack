/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function Verify() {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("Verifying payment...");

  useEffect(() => {
    const reference = searchParams.get("reference");

    if (reference) {
      axios
        .post("http://localhost:5000/api/subscribe/verify", { reference })
        .then((res) => {
          setMessage("Payment verified! Welcome to Premium.");
        })
        .catch((err) => {
          setMessage("Payment verification failed.");
        });
    } else {
      setMessage("No reference provided.");
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center">
      <div className="bg-white p-6 rounded shadow text-xl font-semibold">
        {message}
      </div>
    </div>
  );
}
