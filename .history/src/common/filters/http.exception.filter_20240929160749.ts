import {  ArgumentsHost, Catch,ExceptionFilter } from "@nestjs/common";


@Catch()
export class AllExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
    }


}