// app/api/posts/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function PostDetail({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [params.id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">GET Request: /api/posts/{params.id}</h1>
      <div className="mt-4 p-4 border rounded-lg shadow">
        <h2 className="font-semibold">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
