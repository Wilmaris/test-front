import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
  standalone: true,
  imports: [CommonModule,  FormsModule, IonicModule] 
})
export class ClassesPage implements OnInit {
  bookings: any[] = [];
  filteredBookings: any[] = [];
  userFilter = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getBookings().subscribe(data => {
      this.bookings = data;
      this.filteredBookings = data;
    });
  }

  filterByUser() {
    this.filteredBookings = this.bookings.filter(booking => 
      booking.student.first_name.toLowerCase().includes(this.userFilter.toLowerCase())
    );
  }
}
