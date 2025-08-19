// app/api/create/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function CreatePost() {
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "Hello",
        body: "Next.js API test",
        userId: 1,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => setResponse(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">POST Request: /api/create</h1>
      <pre className="mt-4 p-4 border rounded bg-gray-100">
        {JSON.stringify(response, null, 2)}
      </pre>
    </div>
  );
}
