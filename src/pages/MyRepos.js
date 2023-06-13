import Stack from "react-bootstrap/Stack";

import { Banner } from "../components/Banner";
import { AlertBanner } from "../components/AlertBanner";
import { Repos } from "../components/Repos";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";
import { useState } from "react";

export const MyRepos = () => {
  const [repos, setRepos] = useState(getFromLocalStorage("repos"));

  return (
    <Stack>
      <Banner
        title="My Repositories"
        subTitle="Here is a list of your saved repositories."
      />

      {repos.length === 0 && (
        <AlertBanner message="You have no saved repositories." />
      )}

      {repos.length !== 0 && <Repos repos={repos} setRepos={setRepos} />}
    </Stack>
  );
};
