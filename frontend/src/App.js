import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Homescreen from "./screens/Homescreen";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Homescreen />
        </Container>
        <Footer></Footer>
      </main>
    </>
  );
};

export default App;
