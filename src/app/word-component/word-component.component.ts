import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-component',
  templateUrl: './word-component.component.html',
  styleUrls: ['./word-component.component.css']
})
export class WordComponentComponent implements OnInit {

  couleur="red";
  Tpolice=16;
  FontText="fantasy";

  constructor() { }

  ngOnInit(): void {
    console.log(this.FontText)
  }

}
