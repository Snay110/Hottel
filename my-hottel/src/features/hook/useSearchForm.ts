import { useState } from "react";

export function useSearchForm() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSearch = () => {
    console.log({ location, checkIn, checkOut });
  };

  return {
    location,
    setLocation,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    handleSearch,
  };
}
