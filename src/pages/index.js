import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import Response from '@/components/Response';
import Form from '@/components/Form';
import UploadFile from '@/components/UploadFile';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [input, setInput] = useState('');
  const [file, setFile] = useState('');
  const [fileText, setFileText] = useState('');
  const [response, setResponse] = useState('');

  const getInput = (input) => {
    setInput(input);
  };

  const getFile = (file) => {
    setFile(file);
  };

  const getFileText = async (file) => {};

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
      <Form getInput={getInput} />
      <UploadFile getFile={getFile} />
      <Response response={response} />
      <button
        onClick={() => getFileText(file)}
        className="py-1 px-2 bg-teal-600 rounded"
      >
        Read
      </button>
      {fileText && <p>{fileText}</p>}
    </main>
  );
}
