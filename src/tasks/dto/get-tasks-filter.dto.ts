import { IsNotEmpty, IsOptional } from "class-validator";
import { TaskStatus } from '../task-status.enum';
import { IsOptional as Optional, IsIn, IsNotEmpty as NotEmpty } from 'class-validator';

export class GetTasksFilterDto {
    @Optional()
    @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status: TaskStatus;

    @Optional()
    @NotEmpty()
    search: string;
}