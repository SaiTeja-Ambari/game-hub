import { ReactNode, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children?: string;
}
const ExpandableText = ({ children }: Props) => {
  const limit = 300;
  const [expanded, setExpanded] = useState(false);
  if (!children) {
    return null; // Handle the case where children is undefined or null
  }
  if (children?.length < 300) {
    return <Text> {children}</Text>;
  }
  const summary = expanded ? children : children.substring(0, 300);
  return (
    <>
      <Text>
        {summary}
        <Button marginLeft = {1} colorScheme="yellow" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
