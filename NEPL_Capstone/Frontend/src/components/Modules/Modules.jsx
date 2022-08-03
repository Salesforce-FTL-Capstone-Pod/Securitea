import React from "react";
import {
  Card,
  Grid,
  Text,
  Button,
  Row,
  Spacer,
  Progress,
  User,
  NextUIProvider,
  createTheme,
  Image,
} from "@nextui-org/react";
import SignInModal from "../SignInModal/SignInModal";
import Navbar from "../Navbar/Navbar";
import { useLoginForm } from "../../hooks/useLoginForm";
import { Link } from "react-router-dom";
import { Container, width } from "@mui/system";
import Footer from "../Footer/Footer";
import { useAuthContext } from "../../contexts/auth";
import "./Modules.css";
import * as color from "../../assets/colorPalette";
import AuthRoute from "../AuthRoute/AuthRoute";
import Lock from "../../assets/Lock.svg";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      platinum: color.platinum,
      black: color.richBlackFogra,
      lightpurple: color.languidLavender,
      medpurple: color.blueBell,
      darkpurple: color.maximumBluePurple,
      success: color.success,
    },
    space: {},
    fonts: {
      wee: "Roboto",
      mono: "Open Sans",
    },
  },
});

export default function Modules() {
  const { user, handleLogout } = useAuthContext();
  return (
    <>
      <Navbar />
      <Hero />
      <CardContainer />
      <SubHero />
      <Footer />
    </>
  );
}

export function Hero() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          marginTop: "3.5vw",
          justifyContent: "space-around",
          background: "#D3CFE2",
          height: "240px",
          width: "90%",
        }}
        maxWidth={false}
      >
        <h1
          style={{
            marginTop: "3vw",
            fontSize: "200%",
          }}
        >
          Welcome!
        </h1>
      </Container>
      <br></br>
    </>
  );
}

export function CardContainer() {
  const { user, handleLogout } = useAuthContext();
  return (
    <div className="cont">
      {user?.email ? (
        <Container
          maxWidth={"xl"}
          sx={{
            p: 3,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <AuthModuleCard />
          <AuthModuleCard />
          <LockedCard />
          <LockedCard />
        </Container>
      ) : (
        <Container
          maxWidth={"xl"}
          sx={{
            p: 3,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <ModuleCard />
          <ModuleCard />
          <LockedCard />
          <LockedCard />
        </Container>
      )}
    </div>
  );
}

export function SubHero() {
  return (
    <>
      <Container
        style={{
          backgroundColor: "#D3CFE2",
          margin: "0%",
          display: "flex",
          flexDirection: "column",
          marginTop: "2vw",
          justifyContent: "center",
          textAlign: "center",
        }}
        maxWidth={false}
      >
        <h3>Our content is sourced from</h3>
        <p>
          Id aliquet risus feugiat in ante metus dictum at.something
          <br></br>
          something!Id aliquet risus feugiat in ante metus dictum at.something
          <br></br>
          something!Id aliquet risus feugiat in ante metus dictum at.something
          <br></br>
          something!
        </p>
      </Container>
    </>
  );
}

export function LockedCard() {
  return (
    <Card
      isHoverable
      css={{
        bg: "#A39EDA",
        width: " var(--container-width)",
        margin: "1em",
        display: "flex",
        height: "320px",
      }}
    >
      <Card.Header css={{ textAlign: "center" }}>
        <Text
          css={{ textAlign: "center", color: "$black", opacity: "0.5" }}
          size={30}
          b
        >
          {" "}
          Coming Soon!{" "}
        </Text>
      </Card.Header>
      <Card.Divider />
      <Card.Image src={Lock} width="100%" css={{ opacity: "0.5" }} />

      <Card.Body css={{ py: "$10" }}></Card.Body>
    </Card>
  );
}

export function ModuleCard() {
  const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
    useLoginForm();
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  return (
    <Card
      isHoverable
      css={{
        bg: "#A39EDA",
        width: " var(--container-width)",
        margin: "1em",
      }}
    >
      <Card.Header css={{ textAlign: "center" }}>
        <Text css={{ textAlign: "center", color: "$black" }} size={30} b>
          {" "}
          Phishing{" "}
        </Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "$10" }}>
        <Text css={{ color: "$black" }}>
          Something about the module. Something about the module. Something
          about the module. Something about the module. Something about the
          module. Something about the module. Something about the module.
          Something about the module. Something about the module.
        </Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="flex-end">
          <Button size="sm" bordered color="secondary">
            Learn More
          </Button>
          <Spacer></Spacer>
          <Button size="sm" color="secondary" onClick={handler}>
            Sign In
          </Button>
        </Row>
      </Card.Footer>
      <SignInModal
        handler={handler}
        visible={visible}
        setVisible={setVisible}
        handleOnInputChange={handleOnInputChange}
        handleOnSubmit={handleOnSubmit}
      />
    </Card>
  );
}

export function AuthModuleCard() {
  return (
    <Card
      isHoverable
      css={{
        bg: "#A39EDA",
        width: " var(--container-width)",
        margin: "1em",
        display: "flex",
      }}
    >
      <Card.Header css={{ textAlign: "center" }}>
        <Text css={{ textAlign: "center", color: "$black" }} size={30} b>
          {" "}
          Phishing{" "}
        </Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "$10" }}>
        <Text css={{ color: "$black" }}>
          Something about the module. Something about the module. Something
          about the module. Something about the module. Something about the
          module. Something about the module. Something about the module.
          Something about the module. Something about the module.
        </Text>
        <Spacer></Spacer>
        <Progress color="secondary" value={75} />
        <Text css={{ color: "$black" }}> 3/4 Simulations Complete</Text>
      </Card.Body>

      <Card.Divider />

      <Card.Footer>
        <Row justify="flex-end">
          <Button size="sm" bordered color="secondary">
            Learn More
          </Button>
          <Spacer></Spacer>
          <Button size="sm" color="secondary">
            Continue
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
}
