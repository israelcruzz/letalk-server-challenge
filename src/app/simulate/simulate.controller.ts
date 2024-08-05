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
import { ApiTags } from '@nestjs/swagger';

@Controller('simulate')
export class SimulateController {
  constructor(private readonly simulateService: SimulateService) {}

  @ApiTags('simulate')
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
