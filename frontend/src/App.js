import { ApolloProvider } from "@apollo/client";

import Header from "./components/Header/Header";
import Clients from "./components/Clients/Clients";
import AddClient from "./components/AddClient/AddClient";
import { client } from "./config/graphql";

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClient />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
};

export default App;
