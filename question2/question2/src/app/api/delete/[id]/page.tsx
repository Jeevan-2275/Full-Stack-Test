// app/api/delete/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function DeletePost({ params }: { params: { id: string } }) {
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setResponse(data));
  }, [params.id]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        DELETE Request: /api/delete/{params.id}
      </h1>
      <pre className="mt-4 p-4 border rounded bg-gray-100">
        {JSON.stringify(response, null, 2)}
      </pre>
    </div>
  );
}
