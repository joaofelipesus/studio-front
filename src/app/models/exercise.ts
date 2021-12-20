import { MuscularGroup } from './muscular_group';

export class Exercise {
  constructor(
    public id?: string,
    public name?: string,
    public muscularGroupId?: string,
    public muscularGroup?: MuscularGroup,
  ) {
    muscularGroup = new MuscularGroup();
  }
  // constructor(){
  //   this.muscularGroup = new MuscularGroup();
  // }
}
