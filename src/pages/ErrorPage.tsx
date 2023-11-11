import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const isError = isRouteErrorResponse(useRouteError());

  return (
    <>
    
      <Heading>Oops !!!</Heading>
      <Text>{isError ? 'Page not found' : 'Error occurred, sorry'}</Text>
    </>
  );
};

export default ErrorPage;
