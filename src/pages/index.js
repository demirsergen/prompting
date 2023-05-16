import { Inter } from 'next/font/google';
import { useEffect, useState, createContext } from 'react';
import Response from '@/components/Response';
import Form from '@/components/DescriptionForm';
import ToneSelector from '@/components/ToneSelector';

const inter = Inter({ subsets: ['latin'] });

export const AppContext = createContext();

export default function Home() {
  const [description, setDescription] = useState('');
  const [tone, setTone] = useState('');
  const [response, setResponse] = useState('');

  // make a select component for 'tone'. we should only be able to choose one tone at a time.

  const getDescription = (description) => {
    setDescription(description);
  };

  const getTone = (tone) => {
    setTone(tone);
  };

  const getCaption = async () => {
    if (description) {
      const response = await fetch('/api/get-prompt-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description, tone }),
      });
      const { result } = await response.json();
      setResponse(result);
    }
  };

  useEffect(() => {
    getCaption();
  }, [description]);

  return (
    <AppContext.Provider value={{}}>
      <main
        className={`flex min-h-screen flex-col bg-gray-700 text-white items-center p-24 gap-4 ${inter.className}`}
      >
        <ToneSelector getTone={getTone} />
        <Form getDescription={getDescription} />
        <Response response={response} />
      </main>
    </AppContext.Provider>
  );
}
