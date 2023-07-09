import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import SidebarComponent from "../component/common/Sidebar";

const Master = (props) => {
  const [loading, setLoading] = useState(true);
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      loadUser();
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="flex">
          <aside>
            <SidebarComponent />
          </aside>
          <main className="w-full p-3 bg-primary max-h-[100vh] overflow-scroll">
            {props?.children}
          </main>
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
};

export default Master;
