import React, { useState } from 'react';

const UploadFile = ({ getFile }) => {
  const [file, setFile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('File uploaded!');

    getFile(file);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input
        type="submit"
        value="Upload"
        className="rounded bg-teal-600 p-1"
      />
    </form>
  );
};

export default UploadFile;
