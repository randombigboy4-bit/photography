import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment, DEFAULT_API_BASE_URL } from '../../../environments/environment';

const API_BASE_URL = environment.apiBaseUrl || DEFAULT_API_BASE_URL;

@Component({
  selector: 'app-contact-details',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-details.html',
  styleUrl: './contact-details.scss',
})
export class ContactDetails implements OnInit {
  contacts: any[] = [];
  loading = true;
    apiUrl = `${API_BASE_URL}/contact`;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.loadContacts();
  }
  loadContacts() {
    this.loading = true;
    this.http.get<any>(`${this.apiUrl}/get`).subscribe({
      next: (res) => {
        this.contacts = res.data || [];
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }

  viewContact(contact: any) {
    alert(
      `Name: ${contact.fullName}\nEmail: ${contact.email}\nNumber: ${contact.phoneNumber}\nEvent: ${contact.eventType}`
    );
  }

  editContact(contact: any) {
    alert(`Redirect to edit page for ${contact.fullName}`);
    
  }

  deleteContact(id: string) {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.http.delete(`${this.apiUrl}/delete/${id}`).subscribe({
        next: () => {
          this.contacts = this.contacts.filter((c) => c._id !== id);
        },
        error: (err) => console.error(err),
      });
    }
  }
}
