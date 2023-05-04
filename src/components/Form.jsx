import { useState } from 'react';

const Form = ({ sendInput }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    sendInput(input);
  };

  return (
    <form
      action="POST"
      onSubmit={handleSubmit}
      className="flex flex-col gap-2"
    >
      <label htmlFor="input">Input: </label>
      <textarea
        type="text"
        id="input"
        className="bg-gray-100 p-2"
        value={input}
        cols={30}
        rows={5}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a photo description..."
      />
      <input
        type="submit"
        value="Submit"
        className="bg-red-100 rounded p-2"
      />
    </form>
  );
};

export default Form;
