import { useQuery } from "@apollo/client";
import Spinner from "../Spinner/Spinner";
import ClientRow from "../ClientRow/ClientRow";
import { GET_CLIENTS } from "../../queries/clientQueries";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Error: Something went wrong</p>;

  return (
    <div className="table-responsive">
      {!loading && !error && (
        <table className="table table-hover table-striped mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Clients;
