import React from 'react'
import { Link } from "react-router-dom"
import AuthNavbar from '../AuthNavbar/AuthNavbar';
import { Container } from "@mui/material";
import { Avatar } from "@nextui-org/react"
import SettingsModal from '../SettingsModal/SettingsModal';

function UserDashboard() {
  return (
    <Container maxWidth={false} disableGutters>
      <AuthNavbar />
      <SettingsModal />
    </Container>
  )
}


export default UserDashboard