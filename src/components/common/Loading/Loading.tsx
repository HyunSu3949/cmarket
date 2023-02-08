import { ReactElement } from "react";
import { useIsFetching, useIsMutating } from "react-query";

export default function Loading(): ReactElement {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const display = isFetching || isMutating ? "inherit" : "none";

  return (
    <span
      style={{
        display: `${display}`,
      }}
    >
      Loading...
    </span>
  );
}
