import { Link } from "react-router-dom";
import { LuCornerRightUp } from "react-icons/lu";
import { getUserInfo } from "../../utils/localStorageAuthManagemet";
import { verifyToken } from "../../utils/verifyToken";
import ProductAddForm from "../../components/Orders/ProductAddForm";

const AddOrder = () => {
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
          <span>Add Order</span>
        </div>
        <Link
          to={`/${user?.role}/all-orders`}
          className="flex items-center gap-2 bg-primary hover:bg-accent text-white hover:text-white px-4 py-2.5 rounded-lg transition duration-150"
          title="All Order"
        >
          <span>All Order</span>
          <LuCornerRightUp />
        </Link>
      </section>
      <section className="bg-white/40 bg-blend-color-burn border p-3 md:p-8 my-10 rounded-xl w-full max-w-[900px] mx-auto">
        <div className=" text-center">
          <h2 className="text-primary text-xl font-semibold mb-2">
            Order Add Form
          </h2>
          <p>
            If already added on quick addition form. do not add here again. just
            edit that from the Order list
          </p>
        </div>
        <div className="mt-8 md:mt-8">
          <ProductAddForm />
        </div>
      </section>
    </>
  );
};

export default AddOrder;
