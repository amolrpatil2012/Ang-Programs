import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Department } from '../model/class/Customer';
import { MasterService } from './master.service';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  API_URL: string = 'https://projectapi.gerasim.in/api/Complaint/';

  public onRoleChange$: Subject<string> = new Subject<string>();

  public role$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private master: MasterService) {}

  getAllDept(): Observable<Department[]> {
    debugger;
    return this.master.get<Department[]>(
      this.API_URL + Constant.DEPARTMENT_METHODS.GET_PARENT_DEPT
    );
  }

  saveNewDept(obj: any) {
    return this.master.post(
      `${Constant.API_URL}${Constant.DEPARTMENT_METHODS.ADD_NEW_DEPT}`,
      obj
    );
  }

  addTwoNo(num1: number, num2: number) {
    debugger;
    return num1 + num2;
  }
}
