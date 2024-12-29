import { LuCornerRightUp } from "react-icons/lu";
import { Link } from "react-router-dom";
import { getUserInfo } from "../../utils/localStorageAuthManagemet";
import { verifyToken } from "../../utils/verifyToken";
import AllOrderList from "../../components/Orders/AllOrderList";
// import AllOrderList from "../../components/Order/AllOrderList";

const AllOrder = () => {
  const token = getUserInfo();
  let user: Record<string, unknown> | undefined;
  if (token !== null && typeof token === "string") {
    user = verifyToken(token);
  }
  return (
    <>
      <section className="flex items-center justify-between">
        <div className="text-base flex items-center gap-2 md:gap-3">
          <Link to="/" className="text-primary">
            Oko Biscuit
          </Link>
          <span>/</span>
          <span>All Order</span>
        </div>
        {user?.role === "seller" && (
          <Link
            // to="/all-Order"
            to={`/${user?.role}/add-order`}
            className="flex items-center gap-2 bg-primary hover:bg-accent text-white hover:text-white px-4 py-2.5 rounded-lg transition duration-150"
            title="Add Order"
          >
            <span>Add Order</span>
            <LuCornerRightUp />
          </Link>
        )}
      </section>
      <section className="bg-white/40 bg-blend-color-burn border p-5 my-5 rounded-xl w-full ">
        <AllOrderList />
      </section>
    </>
  );
};

export default AllOrder;
