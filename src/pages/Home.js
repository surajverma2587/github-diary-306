import Stack from "react-bootstrap/Stack";
import { Banner } from "../components/Banner";
import { SearchForm } from "../components/SearchForm";
import { AlertBanner } from "../components/AlertBanner";

export const Home = () => {
  return (
    <Stack gap={3}>
      <Banner
        title="GitHub Diary"
        subTitle="A GitHub search tool to save your favourite repositories."
      />

      <SearchForm />

      <AlertBanner message="No repositories found. Please try again." />
    </Stack>
  );
};
