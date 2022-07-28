import { Person } from 'domain/person';
import sticker from 'images/sticker.png';

import audioBart from 'audios/ay-caramba.mp3';
import audioMario from 'audios/mario-coin.mp3';

const persons = [
  new Person(0, 'Pachita', sticker, [
    audioBart,
    audioMario,
    audioBart,
    audioBart,
    audioMario,
    audioBart,
    audioBart,
    audioMario,
    audioMario,
    audioBart,
    audioBart,
    audioMario,
    audioBart,
    audioBart,
    audioMario,
  ]),
  new Person(1, 'Santi', sticker, [audioMario, audioBart, audioBart]),
  new Person(2, 'Cumba', sticker, [audioBart]),
  new Person(1, 'Santi', sticker, [audioMario, audioBart]),
  new Person(2, 'Cumba', sticker, [audioBart]),
  new Person(1, 'Santi', sticker, [audioMario, audioBart, audioBart]),
  new Person(2, 'Cumba', sticker, [audioBart]),
  new Person(1, 'Santi', sticker, [audioMario, audioBart]),
  new Person(2, 'Cumba', sticker, [audioBart]),
];

class PersonService {
  getByName(name) {
    return persons.find((persona) => persona.name === name);
  }

  getAll() {
    return persons;
  }
}

export const personService = new PersonService();
