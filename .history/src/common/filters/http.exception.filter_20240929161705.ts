import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from "@nestjs/common";
import { error } from "console";
import { response } from "express";


@Catch()
export class AllExceptionFilter implements ExceptionFilter {
    private logger = new Logger(AllExceptionFilter.name)

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const resonse = ctx.getResponse()
        const request = ctx.getRequest()

        const status = exception instanceof HttpException ?
            exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR
        const msg = exception instanceof HttpException ?
            exception.getResponse()
            : exception

        this.logger.error(`Status ${status} Error:${JSON.stringify(msg)}`)
        response.status(status).json({
            time: new Date().toISOString(),
            path: request.url,
            error: msg
        })

    }


}