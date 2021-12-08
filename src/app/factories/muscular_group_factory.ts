import { MuscularGroup } from '../models/muscular_group';

export class MuscularGroupFactory {
  static build(params): MuscularGroup {
    const muscular_group_params = params['muscular_group']
    return new MuscularGroup(muscular_group_params['id'], muscular_group_params['name']);
  }
}
