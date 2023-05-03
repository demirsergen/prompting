import { Inter } from 'next/font/google';
import { useState } from 'react';
import Response from '@/components/Response';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/get-prompt-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    });
    const { result } = await response.json();
    setResponse(result);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 gap-4 ${inter.className}`}
    >
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
      <Response response={response} />
    </main>
  );
}
