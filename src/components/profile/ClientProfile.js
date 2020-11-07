import { Container } from "@material-ui/core";
import AppBarComp from "../Provider/AppBar";
import Profile from './Profile';

export default function ClientProfile() {

  return (
    <>
      <AppBarComp />
      <Container maxWidth="lg">
        <Profile />
      </Container>
    </>
  );
}
