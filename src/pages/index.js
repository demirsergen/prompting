import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import Response from '@/components/Response';
import Form from '@/components/Form';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendInput = (input) => {
    setInput(input);
  };

  const getCaption = async () => {
    if (input) {
      const response = await fetch('/api/get-prompt-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });
      const { result } = await response.json();
      setResponse(result);
    }
  };

  useEffect(() => {
    getCaption();
  }, [input]);

  return (
    <main
      className={`flex min-h-screen flex-col bg-gray-700 text-white items-center p-24 gap-4 ${inter.className}`}
    >
      <Form sendInput={sendInput} />
      <Response response={response} />
    </main>
  );
}
