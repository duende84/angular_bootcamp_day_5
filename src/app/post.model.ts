import { Comment} from './comment.model'

export class Post {
  constructor(
    public id: number,
    public title: string,
    public body: string,
    public userId: number,
    public comments?:Comment[]
  ) {}
}