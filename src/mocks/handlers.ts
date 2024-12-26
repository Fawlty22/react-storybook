import { http, HttpResponse} from 'msw';
import { DiscDto } from '../interfaces/disc.interface';

const sampleDiscs: DiscDto[] = [
  {
    id: 1,
    inBag: true,
    name: 'Destroyer',
    brand: 'Innova',
    category: 'Driver',
    speed: 12,
    glide: 5,
    turn: -1,
    fade: 3,
    userId: 1,
  },
  {
    id: 2,
    inBag: true,
    name: 'Aviar',
    brand: 'Discmania',
    category: 'Putter',
    speed: 3,
    glide: 3,
    turn: 0,
    fade: 1,
    userId: 1,
  },
  {
    id: 3,
    inBag: false,
    name: 'Buzzz',
    brand: 'Discraft',
    category: 'Midrange',
    speed: 5,
    glide: 4,
    turn: -1,
    fade: 1,
    userId: 1,
  },
];

export const handlers = [

  http.get('http://localhost:3000/discs', ({}) => {
    return HttpResponse.json(sampleDiscs, {status: 200}); 
  }),

  http.put('http://localhost:3000/discs/:id', async ({request}) => {
    const updatedDisc = await request.json() 
    return HttpResponse.json(updatedDisc);
  }),

];
