import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TanningSessionList = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   axiosPrivate.get(
  //     `api/resource/Customer/?fields=["name","customer_name","customer_group","customer_type"]`
  //   );
  // }, []);
  return (
    <div className="my-6">
      <div className="flex items-center justify-between">
        <h3 className="text-white">Tanning Session List</h3>
        <Button onClick={() => navigate("add")} className="!bg-white">
          Add
        </Button>
      </div>
    </div>
  );
};

export default TanningSessionList;
