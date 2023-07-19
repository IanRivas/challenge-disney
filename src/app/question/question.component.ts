import { Component, Input, OnInit } from '@angular/core';
import { DependentQuestion, Question, ChoiceOption } from '../app.types';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question!: Question;
  @Input() formArray!: FormArray;
  @Input() formGroup!: FormGroup;
  @Input() section!: string;
  constructor() { }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((change) => {
      if(change){
        console.log(`section: "${this.section}", id: "${change.id}", label: "${change.label}", value: "${change.value}"`);
      }
    })
  }

  selectedChoiceFn(event:ChoiceOption){
    this.formGroup.patchValue(event);
  }

}
