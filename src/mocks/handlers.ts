import { http, HttpResponse} from 'msw';
import { DiscDto } from '../interfaces/disc.interface';

const sampleDiscs: DiscDto[] = [
  {
    "id": 1,
    "userId": 1,
    "inBag": true,
    "name": "Aviar",
    "brand": "Discmania",
    "category": "Putter",
    "speed": 3,
    "glide": 3,
    "turn": 0,
    "fade": 1
  },
  {
    "id": 2,
    "userId": 1,
    "inBag": true,
    "name": "Buzzz",
    "brand": "Discraft",
    "category": "Midrange",
    "speed": 5,
    "glide": 4,
    "turn": -1,
    "fade": 1
  },
  {
    "id": 3,
    "userId": 2,
    "inBag": true,
    "name": "Destroyer",
    "brand": "Innova",
    "category": "Distance Driver",
    "speed": 12,
    "glide": 5,
    "turn": -1,
    "fade": 3
  },
  {
    "id": 4,
    "userId": 1,
    "inBag": true,
    "name": "Teebird",
    "brand": "Innova",
    "category": "Fairway Driver",
    "speed": 7,
    "glide": 5,
    "turn": 0,
    "fade": 2
  },
  {
    "id": 5,
    "userId": 1,
    "inBag": true,
    "name": "Mako3",
    "brand": "Innova",
    "category": "Midrange",
    "speed": 5,
    "glide": 5,
    "turn": 0,
    "fade": 0
  },
  {
    "id": 6,
    "userId": 2,
    "inBag": true,
    "name": "Rock3",
    "brand": "Discraft",
    "category": "Midrange",
    "speed": 5,
    "glide": 4,
    "turn": 0,
    "fade": 2
  },
  {
    "id": 7,
    "userId": 2,
    "inBag": false,
    "name": "Zombee",
    "brand": "Discraft",
    "category": "Putter",
    "speed": 2,
    "glide": 3,
    "turn": 0,
    "fade": 1
  },
  {
    "id": 8,
    "userId": 1,
    "inBag": false,
    "name": "Champion Eagle",
    "brand": "Innova",
    "category": "Fairway Driver",
    "speed": 7,
    "glide": 4,
    "turn": -1,
    "fade": 2
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
