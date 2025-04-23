import React from "react";

export default function Page({ params }) {
  return (
    <div>
      <p>Post: {params.id}</p>
    </div>
  );
}
