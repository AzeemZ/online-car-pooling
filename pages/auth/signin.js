import Head from "next/head";
import { Spacer, Container, Row, Card, Button, Text } from "@nextui-org/react";
import {
  RiLockPasswordFill as Password,
  RiMailFill as Mail,
} from "react-icons/ri";
import { useSignin } from "hooks/useSignin";
import { InputPassword, Input } from "components/Input";

export default function Signin() {
  const { values, errors, handleChange, handleSubmit } = useSignin();

  return (
    <div>
      <Head>
        <title>Sign In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        display="flex"
        alignItems="center"
        justify="flex-start"
        css={{
          "@sm": { h: "100vh" },
        }}
      >
        <form
          style={{ display: "flex", flexGrow: 1, justifyContent: "center" }}
          onSubmit={handleSubmit}
        >
          <Card
            css={{
              mw: "600px",
              py: "30px",
              "@smMax": { boxShadow: "none", mt: 20 },
            }}
          >
            <Card.Header>
              <Row justify="center">
                <Text
                  h3
                  color="default"
                  size={32}
                  css={{
                    textGradient: "45deg, $blue500 -20%, $pink500 50%",
                  }}
                >
                  Sign in to your account
                </Text>
              </Row>
            </Card.Header>

            <Card.Body>
              <Row justify="center">
                {errors.unknown && (
                  <Text h4 color="error">
                    {errors.unknown}
                  </Text>
                )}
              </Row>
              <Spacer y={1} />
              <Input
                labelPlaceholder="Email"
                contentLeft={<Mail fill="#6e6e6e" />}
                helperText={errors.email}
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <Spacer y={2.3} />
              <InputPassword
                labelPlaceholder="Password"
                contentLeft={<Password fill="#6e6e6e" />}
                helperText={errors.password}
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <Spacer y={1} />
            </Card.Body>

            <Card.Footer>
              <Row justify="center">
                <Button shadow rounded color={"gradient"} size="lg">
                  Login
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </form>
      </Container>
    </div>
  );
}
