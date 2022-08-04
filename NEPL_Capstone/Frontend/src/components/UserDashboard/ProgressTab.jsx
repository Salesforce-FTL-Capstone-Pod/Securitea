import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Container } from "@mui/material";
import { Avatar, Grid } from "@nextui-org/react";
import { Container as NextContainer, Card, Row, Text, Table, Spacer, Progress, Button, Checkbox, Textarea, Loading } from "@nextui-org/react";
import { useState } from "react";
import "./UserDashboard.css";
import Footer from "../Footer/Footer";
import { useAuthContext } from "../../contexts/auth"
import axios from "axios";
import apiClient from "../../services/apiClient"
import { useEffect } from "react";

function ProgressTab(){
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(
  {
    module_name: "Phishing",
    module_id: "",
    progress: ""
  })
  console.log(progress)
  useEffect(() => {
    setLoading(true)
    const fetchProgress = async () => {
      const { data } = await apiClient.fetchProgress()

      if (data) {
        setProgress({
          module_name: "Phishing",
          module_id: data.progress.module_id,
          progress: data.progress.progress
        })
      }
    }
    fetchProgress()
    setLoading(false)
  }, [])

  return(
    <>
      <Grid>
      <NextContainer fluid>
      <Text h1 b>
        Progress
      </Text>
      
      <Card css={{ bg: "$colors$darkpurple", mw: "100%"}}>
        <Card.Divider />
        <Card.Body css={{ py: "$10"}}>
          <Spacer></Spacer>
          <Text h2 b>{progress.module_name} Module Progress</Text>
          <Spacer></Spacer>
          <Progress value={progress.progress} shadow color="secondary" status="secondary" />
          <Spacer></Spacer>
        </Card.Body>
      </Card>
  
    </NextContainer>
      </Grid>
    </>
  )
  }

export default ProgressTab