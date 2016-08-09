import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="keg-form">
      <h3>Edit this Keg: </h3>
      <input [(ngModel)] = "keg.name" class="col-sm-6 input-lg keg-form"/>
      <input [(ngModel)] = "keg.brand" class="col-sm-6 input-lg keg-form"/>
      <input [(ngModel)] = "keg.price" class="col-sm-6 input-lg keg-form"/>
      <input [(ngModel)] = "keg.alcoholContent" class="col-sm-6 input-lg keg-form"/>
      <input [(ngModel)] = "keg.pintsRemaining" class="col-sm-6 input-lg keg-form"/>
    </div>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;
}
