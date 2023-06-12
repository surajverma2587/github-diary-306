import { BrowserRouter } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";

import { NavigationBar } from "./components/NavigationBar";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <Stack gap={4}>
        <NavigationBar />
        <Container>
          <AppRoutes />
        </Container>
      </Stack>
    </BrowserRouter>
  );
};
