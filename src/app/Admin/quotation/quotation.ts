import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment, DEFAULT_API_BASE_URL } from '../../../environments/environment';

const API_BASE_URL = environment.apiBaseUrl || DEFAULT_API_BASE_URL;

@Component({
  selector: 'app-quotation',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './quotation.html',
  styleUrls: ['./quotation.scss'],
})
export class Quotation implements OnInit {
  quotations: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadQuotations();
  }

  loadQuotations() {
    this.loading = true;
    this.http.get<any>(`${API_BASE_URL}/quotations/get`).subscribe({
      next: (res) => {
        if (res.success) {
          this.quotations = res.data;
        } else {
          this.quotations = [];
        }
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }

  viewQuotation(quotation: any) {
    const itemList = quotation.items?.map((i: any) => i.label).join(', ') || 'No items';
    alert(`Main Type: ${quotation.mainType || '-'}
Sub Type: ${quotation.subType || '-'}
Name: ${quotation.name}
Mobile: ${quotation.mobile}
Email: ${quotation.email}
Title: ${quotation.title || '-'}
Price: ${quotation.price || '-'}
Items: ${itemList}`);
  }

  editQuotation(quotation: any) {
    alert(`Redirect to edit page for ${quotation.name}`);
  }

  deleteQuotation(id: string) {
    if (confirm('Are you sure you want to delete this quotation?')) {
      this.http.delete(`${API_BASE_URL}/quotations/${id}`).subscribe({
        next: () => {
          this.quotations = this.quotations.filter((q) => q._id !== id);
        },
        error: (err) => console.error(err),
      });
    }
  }
}
