import { useEffect } from "react";
import axiosPrivate from "../../api/BaseURL";

const CustomerList = () => {
  useEffect(() => {
    axiosPrivate.get(
      `api/resource/Customer/?fields=["name","customer_name","customer_group","customer_type"]`
    );
  }, []);

  return <div></div>;
};

export default CustomerList;
