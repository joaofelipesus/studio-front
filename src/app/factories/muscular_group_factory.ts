import { MuscularGroup } from '../models/muscular_group';

export class MuscularGroupFactory {
  static build(params): MuscularGroup {
    const muscularGroupParams = params['muscular_group']
    return new MuscularGroup(
      muscularGroupParams.id,
      muscularGroupParams.name
    )
  }
}
