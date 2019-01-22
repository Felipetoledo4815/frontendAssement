import { Component, OnInit, Input } from '@angular/core';
import { Gnome } from '../models/gnome';
import { GnomeService } from '../services/gnome.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-gnomes',
  templateUrl: './gnomes.component.html',
  styleUrls: ['./gnomes.component.sass']
})

export class GnomesComponent implements OnInit {

  gnomes: Gnome[];
  searchName = '';
  searchProfession1 = '';
  searchProfession2 = '';
  searchHairColor = '';
  searchGender = '';

  @Input()
  set setSearchName (name: string) {
    this.searchName = name;
  }
  @Input()
  set setSearchProfession1 (profession: string) {
    this.searchProfession1 = profession;
  }
  @Input()
  set setSearchProfession2 (profession: string) {
    this.searchProfession2 = profession;
  }
  @Input()
  set setSearchHairColor (hairColor: string) {
    this.searchHairColor = hairColor;
  }
  @Input()
  set setSearchGender (gender: string) {
    this.searchGender = gender;
  }

  constructor(private gnomeService: GnomeService) {
  }
  ngOnInit() {
    this.gnomeService.getGnomes().subscribe(town => {
      this.gnomes = town.Brastlewark;
      this.setGnomesGender();
    });
  }

  setGnomesGender() {
    let gnomeNames = this.gnomes.map(a => a.name.split(' ')[0]);
    gnomeNames = _.uniq(gnomeNames);
    for (let i = 0; i < gnomeNames.length; i++) {
      if (i % 2 === 0) {
        this.setGnomesGenderByName(gnomeNames[i], 'Male');
      } else {
        this.setGnomesGenderByName(gnomeNames[i], 'Female');
      }
    }
  }

  setGnomesGenderByName (name: string, gender: string) {
    let gnomes = _.filter(this.gnomes, gnome => gnome.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    for (let gnome of gnomes) {
      gnome.gender = gender;
    }
  }

}
