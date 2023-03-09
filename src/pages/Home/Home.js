import React from "react";
import { Header } from "../Header/Header";
import { Contact } from "../Contact/Contact";


export const Home = () => {
    const [mission, setMission] = useState(true);
    
  return (
    <>
        <Header />

        <Contact />
    </>
  );
};
