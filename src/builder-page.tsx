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
  const [testomonialPage, setTestomonialPage] = React.useState({
    image: "https://cdn.builder.io/api/v1/image/assets%2F13b025a31139467fa11d6fd2561bea02%2F657215d19faa46e49538076791d2cf13",
    title: "Testimonial 1",
    desciption: "Testimonial description"
  });

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
      <BuilderComponent model="page" content={content} data={{ testomonialPage }} />
      
    </>
  );
}
