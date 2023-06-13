import Alert from "react-bootstrap/Alert";

export const AlertBanner = ({ message, variant = "warning" }) => {
  return (
    <Alert variant={variant} className="text-center">
      {message}
    </Alert>
  );
};
