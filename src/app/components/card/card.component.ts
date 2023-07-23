import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() jogador: any = '';
  data: any;
  @Output() idade: any;

  ngOnInit() {
    this.data = this.jogador.dateBorn.substr(0, 4);
    this.calcula(this.data);
    localStorage.setItem('idade', this.idade);


  }


  calcula(data: any) {
     this.idade = 2023-data;
  }

}
