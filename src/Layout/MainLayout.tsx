import { Layout } from "antd";
import { Link, Outlet } from "react-router-dom";
import "../styles/antd-overwrite.css";
const { Header, Content } = Layout;
import NavDropDown from "./NavDropdown";
import { Footer } from "antd/es/layout/layout";
import Sidebar from "./Sidbar";

const MainLayout = () => {
  return (
    <>
      <Layout>
        <Sidebar />

        <Layout>
          <Header className="!px-4 sticky top-0 !bg-white !h-[60px] flex flex-col justify-center border-b z-50">
            {/* <div>
              <h2 className="text-2xl leading-[1em] font-bold text-primary uppercase">
                LabOne <span className="text-secondary">Hospital</span>
              </h2>
            </div> */}
            <div className="flex flex-col items-center ms-auto text-right">
              <NavDropDown />
            </div>
          </Header>
          <Content>
            <div className="min-h-[calc(100vh-150px)] p-3 md:p-5">
              <div className="syner-body-gradient"></div>
              <div className="syner-body-gradient-lines">
                <div className="syner-body-gradient-line"></div>
                <div className="syner-body-gradient-line"></div>
                <div className="syner-body-gradient-line"></div>
                <div className="syner-body-gradient-line"></div>
              </div>
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            OkoBiscuit ©{new Date().getFullYear()} Created by{" "}
            <Link
              to={"https://www.linkedin.com/in/jahidmorol/"}
              target="_blank"
            >
              J@#!D
            </Link>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
