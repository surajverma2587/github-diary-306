import Stack from "react-bootstrap/Stack";
import Spinner from "react-bootstrap/Spinner";
import { Banner } from "../components/Banner";
import { SearchForm } from "../components/SearchForm";
import { AlertBanner } from "../components/AlertBanner";
import { useFetch } from "../hooks/useFetch";
import { Repos } from "../components/Repos";

export const Home = () => {
  const { data, isLoading, error, setUrl } = useFetch();

  const handleSubmit = (username) => {
    setUrl(`https://api.github.com/users/${username}/repos`);
  };

  return (
    <Stack gap={3}>
      <Banner
        title="GitHub Diary"
        subTitle="A GitHub search tool to save your favourite repositories."
      />

      <SearchForm handleSubmit={handleSubmit} />

      {error && (
        <AlertBanner
          message="Oops, something went wrong. Please try again later."
          variant="danger"
        />
      )}

      {isLoading && (
        <Stack direction="horizontal" className="justify-content-center p-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Stack>
      )}

      {data?.length === 0 && (
        <AlertBanner message="No repositories found. Please try a different username." />
      )}

      {data && data.length !== 0 && <Repos repos={data} />}
    </Stack>
  );
};
