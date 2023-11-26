import { Injectable } from '@angular/core';
import { DropdownItem } from 'src/app/core/components/dropdown-field/dropdown-field.component';

@Injectable({
  providedIn: 'root',
})
export class RegistrationState {
  readonly status: 'idle' | 'pending' | 'success' | 'error' = 'idle';

  readonly name: string = '';
  readonly nameError: string = '';

  readonly specializations: DropdownItem[] = [
    {
      id: '1',
      name: 'Медицина и здравоохранение',
    },
    {
      id: '2',
      name: 'Финансы и бухгалтерия',
    },
    {
      id: '3',
      name: 'Информационные технологии',
    },
    {
      id: '4',
      name: 'Образование',
    },
    {
      id: '5',
      name: 'Производство и инженерия',
    },
    {
      id: '6',
      name: 'Маркетинг и аналитика',
    },
    {
      id: '7',
      name: 'Другое',
    },
  ];
  readonly selectedSpecializing: DropdownItem | null = null;
  readonly specializingError: string = '';

  readonly possibleStaffSize: DropdownItem[] = [
    {
      id: '1',
      name: '1-100 человек',
    },
    {
      id: '2',
      name: '101-300 человек',
    },
    {
      id: '3',
      name: '301-1000 человек',
    },
    {
      id: '4',
      name: 'Более 1000 человек',
    },
  ];
  readonly selectedStaffSize: DropdownItem | null = null;
  readonly staffSizeError: string = '';

  readonly email: string = '';
  readonly emailError: string = '';

  readonly phoneNumber: string = '';
  readonly phoneNumberError: string = '';
}
