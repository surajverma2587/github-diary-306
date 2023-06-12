import Alert from "react-bootstrap/Alert";

export const AlertBanner = ({ message }) => {
  return (
    <Alert variant="warning" className="text-center">
      {message}
    </Alert>
  );
};
