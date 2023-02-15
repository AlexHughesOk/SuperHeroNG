import { Component } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.css']
})
export class TableTestComponent {
  displayedColumns: string[] = ['id', 'name', 'firstName', 'lastName', 'place', 'button'];
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private superheroService: SuperHeroService) {}

  ngOnInit() : void {
    this.superheroService.getSuperHeroes().subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }

  initNewHero() {
    this,this.heroToEdit = new SuperHero(); 
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }
  
}
