import { TaskStatus } from "../task.module";

import { TaskStatus as Status } from '../task.module'

export class GetTasksFilterDto {
    status: Status;
    search: string;
}