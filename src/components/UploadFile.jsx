import React, { useState } from 'react';

const UploadFile = ({ getFile }) => {
  const [file, setFile] = useState('');
  const [textValue, setTextValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    getFile(file);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input type="submit" value="Upload" />
    </form>
  );
};

export default UploadFile;
