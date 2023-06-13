import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

export const RepoCard = ({ repo }) => {
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
        <Button variant="dark">
          <i class="fa-solid fa-plus"></i> Add to Favourite
        </Button>
      </Card.Footer>
    </Card>
  );
};
