import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";

const SidebarComponent = () => {
  return (
    <div className="h-[100vh] overflow-y-scroll  border-r">
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: ({ level, active }) => {
              // if (level === 0 || level === 1) {
              return {
                color: active && level === 0 ? "white" : "#0F76BC",
                backgroundColor: "#fff",
                height: 35,
                // width: 250,
                "&:hover": {
                  backgroundColor: "#0F76BC !important",
                  color: "white !important",
                  fontWeight: "bold !important",
                },
                "&:focus": {
                  backgroundColor: "#fff !important",
                  color: "#0F76BC !important",
                  fontWeight: "bold !important",
                },
              };
              // }
            },
          }}
        >
          <SubMenu label="Quick Sale">
            <MenuItem
              component={<Link to="/customer" />}
              icon={<DashboardIcon fontSize="small" />}
            >
              Customer
            </MenuItem>
            <MenuItem
              component={<Link to="/tanning-appointment" />}
              icon={<DashboardIcon fontSize="small" />}
            >
              Appointment
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Tanning Plan
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Tanning Session
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Sales Invoice
            </MenuItem>
            <MenuItem
              component={<Link to="/" />}
              icon={<DashboardIcon fontSize="small" />}
            >
              Dashboard
            </MenuItem>
          </SubMenu>
          <SubMenu label="Master">
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Customer
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Product
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Machine
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Department
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Package
            </MenuItem>
          </SubMenu>
          <SubMenu label="Transaction">
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Appointment
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Tanning
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Tanning Session
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Sales Invoice
            </MenuItem>
          </SubMenu>
          <SubMenu label="Reports">
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Appointment
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Tanning
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Tanning Session
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Sales Invoice
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Customer
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Product
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Machine
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Department
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Package
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Sales Report
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Sales Summary
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Appointment Between Date
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
