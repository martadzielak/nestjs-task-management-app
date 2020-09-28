import { IsNotEmpty, IsOptional } from "class-validator";
import { TaskStatus } from "../task.module";

import { TaskStatus as Status } from '../task.module';
import { IsOptional as Optional, IsIn, IsNotEmpty as NotEmpty } from 'class-validator';

export class GetTasksFilterDto {
    @Optional()
    @IsIn([Status.OPEN, Status.IN_PROGRESS, Status.DONE])
    status: Status;

    @Optional()
    @NotEmpty()
    search: string;
}