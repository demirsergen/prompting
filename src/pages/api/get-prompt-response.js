import { openai } from '../../../openai';

export default async function getPromptResponse(req, res) {
  const { input, tone, targetAudience } = req.body;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `You are helping people write better captions for their Instagram posts. 
    They will give you a description of the photo and information about the feel, vibe
    and you will return the caption. Limit the character count to max = 125.
    Description of the photo:${input}. The tone of the caption:${tone}. The target audience:${targetAudience}`,
    temperature: 1,
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
