import React from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import "./builder-registry";
import NotFound from "./components/404/NotFound";

// Builder Public API Key set in .env file
builder.init(process.env.VITE_PUBLIC_BUILDER_KEY!);

export default function BuilderPage() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = React.useState(false);
  const [content, setContent] = React.useState(null);

  // get the page content from Builder
  React.useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: window.location.pathname,
        })
        .promise();

      setContent(content);
      setNotFound(!content);

      // if the page title is found,
      // set the document title
      if (content?.data.title) {
        document.title = content.data.title;
      }
    }
    fetchContent();
  }, []);

  if (content === null) {
    return;
  }
  // If no page is found, return
  // a 404 page from your code.
  if (notFound && !isPreviewingInBuilder) {
    return <NotFound/>;
  }

  // return the page when found
  return (
    <>
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={content} />
      
    </>
  );
}
