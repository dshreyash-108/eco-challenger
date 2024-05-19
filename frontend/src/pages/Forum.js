import React, { useState, useEffect } from 'react';
import PostForm from '../components/PostForm';
import Post from '../components/Post';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to track authentication status

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
    setIsLoggedIn(true);
    
    // Here you can make a request to your backend to check the user's authentication status
    // For example:
    // fetch('/api/auth/status')
    //   .then(response => response.json())
    //   .then(data => setIsLoggedIn(data.isLoggedIn))
    //   .catch(error => console.error('Error checking authentication status:', error));
    // This is a placeholder, you need to replace it with your actual authentication check
  }, []);

  const addPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const updatePosts = (updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div>
      {/* Conditionally render the PostForm based on the authentication status */}
      {isLoggedIn && <PostForm addPost={addPost} />}
      <PostForm/>
      {posts.map((post) => (
        <Post key={post.id} post={post} updatePosts={updatePosts} />
      ))}
    </div>
  );
}

export default Forum;
