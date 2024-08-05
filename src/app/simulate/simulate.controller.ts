import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ZodValidatePipe } from '../pipes/zod-validation-type';
import { SimulateService } from './simulate.service';
import { SimulateLoanDto } from './dto/simulate-loan.dto';

@Controller('simulate')
export class SimulateController {
  constructor(private readonly simulateService: SimulateService) {}

  @Post('fic')
  public simulate(@Body() body: SimulateLoanDto) {
    const response = this.simulateService.simulate(body);

    return response;
  }
}
