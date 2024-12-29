import { Link } from "react-router-dom";
import AllSellerRequestList from "../../components/SellerRequest/AllSellerRequestList";

const SellerRequest = () => {
  return (
    <>
      <section className="flex items-center justify-between">
        <div className="text-base flex items-center gap-2 md:gap-3">
          <Link to="/" className="text-primary">
            OkoBiscuit
          </Link>
          <span>/</span>
          <span>Seller Request</span>
        </div>
      </section>
      <section className="bg-white/40 bg-blend-color-burn border p-5 my-5 rounded-xl w-full ">
        <AllSellerRequestList />
      </section>
    </>
  );
};

export default SellerRequest;
