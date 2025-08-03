import { useState } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [post, setPost] = useState({
    content: '',
    description: '',
    category: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/posts', post);
      alert('✅ Post created successfully!');
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.msg || 'Failed to create post ❌');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="4"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What's on your mind?"
            value={post.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Short description..."
            value={post.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. tech, lifestyle"
            value={post.category}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-200"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
