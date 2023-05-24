import Clients from "../components/Clients/Clients";
import Projects from "../components/Projects/Projects";
import AddClient from "../components/AddClient/AddClient";
import AddProject from "../components/AddProject/AddProject";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClient />
        <AddProject />
      </div>
      <Projects />
      <Clients />
    </>
  );
};

export default Home;
