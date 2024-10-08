import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { Subscription } from 'rxjs';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  standalone: true,
  imports: [ContactDetailsComponent, NgFor],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];  // Инициализация как пустой массив
  selectedContact: Contact | null = null;  // Может быть null для сброса
  private contactSubscription?: Subscription;  // Для управления подпиской

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.loadContacts();
  }

  // Загружаем контакты из сервиса
  private loadContacts() {
    this.contactSubscription = this.contactService.getContacts().subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts.map((contact) => {
          if (!contact.phone) {
            contact.phone = {
              mobile: '',
              work: ''
            };
          }
          return contact;
        });
      },
      (error) => {
        console.error('Ошибка при загрузке контактов:', error);
      }
    );
  }
  

  // Получаем индекс контакта по его ID
  private getIndexOfContact(contactId: string): number {
    return this.contacts.findIndex(contact => contact._id === contactId);
  }

  // Выбор контакта
  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }

  // Создание нового контакта
  createNewContact() {
    const contact: Contact = {
      name: '',
      email: '',
      phone: {
        work: '',
        mobile: ''
      }
    };
    this.selectContact(contact); // Новый контакт по умолчанию выбран
  }
  

  // Добавление нового контакта
  addContact(contact: Contact) {
    this.loadContacts(); // Перезагрузка списка после добавления
  }

  // Обновление существующего контакта
  updateContact(contact: Contact) {
    this.loadContacts(); // Перезагрузка списка после обновления
  }

  // Удаление контакта по его ID
  deleteContact(contactId: string) {
    this.contactService.deleteContact(contactId).subscribe({
      next: () => {
        this.loadContacts(); // Перезагрузка списка после удаления
      },
      error: (err) => {
        console.error('Ошибка при удалении контакта:', err);
      }
    });
  }

  // Освобождение ресурсов при уничтожении компонента
  ngOnDestroy() {
    if (this.contactSubscription) {
      this.contactSubscription.unsubscribe();
    }
  }
}
