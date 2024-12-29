import { Link } from "react-router-dom";
import DataContainer from "../../components/Home/DataContainer";
import ChartOne from "../../components/Home/Charts/ChartOne";

const Home = () => {
  return (
    <>
      <section className="flex justify-between">
        <div className="text-base flex items-center gap-2 md:gap-3">
          <Link to="/" className="text-primary">
            OkoBiscuit
          </Link>
          <span>/</span>
          <span>Dashboard</span>
        </div>
      </section>
      <div className="mt-5 md:mt-8">
        <DataContainer />
      </div>
      <div className="my-3 md:my-5">
        <ChartOne />
      </div>
    </>
  );
};

export default Home;
