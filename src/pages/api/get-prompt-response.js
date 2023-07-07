import { openai } from '../../../openai';

export default async function getPromptResponse(req, res) {
  const { input, tone, targetAudience } = req.body;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `You are helping people write better threads on Twitter. Each tweet in a thread cannot exceed 200 characters.
    The user will give you a topic and you will return the tweets with for that thread with that topic.
    Main topic of the thread:${input}. The tone of the caption:${tone}. The target audience:${targetAudience}`,
    temperature: 0.5,
    max_tokens: 250,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const text = response.data?.choices?.[0].text;
  if (text === undefined) {
    throw new Error('No result.');
  }
  res.status(200).json({ result: text });
}
