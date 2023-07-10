import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Sử dụng json server
  // // Gửi dữ liệu về máy chủ
  // postEmployee(data: any) {
  //   return this.http.post<any>('http://localhost:3000/posts', data).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  // // Lấy dữ liệu từ máy chủ
  // getEmployee() {
  //   return this.http.get<any>('http://localhost:3000/posts').pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  // // Cập nhật dữ liệu trên máy chủ
  // updateEmployee(data: any, id: number) {
  //   return this.http.put<any>('http://localhost:3000/posts/' + id, data).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  // // Xóa dữ liệu trên máy chủ
  // deleteEmployee(id: number) {
  //   return this.http.delete<any>('http://localhost:3000/posts/' + id).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  // Sử dụng mockAPI
  postEmployee(data: any) {
    return this.http.post<any>('https://64abae319edb4181202e4ec9.mockapi.io/api/employee', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getEmployee() {
    return this.http.get<any>('https://64abae319edb4181202e4ec9.mockapi.io/api/employee').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateEmployee(data: any, id: number) {
    return this.http.put<any>('https://64abae319edb4181202e4ec9.mockapi.io/api/employee/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteEmployee(id: number) {
    return this.http.delete<any>('https://64abae319edb4181202e4ec9.mockapi.io/api/employee/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
