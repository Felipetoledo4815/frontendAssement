import { Pipe, PipeTransform } from '@angular/core';
import { Gnome } from 'src/app/models/gnome';

@Pipe({
  name: 'gnomeProfession'
})
export class ProfessionPipe implements PipeTransform {

  transform(gnomes: Gnome[], searchTerm: string): Gnome[] {
    if (!gnomes || !searchTerm) {
      return gnomes;
    }

    return gnomes.filter(gnome =>
      gnome.professions.find(p =>
        p.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));
  }
}
