import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Section, Question } from './app.types';
import { QUESTIONS, SECTIONS } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    let groupSetting: { [key: string]: FormArray } = {};
    for (let s of this.sections) {
      let key = this.getKeySection(s.name);
      groupSetting[key] = this.fb.array([]);
    }
    console.log(groupSetting);
    this.sectionsForm = this.fb.group(groupSetting);
  }
  sectionsForm!: FormGroup;
  sections: Section[] = SECTIONS;
  questions: Question[][] = QUESTIONS;

  getSection(sectionNumber: number | string): FormArray {
    let sectionKey = 'section' + sectionNumber;
    return <FormArray>this.sectionsForm.get(sectionKey);
  }

  ngOnInit(): void {
    for (let i = 0; i < this.sections.length; i++) {
      this.initSection(this.questions[i], this.getSection(i + 1));
    }
  }

  initSection(questions: Question[], section: FormArray) {
    for (let i = 0; i < questions.length; i++) {
      let questionformGroup: FormGroup = this.fb.group({
        id: new FormControl(null),
        value: new FormControl(null),
        label: new FormControl(null),
      });
      section.push(questionformGroup);
    }
  }

  getFormGroup(formArray: FormArray, index: number) {
    return <FormGroup>formArray.at(index);
  }

  asFormGroup(formGroup: AbstractControl) {
    return <FormGroup>formGroup;
  }

  getKeySection(sectionName: string) {
    return sectionName.toLowerCase().replace(' ', '');
  }

  getAnswered(sectionNumber: number | string): number {
    let sectionFormArray = this.getSection(sectionNumber);
    let answered = 0;
    for (let s of sectionFormArray.controls) {
      if (s.value.id) {
        answered++;
      }
    }
    return answered;
  }
}
