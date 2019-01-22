import { Pipe, PipeTransform } from '@angular/core';
import { Gnome } from '../../models/gnome';

@Pipe({
  name: 'gnomeGender'
})
export class GenderPipe implements PipeTransform {

  transform(gnomes: Gnome[], searchTerm: string): Gnome[] {
    if (!gnomes || !searchTerm) {
      return gnomes;
    }

    return gnomes.filter(gnome =>
      gnome.gender.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
