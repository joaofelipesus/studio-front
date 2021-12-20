import {MuscularGroupFactory} from 'src/app/factories/muscular_group_factory';
import { MuscularGroup } from '../models/muscular_group';

describe('MuscularGroupFactory', () => {
  it('#build should return a muscular group object', () => {
    const params = {
      "muscular_group": {
        "id": "35b7de09-34fa-4a8c-92d9-f70dd8ddfbdd",
        "name": "Abdomên"
      }
    }
    const response = MuscularGroupFactory.build(params);
    expect(response.id).toEqual('35b7de09-34fa-4a8c-92d9-f70dd8ddfbdd');
    expect(response.name).toEqual('Abdomên');
  })
})
