import { Pipe, PipeTransform } from '@angular/core';
import { Gnome } from '../../models/gnome';

@Pipe({
  name: 'gnomeName'
})
export class NamePipe implements PipeTransform {

  transform(gnomes: any[], searchTerm: string): Gnome[] {
    if (!gnomes || !searchTerm) {
      return gnomes;
    }

    return gnomes.filter(gnome =>
      gnome.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
