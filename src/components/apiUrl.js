import React from "react";

const API_URL = process.env.API_URL

function ApiUrl({asLink}) {
  if (asLink == "true") {
    return (<a href="{API_URL}">{API_URL}</a>);
  } else {
    return (<span>{API_URL}</span>);
  }
}
export default ApiUrl;