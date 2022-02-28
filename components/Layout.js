import { Container } from "@nextui-org/react";
import Header from "components/Header";
import { useUser } from "hooks/useUser";

export default function Layout(props) {
  const { user } = useUser();

  return (
    <Container
      xl
      display="flex"
      alignItems="center"
      justify="flex-start"
      direction="column"
      css={{
        h: "100vh",
        position: "relative",
        padding: 0,
      }}
    >
      <Header user={user} />

      <div style={{ position: "absolute", top: "45vh" }}>{props.children}</div>
    </Container>
  );
}
