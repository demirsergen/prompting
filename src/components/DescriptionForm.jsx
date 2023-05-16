import { useState } from 'react';

const DescriptionForm = ({ getDescription }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    getDescription(description);
    setDescription('');
  };

  return (
    <form
      action="POST"
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 bg-gray-700 rounded overflow-hidden"
    >
      <textarea
        type="text"
        id="description"
        className=" p-2 bg-transparent text-white placeholder-white border-2 border-white"
        value={description}
        cols={40}
        rows={5}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a photo description..."
      />
      <input
        type="submit"
        value="Submit"
        className="bg-teal-600 rounded p-2"
      />
    </form>
  );
};

export default DescriptionForm;
