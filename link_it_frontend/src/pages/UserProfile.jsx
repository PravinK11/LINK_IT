import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserAndPosts = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/users/${userId}`);
        const data = await res.json();

        if (data?.user && data?.posts) {
          setUser(data.user);
          setUserPosts(data.posts);
        } else {
          console.error("Malformed response:", data);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching user and posts:", error);
        setLoading(false);
      }
    };

    fetchUserAndPosts();
  }, [userId]);

  if (loading) return <p className="text-center mt-8 text-blue-600">Loading user profile...</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-gray-50 min-h-screen">
      {user ? (
        <div className="mb-10 text-center">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0D8ABC&color=fff&size=128`}
            alt={user.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
          />
          <h2 className="text-3xl font-bold text-blue-700">{user.name}</h2>
          <p className="text-gray-600 mt-2 italic">"{user.bio}"</p>
        </div>
      ) : (
        <p className="text-red-500 text-center">User not found.</p>
      )}

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Posts by {user?.name}
      </h3>

      {userPosts.length === 0 ? (
        <p className="text-gray-500 text-center">No posts yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {userPosts.map((post) => (
            <div
              key={post._id}
              className="bg-white shadow-sm border border-gray-100 rounded-xl p-5 hover:shadow-md transition"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-1">{post.content}</h4>
              <p className="text-gray-600 mb-1">{post.description}</p>
              <p className="text-sm text-blue-600 mb-1">#{post.category}</p>
              <p className="text-xs text-gray-400">
                Posted on: {new Date(post.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserProfile;
