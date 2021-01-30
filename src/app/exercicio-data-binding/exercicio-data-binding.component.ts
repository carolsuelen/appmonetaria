import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  imageURL ='https://www.vetquality.com.br/wp-content/uploads/2020/06/como-dar-banho-em-cachorro-em-casa.jpg';
  initialValue = 'Valor Inicial';
  isDisabled = true;
  accessibilityText = 'Um texto acessível...';

  constructor() {
    setTimeout(() =>{
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 3000);
   }

  ngOnInit(): void {
  }

}
