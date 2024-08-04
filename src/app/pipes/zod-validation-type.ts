import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { MESSAGE_HELPERS } from '../helpers/messages-helpers';

export class ZodValidatePipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      const parsedValue = this.schema.parse(value);

      return parsedValue;
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException({
          message: MESSAGE_HELPERS.validationError,
          statusCode: 400,
          errors: fromZodError(error),
        });
      }

      throw new BadRequestException(MESSAGE_HELPERS.validationError);
    }
  }
}
