import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-2">
        📰 All Posts
      </h2>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">No posts available yet.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {post.content}
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Description:</strong> {post.description}
              </p>
              <p className="text-sm text-blue-600 mb-1">
                Category: #{post.category}
              </p>

              {/* Author with clickable avatar + name */}
              <Link to={`/profile/${post.author?._id}`} className="flex items-center gap-3 mt-2 hover:opacity-90">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author?.name)}&background=0D8ABC&color=fff`}
                  alt={post.author?.name}
                  className="w-6 h-6 rounded-full"
                />
                <div className="text-sm text-gray-700">
                  <span className="font-medium text-blue-600 hover:underline">
                    {post.author?.name}
                  </span>{" "}
                  <span className="text-gray-500">({post.author?.bio})</span>
                </div>
              </Link>

              <p className="text-xs text-gray-400 mt-2">
                Posted on: {new Date(post.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Feed;
