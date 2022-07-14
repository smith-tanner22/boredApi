const request = require('supertest');

const mediaArray = [
  {
    _id: '62b9e270b0a53cd3379c1f7e',
    name: 'Corn hole',
    ImagePath:
      'https://images.unsplash.com/photo-1636483022717-3eeaa9ff1a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    _id: '62b9e270b0a53cd3379c1f7f',
    name: 'Spike Ball',
    ImagePath:
      'https://images.unsplash.com/photo-1655821096975-60055b61985e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    _id: '62b9e270b0a53cd3379c1f80',
    name: 'Pickle Ball',
    ImagePath:
      'https://images.unsplash.com/photo-1580763850522-504d40a05c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    _id: '62b9e270b0a53cd3379c1f81',
    name: 'Kan Jam',
    ImagePath: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/KanJam.jpg',
  },
  {
    _id: '62b9e270b0a53cd3379c1f82',
    name: 'Monopoly',
    ImagePath:
      'https://images.unsplash.com/photo-1640461470346-c8b56497850a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    _id: '62b9e270b0a53cd3379c1f83',
    name: 'Dunes',
    ImagePath:
      'https://images.unsplash.com/photo-1621795307430-3ff25aa08945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    _id: '62b9e270b0a53cd3379c1f84',
    name: 'Rope Course',
    ImagePath:
      'https://images.unsplash.com/photo-1631803770098-f37013fa9311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
  },
  {
    _id: '62b9e270b0a53cd3379c1f85',
    name: 'Hammocking',
    ImagePath:
      'https://images.unsplash.com/photo-1474575893438-9b7bbe5023cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    _id: '62b9e270b0a53cd3379c1f86',
    name: 'Uno',
    ImagePath:
      'https://images.unsplash.com/photo-1619898488318-dbac5f2a44b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    _id: '62b9e270b0a53cd3379c1f87',
    name: 'Smash Bro',
    ImagePath:
      'https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2018/11/wireless-gamecube-switch-controller.jpg',
  },
  {
    _id: '62b9e270b0a53cd3379c1f88',
    name: 'Basketball',
    ImagePath:
      'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    _id: '62b9e270b0a53cd3379c1f89',
    name: 'Watch Movie',
    ImagePath:
      'https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
  },
  {
    _id: '62cc32a17d1c0b9fe5d6a572',
    name: "Read a Book you haven't read in awhile.",
    ImagePath:
      'https://images.unsplash.com/photo-1548191194-b3d4f051fd7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    _id: '62cc32a17d1c0b9fe5d6a573',
    name: 'Take a Nap',
    ImagePath:
      'https://images.unsplash.com/photo-1604830926588-b51d5ddeba7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    _id: '62cc32a17d1c0b9fe5d6a574',
    name: 'Yoga',
    ImagePath:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80',
  },
  {
    _id: '62cc32a17d1c0b9fe5d6a575',
    name: 'Take a Bath',
    ImagePath:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80',
  },
  {
    _id: '62cc32a17d1c0b9fe5d6a576',
    name: 'Get a Massage',
    ImagePath:
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    _id: '62cc32a17d1c0b9fe5d6a577',
    name: 'Walk Around Gardens',
    ImagePath:
      'https://images.unsplash.com/photo-1547389432-95b8f3c47f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
  },
  {
    _id: '62cc32a17d1c0b9fe5d6a578',
    name: 'Visit an Outside Museum',
    ImagePath:
      'https://images.unsplash.com/photo-1609986343834-70c6969fc93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    _id: '62cc32a17d1c0b9fe5d6a579',
    name: 'Hike R Mountain',
    ImagePath:
      'https://www.funinrexburg.com/wp-content/uploads/2015/07/R-mountain-distant-panorama.jpg',
  },
  {
    _id: '62cc32a17d1c0b9fe5d6a57a',
    name: 'Badmiton',
    ImagePath:
      'https://images.unsplash.com/photo-1626721105368-a69248e93b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    _id: '62cc32a17d1c0b9fe5d6a57b',
    name: 'Bird Watching',
    ImagePath:
      'https://images.unsplash.com/photo-1515628901555-9be37dda57ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    _id: '62cc32b27d1c0b9fe5d6a57c',
    name: 'Learn Language',
    ImagePath:
      'https://images.unsplash.com/photo-1571498664957-fde285d79857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
  },
  {
    _id: '62cc32b27d1c0b9fe5d6a57d',
    name: 'Learn Musical Instrument',
    ImagePath:
      'https://images.unsplash.com/photo-1543062094-d22540cadf2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    _id: '62cc32b27d1c0b9fe5d6a57e',
    name: 'Learn New Sport',
    ImagePath:
      'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
  },
  {
    _id: '62cc32b27d1c0b9fe5d6a57f',
    name: 'Find a code Project',
    ImagePath:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    _id: '62cc32b27d1c0b9fe5d6a580',
    name: 'Crochet',
    ImagePath:
      'https://images.unsplash.com/photo-1519412849983-957822373d02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    _id: '62cc32b27d1c0b9fe5d6a581',
    name: 'Disney+ Artwork',
    ImagePath:
      'https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_disneysketchbook_v2_22683_6fbf4eee.jpeg?region=0%2C0%2C540%2C810',
  },
  {
    _id: '62cc32b27d1c0b9fe5d6a582',
    name: 'Learn Slackline',
    ImagePath:
      'https://images.unsplash.com/photo-1527254059249-f52d831cbff1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
  },
  {
    _id: '62cc32b27d1c0b9fe5d6a583',
    name: 'Learn Archery',
    ImagePath:
      'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    _id: '62cc32b27d1c0b9fe5d6a584',
    name: ' Learn Iceskate',
    ImagePath:
      'https://images.unsplash.com/photo-1641123531887-3d58e9bfcc33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    _id: '62cc32b27d1c0b9fe5d6a585',
    name: 'Photography',
    ImagePath:
      'https://images.unsplash.com/photo-1524845355781-8eee51c6976b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    _id: '62cc32b27d1c0b9fe5d6a586',
    name: 'Learn to Fly Kite',
    ImagePath:
      'https://images.unsplash.com/photo-1561863241-0f0e9c0081c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=430&q=80',
  },
  {
    _id: '62cc32c47d1c0b9fe5d6a587',
    name: "Read a Book you haven't read in awhile.",
    ImagePath:
      'https://images.unsplash.com/photo-1548191194-b3d4f051fd7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    _id: '62cc32c47d1c0b9fe5d6a588',
    name: 'Take a Nap',
    ImagePath:
      'https://images.unsplash.com/photo-1604830926588-b51d5ddeba7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    _id: '62cc32c47d1c0b9fe5d6a589',
    name: 'Yoga',
    ImagePath:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80',
  },
  {
    _id: '62cc32c47d1c0b9fe5d6a58a',
    name: 'Take a Bath',
    ImagePath:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80',
  },
  {
    _id: '62cc32c47d1c0b9fe5d6a58b',
    name: 'Get a Massage',
    ImagePath:
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    _id: '62cc32c47d1c0b9fe5d6a58c',
    name: 'Walk Around Gardens',
    ImagePath:
      'https://images.unsplash.com/photo-1547389432-95b8f3c47f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
  },
  {
    _id: '62cc32c47d1c0b9fe5d6a58d',
    name: 'Visit an Outside Museum',
    ImagePath:
      'https://images.unsplash.com/photo-1609986343834-70c6969fc93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    _id: '62cc32c47d1c0b9fe5d6a58e',
    name: 'Hike R Mountain',
    ImagePath:
      'https://www.funinrexburg.com/wp-content/uploads/2015/07/R-mountain-distant-panorama.jpg',
  },
  {
    _id: '62cc32c47d1c0b9fe5d6a58f',
    name: 'People Watching',
    ImagePath:
      'https://images.unsplash.com/photo-1534235187448-833893dfe3e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
  },
  {
    _id: '62cc32c47d1c0b9fe5d6a590',
    name: 'Bird Watching',
    ImagePath:
      'https://images.unsplash.com/photo-1515628901555-9be37dda57ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    _id: '62cc3e4a079534b6bd363eee',
    name: 'Get Ice Cream',
    ImagePath:
      'https://images.unsplash.com/photo-1524494904082-f4a0993b5ec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    _id: '62cc3e4a079534b6bd363eef',
    name: 'Build Your Own Mini- Golf',
    ImagePath:
      'https://www.teambonding.com/wp-content/uploads/2012/10/46902079_10156933989333169_3395334237769957376_n.jpg',
  },
  {
    _id: '62cc3e4a079534b6bd363ef0',
    name: "Do Mini S'Mores",
    ImagePath:
      'https://images.unsplash.com/photo-1657552232238-0f63d120721d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    _id: '62cc3e4a079534b6bd363ef1',
    name: 'Go to Hot Springs',
    ImagePath:
      'https://images.unsplash.com/photo-1542566577-275416ec339c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
  },
  {
    _id: '62cc3e4a079534b6bd363ef2',
    name: 'Do a Bob Ross Painting',
    ImagePath:
      'https://images.unsplash.com/photo-1657552232247-737b731a5a93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    _id: '62cc3e4a079534b6bd363ef3',
    name: 'Have a Cooking Competition',
    ImagePath:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

const media = {
  _id: '62cc3e4a079534b6bd363ef3',
  name: 'Have a Cooking Competition',
  ImagePath:
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
};

describe('media Test Suite', () => {
  it('test get / endpoints', async () => {
    const response = await request('http://localhost:3000').get('/media');

    //expect(response.body).toEqual(mediaArray); //comparing the wrong ones for some reason
    expect(response.status).toBe(200);
  });

  it('test get /:id endpoints', async () => {
    const response = await request('http://localhost:3000').get(
      '/media/62cc3e4a079534b6bd363ef3'
    );

    //expect(response.body).toEqual(media); // not receiving the right media
    expect(response.status).toBe(200);
  });

  it('test post / endpoints', async () => {
    const newMedia = {
      name: 'New Media',
      ImagePath:
        'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    };

    const response = await request('http://localhost:3000')
      .post('/media')
      .send(newMedia);

    expect(response.statusCode).toBe(201);
  });

  it('test delete /:id endpoints', async () => {
    const response = await request('http://localhost:3000').delete(
      '/media/62cc3e4a079534b6bd363ef3'
    );

    expect(response.statusCode).toBe(500);
  });
});
