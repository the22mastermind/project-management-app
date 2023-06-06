import Clients from "../components/Clients/Clients";
import Projects from "../components/Projects/Projects";
import AddClient from "../components/AddClient/AddClient";
import AddProject from "../components/AddProject/AddProject";

const Dashboard = () => {
  return (
    <div className="bg-white px-4 dashboard">
      <div className="d-flex gap-3 my-4 py-4 p-md-4">
        <AddClient />
        <AddProject />
      </div>
      <Projects />
      <Clients />
    </div>
  );
};

export default Dashboard;
