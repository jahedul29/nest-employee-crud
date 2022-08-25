import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeDocument } from './schemas/employee.schema';
import { Employee } from './schemas/employee.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const newEmployee = new this.employeeModel(createEmployeeDto);
    return newEmployee.save();
  }

  async getAllEmployee() {
    return this.employeeModel
      .find({})
      .then((employees) => {
        return employees;
      })
      .catch((err) => console.log(err));
  }

  async getSingleEmployee(id: string) {
    return this.employeeModel
      .findOne({ _id: id })
      .exec()
      .then((employee) => {
        return employee;
      })
      .catch((err) => console.log(err));
  }

  async updateEmployee(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    return this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto, {
      new: true,
    });
  }

  async removeEmployee(id: string): Promise<any> {
    return this.employeeModel
      .findByIdAndRemove({ _id: id })
      .exec()
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
  }
}
