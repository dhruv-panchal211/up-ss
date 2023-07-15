import axiosPrivate from "../../api/BaseURL";
export const FetchData = async () => {
  const res = await axiosPrivate.get(
    `api/resource/Customer?fields=["name","customer_name","customer_group","customer_type"]`
  );

  console.log(res, "res");
  return res.data.data;
};
