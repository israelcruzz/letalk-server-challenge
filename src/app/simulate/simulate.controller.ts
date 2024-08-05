import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { SimulateService } from './simulate.service';
import { SimulateLoanDto } from './dto/simulate-loan.dto';

@Controller('simulate')
export class SimulateController {
  constructor(private readonly simulateService: SimulateService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public simulate(@Body() body: SimulateLoanDto) {
    try {
      const response = this.simulateService.simulate(body);

      return response;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
