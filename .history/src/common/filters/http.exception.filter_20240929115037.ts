import { ArgumentsHost } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";

export class AllExceptionFilter extends BaseExceptionFilter {
catch(exception: any, host: ArgumentsHost): void {
    throw new Error('')
}

}