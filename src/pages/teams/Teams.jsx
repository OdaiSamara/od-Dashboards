import React from 'react'
import { DataGrid, } from '@mui/x-data-grid';
import { rows } from './data';
import { Box, Typography, useTheme } from '@mui/material';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

import Header from "../../component/Header";

const Teams = () => {
  const theme = useTheme()

  const columns = [
    { field: 'id', headerName: 'Id', flex: 1, align: "center", headerAlign: "center" },
    { field: 'name', headerName: 'Name', flex: 1, align: "center", headerAlign: "center" },
    { field: 'email', headerName: 'Email', flex: 1, align: "center", headerAlign: "center" },
    { field: 'age', headerName: 'Age', flex: 1, align: "center", headerAlign: "center" },
    { field: 'phone', headerName: 'Phone', flex: 1, align: "center", headerAlign: "center" },
    {
      field: 'access', headerName: 'Access', flex: 1, align: "center", headerAlign: "center", renderCell: ({ row: { access } }) => {
        return (
          <Box sx={{ p: "5px", width: "99px", margin: "auto", textAlign: "center", borderRadius: "3px", backgroundColor: access === "Admin" ? theme.palette.primary.dark : access === "Manger" ? theme.palette.secondary.dark : '#3da58a', display: "flex", justifyContent: "space-evenly" }}>
            {access === "Admin" ? <AdminPanelSettingsOutlinedIcon sx={{ color: "white" }} fontSize='small' /> : access === "Manger" ? <SecurityOutlinedIcon sx={{ color: "white" }} fontSize='small' /> : <LockOpenOutlinedIcon sx={{ color: "white" }} fontSize='small' />}
            <Typography sx={{ fontSize: "13px", color: "white" }}>{access}</Typography>
          </Box>)
      }
    },
  ];



  return (
    <Box>


      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />

      <Box sx={{ height: 600, width: '98%', mx: "auto" }}>
        <DataGrid rows={rows}

          // @ts-ignore
          columns={columns} />
      </Box>
    </Box>
  )
}

export default Teams
