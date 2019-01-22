import { Pipe, PipeTransform } from '@angular/core';
import { Gnome } from '../../models/gnome';

@Pipe({
  name: 'gnomeHairColor'
})
export class HairColorPipe implements PipeTransform {

  transform(gnomes: Gnome[], searchTerm: string): Gnome[] {
    if (!gnomes || !searchTerm) {
      return gnomes;
    }

    return gnomes.filter(gnome =>
      gnome.hair_color.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
