import { MuscularGroup } from '../models/muscular_group';

export class MuscularGroupFactory {
  static build(params): MuscularGroup {
    const muscularGroupParams = params['muscular_group']
    let muscularGroup = new MuscularGroup();
    muscularGroup.id = muscularGroupParams['id'];
    muscularGroup.name = muscularGroupParams['name'];
    return muscularGroup;
  }
}
