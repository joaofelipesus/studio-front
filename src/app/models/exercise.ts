import { MuscularGroup } from './muscular_group';

export class Exercise {
  id: string;
  name: string;
  muscular_group_id: string;
  muscularGroup: MuscularGroup;

  constructor(){
    this.muscularGroup = new MuscularGroup();
  }
}
