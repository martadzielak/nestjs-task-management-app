import { InternalServerErrorException } from "@nestjs/common";

export interface JwtPayload {
    username: string;
}