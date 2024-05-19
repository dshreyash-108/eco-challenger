import React, { useState } from 'react';

const Post = ({ post, updatePosts }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      // Perform like action (update backend, etc.)
      // Once the like action is successful, setLiked(true)
      setLiked(true);
    }
  };

  return (
    <div style={styles.post}>
      <img src={post.image} alt="Post" style={styles.image} />
      <p style={styles.description}>{post.description}</p>
      <button onClick={handleLike} style={liked ? styles.likedButton : styles.button} disabled={liked}>Like</button>
      {/* Comments section */}
    </div>
  );
}

const styles = {
  post: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  description: {
    marginTop: '10px',
    fontSize: '16px',
    lineHeight: '1.5',
  },
  button: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
  likedButton: {
    ...this.button,
    backgroundColor: '#0056b3',
  },
};

export default Post;
