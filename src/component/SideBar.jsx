import React from 'react'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Avatar, styled, Typography, useTheme } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';
const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

const SideBar = ({ open, handleDrawerClose }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    let location = useLocation();
    const arry1 = [
        { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
        { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
        { text: "Contacts Information", icon: <ContactsOutlinedIcon />, path: "/contacts" },
        { text: "Invoices Balances", icon: <ReceiptOutlinedIcon />, path: "/invoices" },
    ]
    const arry2 = [
        { text: "Profile Form", icon: <PersonOutlineOutlinedIcon />, path: "/form" },
        { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/Calendar" },
        { text: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },

    ]
    const arry3 = [
        { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
        { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
        { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
        { text: "Geography", icon: <MapOutlinedIcon />, path: "/geography" },

    ]






    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />

            <Avatar sx={{ mx: "auto", width: open ? 88 : 44, transition: "0.5s", height: open ? 88 : 44, border: "2px solid gray", my: 1 }} alt="Travis Howard" src="data:image/jpeg;base64,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" />
            <Typography align='center' sx={{ fontSize: open ? 17 : 0, transition: "0.5s", }} >odai</Typography>
            <Typography align='center' sx={{ fontSize: open ? 15 : 0, transition: "0.5s", color: theme.palette.info.main }} >Admin</Typography>
            <Divider />
            <List>
                {arry1.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>

                        <ListItemButton
                            onClick={() => {
                                navigate(item.path)
                            }}
                            sx={[
                                {
                                    minHeight: 48,
                                    px: 2.5,
                                    bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[300] : null
                                },
                                open
                                    ? {
                                        justifyContent: 'initial',
                                    }
                                    : {
                                        justifyContent: 'center',
                                    },
                            ]}
                        >
                            <Tooltip title={open ? null : item.text} placement="right">

                                <ListItemIcon
                                    sx={[
                                        {
                                            minWidth: 0,
                                            justifyContent: 'center',
                                        },
                                        open
                                            ? {
                                                mr: 3,
                                            }
                                            : {
                                                mr: 'auto',
                                            },
                                    ]}
                                >
                                    {item.icon}
                                </ListItemIcon>
                            </Tooltip>
                            <ListItemText
                                primary={item.text}
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {arry2.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => {
                                navigate(item.path)
                            }}
                            sx={[
                                {
                                    minHeight: 48,
                                    px: 2.5,
                                    bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[300] : null
                                },
                                open
                                    ? {
                                        justifyContent: 'initial',
                                    }
                                    : {
                                        justifyContent: 'center',
                                    },
                            ]}
                        >
                            <Tooltip title={open ? null : item.text} placement="right">
                                <ListItemIcon
                                    sx={[
                                        {
                                            minWidth: 0,
                                            justifyContent: 'center',
                                        },
                                        open
                                            ? {
                                                mr: 3,
                                            }
                                            : {
                                                mr: 'auto',
                                            },
                                    ]}
                                >
                                    {item.icon}
                                </ListItemIcon>
                            </Tooltip>
                            <ListItemText
                                primary={item.text}
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {arry3.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => {
                                navigate(item.path)
                            }}
                            sx={[
                                {
                                    minHeight: 48,
                                    px: 2.5,
                                    bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[300] : null
                                },
                                open
                                    ? {
                                        justifyContent: 'initial',
                                    }
                                    : {
                                        justifyContent: 'center',
                                    },
                            ]}
                        >
                            <Tooltip title={open ? null : item.text} placement="right">
                                <ListItemIcon
                                    sx={[
                                        {
                                            minWidth: 0,
                                            justifyContent: 'center',
                                        },
                                        open
                                            ? {
                                                mr: 3,
                                            }
                                            : {
                                                mr: 'auto',
                                            },
                                    ]}
                                >
                                    {item.icon}
                                </ListItemIcon>
                            </Tooltip>
                            <ListItemText
                                primary={item.text}
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer >
    )
}
export default SideBar;

