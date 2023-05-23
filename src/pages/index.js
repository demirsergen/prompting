import { Inter } from 'next/font/google';
import { useEffect, useState, createContext } from 'react';
import Response from '@/components/Response';
import Form from '@/components/DescriptionForm';
import ToneSelector from '@/components/ToneSelector';
import TargetSelector from '@/components/TargetSelector';

const inter = Inter({ subsets: ['latin'] });

export const AppContext = createContext();

export default function Home() {
  const [description, setDescription] = useState('');
  const [tone, setTone] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [response, setResponse] = useState('');

  // figure out a way to clean selections after submit
  // maybe move state up and pass down via context

  const getDescription = (description) => {
    setDescription(description);
  };

  const getTone = (tone) => {
    setTone(tone);
  };

  const getTargetAudience = (target) => {
    setTargetAudience(target);
  };

  const getCaption = async () => {
    if (description) {
      const response = await fetch('/api/get-prompt-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description, tone, targetAudience }),
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
        <div className="flex gap-2 ">
          <ToneSelector getTone={getTone} />
          <TargetSelector getTargetAudience={getTargetAudience} />
        </div>

        <Form getDescription={getDescription} />
        <Response response={response} />
      </main>
    </AppContext.Provider>
  );
}
