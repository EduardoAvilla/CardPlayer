import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  nomeJogador: string = 'Neymar';

  url: string = 'Neymar';
  @Input() jogador: any;
  ano: any;
  idade: any;
  Idade: number = 1;
  error: boolean = false;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.buscarPlayer();
  }

  buscarPlayer =()=> {
    this.url = this.nomeJogador;

    this.http
      .get(
        `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${this.url}`
      )
      .subscribe((resultado) => {
        try {
          this.jogador = resultado;
          this.data = this.jogador.player[0];
          this.ano = this.data.dateBorn.substr(0, 4);
          this.calcula(this.data);
        } catch (error) {
          this.error = true;
          console.error(error);
          const setError = () => {
            this.error = false;
          };
          setInterval(setError, 2000);
        }
      });
  }

  data: any;

  calcula(data: any) {
    this.idade = 2023 - parseInt(data.dateBorn.substr(0, 4), 10);
  }
}
