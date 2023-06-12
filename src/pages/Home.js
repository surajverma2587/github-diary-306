import Stack from "react-bootstrap/Stack";
import { Banner } from "../components/Banner";

export const Home = () => {
  return (
    <Stack>
      <Banner
        title="GitHub Diary"
        subTitle="A GitHub search tool to save your favourite repositories."
      />
    </Stack>
  );
};
