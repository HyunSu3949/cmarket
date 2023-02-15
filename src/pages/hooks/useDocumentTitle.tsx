import { useEffect } from "react";

type Props = {
  title: string;
  focusNodeSelector: string;
  focusNodeTitle: string;
};

export default function useDocumentTitle({
  title,
  focusNodeSelector,
  focusNodeTitle,
}: Props) {
  useEffect(() => {
    document.title = title;
    const focusNode = document.querySelector(focusNodeSelector);

    if (focusNode) {
      focusNode.setAttribute("tabindex", "-1");

      focusNode.setAttribute("aria-label", focusNodeTitle);
      focusNode.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
}
