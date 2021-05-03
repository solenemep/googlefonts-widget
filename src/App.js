import React from "react";
import FontsApp from "./components/FontsApp";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <React.Fragment>
      <Header>
        <h1>Quoi de neuf, Google Fonts™&nbsp;?</h1>
        <p className="h4">
          Les plus récentes, les plus <i>trendy</i> et les plus populaires polices de Google.
        </p>
      </Header>
      <div className="container min-vh-100">
        <FontsApp />
      </div>
      <Footer>
        With Love&nbsp;& React for Alyra
      </Footer>
    </React.Fragment>
  );
}

export default App;
