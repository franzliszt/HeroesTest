// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;
  tester = "Stian tester komponenter";

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // params tar id parameter fra ActivatedRoute
    // og bruker heroService til å fange en her med id'en
    // switchMap mapper id til observable route parameter til
    // en new Observable, resultatet til heroService.getHero metode
    // + operator konverterer id til et nummer fra en streng
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params["id"]))
      .subscribe(hero => this.hero = hero);
  }

  // går tilbake et steg i nettleserens historikk-stack
  // bruker location-service som er @Injectable (se constructor)
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
}