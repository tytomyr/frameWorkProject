import { style } from '@angular/animations';
import {Component} from '@angular/core'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
   
})
export class CardComponent {

    title= 'My Card Title'
    text= 'My text'

}