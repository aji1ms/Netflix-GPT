import { CohereClientV2 } from 'cohere-ai';
import { GPT_KEY } from './Constant';

const Cohere = new CohereClientV2({
    token: GPT_KEY,
})

export default Cohere;