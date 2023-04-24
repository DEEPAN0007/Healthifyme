import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  users: any[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
  ];
  totalUsers: number = 2;
  totalSales: number = 1500;

  editUser(user: any) {
    // Implement edit user logic here
    console.log('Edit user:', user);
  }

  deleteUser(user: any) {
    // Implement delete user logic here
    console.log('Delete user:', user);
  }
}
