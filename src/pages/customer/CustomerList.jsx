import { useEffect } from "react";
import axiosPrivate from "../../api/BaseURL";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomerList = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axiosPrivate.get(
      `api/resource/Customer/?fields=["name","customer_name","customer_group","customer_type"]`
    );
  }, []);

  return (
    <div className="m-6">
      <div className="flex items-center justify-between">
        <h3 className="text-white">Customer List</h3>
        <Button onClick={() => navigate("create")} className="!bg-white">
          Create
        </Button>
      </div>
    </div>
  );
};

export default CustomerList;
