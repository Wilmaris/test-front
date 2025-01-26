import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule] 
})
export class TutorsPage implements OnInit {

  tutors: any[] = [];
  filteredTutors: any[] = [];
  specialityFilter = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTutors().subscribe(data => {
      this.tutors = data;
      this.filteredTutors = data;
    });
  }

  filterBySpeciality() {
    this.filteredTutors = this.tutors.filter(tutor => 
      tutor.speciality.toLowerCase().includes(this.specialityFilter.toLowerCase())
    );
  }

}
