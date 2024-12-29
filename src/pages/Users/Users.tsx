import { LuCornerRightDown } from "react-icons/lu";
import { Link } from "react-router-dom";
import AllUsers from "../../components/Users/AllUsers";
import { getUserInfo } from "../../utils/localStorageAuthManagemet";
import { verifyToken } from "../../utils/verifyToken";

const Users = () => {
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
            OkoBiscuit
          </Link>
          <span>/</span>
          <span>All Users</span>
        </div>
        <Link
          to={`/${user?.role || "admin"}/add-user`}
          className="flex items-center gap-2 bg-primary hover:bg-accent text-white hover:text-white px-4 py-2.5 rounded-lg transition duration-150"
          title="Add Admin"
        >
          <span>Add user</span>
          <LuCornerRightDown />
        </Link>
      </section>
      <section className="bg-white/40 bg-blend-color-burn border p-5 my-5 rounded-xl w-full ">
        <AllUsers />
      </section>
    </>
  );
};

export default Users;
