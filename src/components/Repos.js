import Stack from "react-bootstrap/Stack";

import { RepoCard } from "./RepoCard";

export const Repos = ({ repos }) => {
  return (
    <Stack
      direction="horizontal"
      className="justify-content-evenly align-items-start flex-wrap border p-4"
    >
      {repos.map((repo) => {
        return <RepoCard key={repo.id} repo={repo} />;
      })}
    </Stack>
  );
};
