import { useEffect, useMemo, useState } from "react";
import axiosPrivate from "../../api/BaseURL";
import { Button as MUIButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box, Button, Menu, Text, Title } from "@mantine/core";
import { data } from "./data";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";

const CustomerList = () => {
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCustomerData = async () => {
    const res = await axiosPrivate.get(
      `api/resource/Customer?fields=["name","customer_name","customer_group","customer_type"]&limit_page_length=1000000&limit_start=0`
    );
    if (res.status === 200) {
      console.log(res, "res");
      setCustomerData(res.data.data);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCustomerData();
  }, []);

  console.log(customerData);

  const handleEditPage = (name) => {
    navigate("edit", { state: name });
  };
  const handleDeletePage = (name) => {
    axiosPrivate.delete(`api/resource/Customer/${name}`);
  };

  const columns = useMemo(
    () => [
      {
        id: "customer", //id used to define `group` column
        // header: "Customer Name",
        columns: [
          {
            accessorFn: (row) => `${row.customer_name}`, //accessorFn used to join multiple data into a single cell
            id: "customer_name", //id is still required when using accessorFn instead of accessorKey
            header: "Customer Name",
            size: 250,
            filterVariant: "autocomplete",
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {/* <img
                  alt="avatar"
                  src={row.original.avatar}
                  className="h-[30px] rounded-full"
                /> */}
                <div onClick={() => handleEditPage(row.original.name)}>
                  {renderedCellValue}
                </div>
              </Box>
            ),
          },
          {
            // accessorKey: "email", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            // enableClickToCopy: true,
            header: "Action",
            size: 300,
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {/* <img
                  alt="avatar"
                  src={row.original.avatar}
                  className="h-[30px] rounded-full"
                /> */}
                <div onClick={() => handleDeletePage(row.original.name)}>
                  delete
                </div>
              </Box>
            ),
          },
        ],
      },
      // {
      //   id: "id",
      //   header: "Job Info",
      //   columns: [
      //     {
      //       accessorKey: "salary",
      //       header: "Salary",
      //       size: 200,
      //       filterVariant: "range-slider",
      //       mantineFilterRangeSliderProps: {
      //         color: "indigo",
      //         label: (value) =>
      //           value?.toLocaleString?.("en-US", {
      //             style: "currency",
      //             currency: "USD",
      //             minimumFractionDigits: 0,
      //             maximumFractionDigits: 0,
      //           }),
      //       },
      //       //custom conditional format and styling
      //       Cell: ({ cell }) => (
      //         <Box
      //           sx={(theme) => ({
      //             backgroundColor:
      //               cell.getValue() < 50_000
      //                 ? theme.colors.red[9]
      //                 : cell.getValue() >= 50_000 && cell.getValue() < 75_000
      //                 ? theme.colors.yellow[9]
      //                 : theme.colors.green[9],
      //             borderRadius: "4px",
      //             color: "#fff",
      //             maxWidth: "9ch",
      //             padding: "4px",
      //           })}
      //         >
      //           {cell.getValue()?.toLocaleString?.("en-US", {
      //             style: "currency",
      //             currency: "USD",
      //             minimumFractionDigits: 0,
      //             maximumFractionDigits: 0,
      //           })}
      //         </Box>
      //       ),
      //     },
      //     {
      //       accessorKey: "jobTitle", //hey a simple column for once
      //       header: "Job Title",
      //       filterVariant: "multi-select",
      //       size: 350,
      //     },
      //     {
      //       accessorFn: (row) => {
      //         //convert to Date for sorting and filtering
      //         const sDay = new Date(row.startDate);
      //         sDay.setHours(0, 0, 0, 0); // remove time from date (useful if filter by equals exact date)
      //         return sDay;
      //       },
      //       id: "startDate",
      //       header: "Start Date",
      //       filterVariant: "date-range",
      //       sortingFn: "datetime",
      //       enableColumnFilterModes: false, //keep this as only date-range filter with between inclusive filterFn
      //       Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(), //render Date as a string
      //       Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
      //     },
      //   ],
      // },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableFacetedValues: true,
    enableGrouping: true,
    enablePinning: true,
    enableRowSelection: true,
    initialState: { showColumnFilters: true },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    // renderDetailPanel: ({ row }) => (
    //   <Box
    //     sx={{
    //       display: "flex",
    //       justifyContent: "flex-start",
    //       alignItems: "center",
    //       gap: "16px",
    //       padding: "16px",
    //     }}
    //   >
    //     <img
    //       alt="avatar"
    //       height={200}
    //       src={row.original.avatar}
    //       style={{ borderRadius: "50%" }}
    //     />
    //     <Box sx={{ textAlign: "center" }}>
    //       <Title>Signature Catch Phrase:</Title>
    //       <Text>&quot;{row.original.signatureCatchPhrase}&quot;</Text>
    //     </Box>
    //   </Box>
    // ),
    // renderRowActionMenuItems: () => (
    //   <>
    //     <Menu.Item>View Profile</Menu.Item>
    //     <Menu.Item>Send Email</Menu.Item>
    //   </>
    // ),
    // renderTopToolbarCustomActions: ({ table }) => {
    // const handleDeactivate = () => {
    //   table.getSelectedRowModel().flatRows.map((row) => {
    //     alert("deactivating " + row.getValue("name"));
    //   });
    // };
    // const handleActivate = () => {
    //   table.getSelectedRowModel().flatRows.map((row) => {
    //     alert("activating " + row.getValue("name"));
    //   });
    // };
    // const handleContact = () => {
    //   table.getSelectedRowModel().flatRows.map((row) => {
    //     alert("contact " + row.getValue("name"));
    //   });
    // };
    // return (
    //   <div style={{ display: "flex", gap: "8px" }}>
    //     <Button
    //       color="red"
    //       disabled={!table.getIsSomeRowsSelected()}
    //       onClick={handleDeactivate}
    //       variant="filled"
    //     >
    //       Deactivate
    //     </Button>
    //     <Button
    //       color="green"
    //       disabled={!table.getIsSomeRowsSelected()}
    //       onClick={handleActivate}
    //       variant="filled"
    //     >
    //       Activate
    //     </Button>
    //     <Button
    //       color="blue"
    //       disabled={!table.getIsSomeRowsSelected()}
    //       onClick={handleContact}
    //       variant="filled"
    //     >
    //       Contact
    //     </Button>
    //   </div>
    // );
    // },
  });

  return (
    <div className="m-6">
      {loading ? (
        <>Loading ....</>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h3 className="text-white">Customer List</h3>
            <MUIButton onClick={() => navigate("create")} className="!bg-white">
              Create
            </MUIButton>
          </div>
          <div>
            {!loading && <MantineReactTable table={table} />}
            {/* {customerData.map((customer) => (
          <div key={customer.name} className="flex gap-16">
            <p>{customer.name}</p>
            <p>{customer.customer_name}</p>
          </div>
        ))} */}
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerList;
