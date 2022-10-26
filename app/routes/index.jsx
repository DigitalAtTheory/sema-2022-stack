import { useEffect, useState } from "react";

export default function Index() {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    if (pageLoaded) {
      console.log("the page should be loaded");
      Cognito.mount("127", "#form1");
    }
    setPageLoaded(true);
    console.log("page has loaded");
  }, [pageLoaded]);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "green",
        }}
      >
        <div id="form1" />
      </div>
    </div>
  );
}
