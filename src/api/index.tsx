
import axios from 'axios';

export const fetchJokes = async () => {
  try {
    const response = await axios.get('https://geek-jokes.sameerkumar.website/api?format=json');
    if (response.status===200) return response.data;
    throw new Error("Error fetching Joke");
  } catch (error) {
    console.error(error);
  }
}