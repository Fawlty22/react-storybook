import { http, HttpResponse} from 'msw';
import { mockDiscDatabase } from './database';

export const getAllDiscs = http.get('http://localhost:3000/discs', ({}) => {
  return HttpResponse.json(mockDiscDatabase, {status: 200});
});

export const getEmptyDiscs = http.get('http://localhost:3000/discs', ({}) => {
  return HttpResponse.json([], {status: 200});
});

export const updateDisc = http.put('http://localhost:3000/discs/:id', async ({request}) => {
  const updatedDisc = await request.json()
  return HttpResponse.json(updatedDisc);
});

//default route handlers
export const handlers = [
  getAllDiscs,
  updateDisc
];
