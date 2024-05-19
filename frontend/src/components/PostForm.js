import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      description,
      image: URL.createObjectURL(image),
      likes: 0,
      comments: [],
    };

    addPost(newPost);
    setDescription('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.input}
        />
      </div>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Add Post</button>
    </form>
  );
}

const styles = {
  form: {
    marginBottom: '20px',
  },
  input: {
    display: 'block',
    width: '100%',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default PostForm;
