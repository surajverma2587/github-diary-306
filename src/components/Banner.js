import Stack from "react-bootstrap/Stack";

export const Banner = ({ title, subTitle }) => {
  return (
    <Stack className="jumbotron text-center border" gap={3}>
      <h1>{title}</h1>
      <h2 className="fs-5">{subTitle}</h2>
    </Stack>
  );
};
