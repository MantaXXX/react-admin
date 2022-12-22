import { useState } from "react"
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import picPath from "../../assets/Jia.jpg"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const SidebarList = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Dashboard")
  const { collapseSidebar } = useProSidebar();

  const handleCollapse = () => {
    collapseSidebar()
    setIsCollapsed(!isCollapsed)
  }

  const dataLists = [
    {
      typography: true,
      title: "Data",
    },
    {
      title: "Manage Team",
      to: "/team",
      icon: PeopleOutlinedIcon,
    },
    {
      title: "Contacts Information",
      to: "/contacts",
      icon: ContactsOutlinedIcon,
    },
    {
      title: "Invoices Balances",
      to: "/invoices",
      icon: ReceiptOutlinedIcon,
    },
    {
      typography: true,
      title: "Pages",
    },
    {
      title: "Profile Form",
      to: "/form",
      icon: PersonOutlinedIcon,
    },
    {
      title: "Calendar",
      to: "/calendar",
      icon: CalendarTodayOutlinedIcon,
    },
    {
      title: "FAQ Page",
      to: "/faq",
      icon: HelpOutlineOutlinedIcon,
    },
    {
      typography: true,
      title: "Charts",
    },
    {
      title: "Bar Chart",
      to: "/bar",
      icon: BarChartOutlinedIcon,
    },
    {
      title: "Pie Chart",
      to: "/pie",
      icon: PieChartOutlineOutlinedIcon,
    },
    {
      title: "Line Chart",
      to: "/line",
      icon: TimelineOutlinedIcon,
    },
    {
      title: "Geography Chart",
      to: "/geography",
      icon: MapOutlinedIcon,
    }
  ]

  return (
    <Box
      sx={{
        "& .ps-menu-button": {
          backgroundColor: "transparent !important",
        },
        "& .ps-menuitem-root": {
          padding: "2px 0 !important",
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
        },
        "& .ps-menuitem-root.ps-active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar backgroundColor={`${colors.primary[400]} !important`}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={handleCollapse}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* PIC n NAME */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={picPath}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  POCHIA LU
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  FRONTEND DEVELOPER
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <MenuItem
              icon={<HomeOutlinedIcon />}
              active={selected === "Dashboard"}
              onClick={() => setSelected("Dashboard")}
              routerLink={<Link to="/" />}
            >
              <Typography>Dashboard</Typography>
            </MenuItem>

            {dataLists.map(item =>
              item.typography ?
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                  key={item.title}
                >
                  {item.title}
                </Typography>
                :
                <MenuItem
                  icon={<item.icon />}
                  key={item.title}
                  active={selected === item.title}
                  rootStyles={{
                    color: colors.grey[100],
                  }}
                  onClick={() => setSelected(item.title)}
                  routerLink={<Link to={item.to} />}
                >
                  <Typography>{item.title}</Typography>
                </MenuItem>
            )}
          </Box>
        </Menu>
      </Sidebar>
    </Box >
  )
}

export default SidebarList