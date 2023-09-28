import React, { useEffect } from "react";
import CardListing from "../../shared/card/CardListing";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, []);

  return <></>;
};

export default Home;
