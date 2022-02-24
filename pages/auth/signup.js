import Head from "next/head";
import {
  Grid,
  Text,
  Radio,
  Button,
  Spacer,
  Container,
} from "@nextui-org/react";
import { Input, InputPassword } from "components/Input";
import { useSignup } from "hooks/useSignup";

export default function Signup() {
  const { values, errors, handleChange, handleRadioChange, handleSubmit } =
    useSignup();

  return (
    <div>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container display="flex" direction="column" alignItems="center">
        <Text
          color="primary"
          h1
          css={{
            mt: 20,
          }}
        >
          Signup Now
        </Text>
        <form onSubmit={handleSubmit}>
          <Grid.Container gap={4} css={{ mw: 800, my: 20, boxShadow: "$lg" }}>
            <Grid xs={12} sm={6}>
              <Input
                labelPlaceholder="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                helperText={errors.firstName}
              />
            </Grid>

            <Grid xs={12} sm={6}>
              <Input
                labelPlaceholder="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                helperText={errors.lastName}
              />
            </Grid>

            <Grid xs={3}>
              <Text h4 weight={"normal"}>
                Gender:
              </Text>
            </Grid>
            <Grid xs={9}>
              <Radio.Group row onChange={handleRadioChange}>
                <Radio value="M">Male</Radio>
                <Spacer x={1} />
                <Radio value="F">Female</Radio>
              </Radio.Group>
            </Grid>

            <Grid xs={12}>
              <Input
                labelPlaceholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                helperText={errors.email}
              />
            </Grid>

            <Grid xs={12}>
              <InputPassword
                labelPlaceholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                helperText={errors.password}
              />
            </Grid>

            <Grid xs={2} sm={3}>
              <Text h4 weight={"normal"}>
                Role:
              </Text>
            </Grid>
            <Grid xs={10} sm={9}>
              <Radio.Group row onChange={handleRadioChange}>
                <Radio value="passenger">Passenger</Radio>
                <Radio value="driver">Driver</Radio>
              </Radio.Group>
            </Grid>

            <Grid xs={12}>
              <Input
                labelPlaceholder="Phone Number"
                name="phoneNo"
                value={values.phoneNo}
                onChange={handleChange}
                helperText={errors.phoneNo}
              />
            </Grid>

            <Grid xs={12} sm={6} justify="center">
              <Button shadow rounded size="lg" color={"success"}>
                Register
              </Button>
            </Grid>
            <Grid xs={12} sm={6} justify="center">
              <Button shadow rounded size="lg" color={"error"}>
                Reset
              </Button>
            </Grid>
          </Grid.Container>
        </form>
      </Container>
    </div>
  );
}
