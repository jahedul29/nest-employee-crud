import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  getAllEmployee() {
    return this.employeeService.getAllEmployee();
  }

  @Get(':id')
  getSingleEmployee(@Param('id') id: string) {
    return this.employeeService.getSingleEmployee(id);
  }

  @Patch(':id')
  updateEmployee(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.updateEmployee(id, updateEmployeeDto);
  }

  @Delete(':id')
  removeEmployee(@Param('id') id: string) {
    return this.employeeService.removeEmployee(id);
  }
}
