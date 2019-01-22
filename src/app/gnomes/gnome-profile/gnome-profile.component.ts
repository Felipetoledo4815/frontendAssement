import { Component, OnInit, Input } from '@angular/core';
import { Gnome } from 'src/app/models/gnome';


@Component({
  selector: 'app-gnome-profile',
  templateUrl: './gnome-profile.component.html',
  styleUrls: ['./gnome-profile.component.sass']
})
export class GnomeProfileComponent implements OnInit {

  gnome: Gnome;

  @Input()
  set setGnome(gnome: Gnome) {
    this.gnome = gnome;
  }

  constructor() { }

  ngOnInit() {
  }

}
