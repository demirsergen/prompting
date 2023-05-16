import { Inter } from 'next/font/google';
import { useEffect, useState, createContext } from 'react';
import Response from '@/components/Response';
import Form from '@/components/Form';
import ToneButtons from '@/components/ToneButtons';

const inter = Inter({ subsets: ['latin'] });

export const AppContext = createContext();

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [selectedTones, setSelectedTones] = useState({
    professional: false,
    casual: false,
    friendly: false,
  });

  // make a select component for 'tone'. we should only be able to choose one tone at a time.

  const getInput = (input) => {
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
    <AppContext.Provider value={{ setSelectedTones }}>
      <main
        className={`flex min-h-screen flex-col bg-gray-700 text-white items-center p-24 gap-4 ${inter.className}`}
      >
        <ToneButtons />
        <Form getInput={getInput} />
        <Response response={response} />
      </main>
    </AppContext.Provider>
  );
}
