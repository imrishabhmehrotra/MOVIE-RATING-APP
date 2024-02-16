import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";

export const Auth = () => {
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: async () => {
      // Your login logic goes here
      console.log("Login logic");
    },
  });

  const handleLogin = () => {
    // Call the mutate function to trigger the mutation
    mutate();
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="violet" textAlign="center">
          Welcome! Login by registering as a guest below!
        </Header>
        <Form size="large">
          <Segment stacked>
            <Button color="violet" size="large" fluid onClick={handleLogin}>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
