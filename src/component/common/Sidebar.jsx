import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";

const SidebarComponent = () => {
  return (
    <div className="h-[100vh] border-r">
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
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
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Customer
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Appointment
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Tanning Therapy Plan
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Tanning Session
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
              Sales Invoice
            </MenuItem>
            <MenuItem icon={<DashboardIcon fontSize="small" />}>
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
              Tanning Therapy
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
              Tanning Therapy
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
