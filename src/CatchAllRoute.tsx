import './App.css';
import React from "react";
import "./builder-registry";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import NotFound from './components/404/NotFound';
builder.init('f4f94084095845709a660eeca02c676c');

export default function CatchAllRoute(){
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
    if (notFound && !isPreviewingInBuilder) {
      return <NotFound />;
    }
    return (
      <>
        {/* Render the Builder page */}
        <BuilderComponent model="page" content={content} />
      </>
    );
  }