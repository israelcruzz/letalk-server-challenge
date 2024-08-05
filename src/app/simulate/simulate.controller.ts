import { Body, Controller, Post } from '@nestjs/common';
import { SimulateService } from './simulate.service';
import { SimulateLoanDto } from './dto/simulate-loan.dto';

@Controller('simulate')
export class SimulateController {
  constructor(private readonly simulateService: SimulateService) {}

  @Post()
  public simulate(@Body() body: SimulateLoanDto) {
    const response = this.simulateService.simulate(body);

    return response;
  }
}
