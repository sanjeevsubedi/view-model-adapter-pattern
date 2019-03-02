import { User, UserVM } from '../models/user.model';
import { BaseAdapter } from './base.adapter';

export class UserAdapter implements BaseAdapter<User, UserVM> {
  transform(item: User): UserVM {
    return {
      userId: item.userId,
      id: item.id,
      label: item.title,
      completed: item.completed
    };
  }
}
