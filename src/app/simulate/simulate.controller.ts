import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ZodValidatePipe } from '../pipes/zod-validation-type';
import { ISimulateLoanDto, simulateLoanSchemaDto } from './dto/simulate.dto';
import { SimulateService } from './simulate.service';

@Controller('simulate')
export class SimulateController {
  constructor(private readonly simulateService: SimulateService) {}

  @Post('fic')
  @UsePipes(new ZodValidatePipe(simulateLoanSchemaDto))
  public simulate(@Body() body: ISimulateLoanDto) {
    const response = this.simulateService.simulate(body);

    return response;
  }
}
