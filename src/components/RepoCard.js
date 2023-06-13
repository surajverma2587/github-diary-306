import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const RepoCard = ({ repo }) => {
  const itemsFromLS = getFromLocalStorage("repos");

  const [addedToLS, setAddedToLS] = useState(
    itemsFromLS.find((itemFromLS) => {
      return itemFromLS.id === repo.id;
    })
  );

  const handleAddToFav = () => {
    const itemsFromLS = getFromLocalStorage("repos");

    const newItems = [repo, ...itemsFromLS];

    localStorage.setItem("repos", JSON.stringify(newItems));

    setAddedToLS(true);
  };

  const handleRemoveFromLS = () => {
    const itemsFromLS = getFromLocalStorage("repos");

    const newItems = itemsFromLS.filter((itemFromLS) => {
      return itemFromLS.id !== repo.id;
    });

    localStorage.setItem("repos", JSON.stringify(newItems));

    setAddedToLS(false);
  };

  return (
    <Card className="repo-card m-3">
      <Card.Body>
        <Card.Title>{repo.name}</Card.Title>
        <hr />
        <Card.Text>{repo.description}</Card.Text>
        <Stack direction="horizontal" className="justify-content-center">
          <Button
            variant="link"
            className="border"
            href={repo.html_url}
            target="_blank"
          >
            Link
          </Button>
        </Stack>
      </Card.Body>
      <Card.Footer className="text-center">
        {!addedToLS ? (
          <Button variant="dark" onClick={handleAddToFav}>
            <i className="fa-solid fa-plus"></i> Add to Favourites
          </Button>
        ) : (
          <Button variant="danger" onClick={handleRemoveFromLS}>
            <i className="fa-solid fa-trash"></i> Remove from Favourites
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
};
