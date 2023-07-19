import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { DependentQuestion, Question } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private fb: FormBuilder){
    this.sectionsForm = this.fb.group({
      section1: this.fb.array([]),
      section2: this.fb.array([]),
      section3: this.fb.array([]),
      section4: this.fb.array([]),
    })
  }
  
 
  sectionsForm!: FormGroup;
  questions1: Question[] = [
    {
        "id": "8987a22c1b5c2590869cc802604bcbe0",
        "version": "1.0",
        "displayText": "QUESTION HS",
        "responseMaxLength": "100",
        "numberLevel": "1",
        "type": "radio",
        "isMandatory": true,
        "mandatoryIndicator": "!",
        "isImportant": true,
        "importantIndicator": "*",
        "hasDependentQuestion": false,
        "responseToDisplayDependentQuestionBoolean": false,
        "responseToDisplayDependentQuestionList": null,
        "responseToDisplayDependentQuestionStartDate": "",
        "responseToDisplayDependentQuestionEndDate": "",
        "additionalInfoRequired": false,
        "additionalInfoLabel": null,
        "responseToRequireAdditionalInfoBoolean": false,
        "responseToRequireAdditionalInfoList": "OPTION4",
        "responseToRequireAdditionalInfoStartDate": "",
        "responseToRequireAdditionalInfoEndDate": "",
        "requiresNotification": true,
        "responseToRequireNotificationBoolean": false,
        "responseToRequireNotificationList": "OPTION4",
        "responseToRequireNotificationStartDate": "",
        "responseToRequireNotificationEndDate": "",
        "tooltipText": null,
        "hasHardStop": true,
        "maximumNumberOfCheckboxes": null,
        "furtherInstructions": null,
        "textValidRange": null,
        "textInvalidRange": null,
        "isVisible": false,
        "multilevelChoiceDef": "",
        "expandAdditionalInfo": false,
        "choiceOptions": [
            {
                "id": "af68ae2c1b5c2590869cc802604bcbca",
                "label": "OPTION1",
                "value": "OPTION1"
            },
            {
                "id": "d388e2ac1b5c2590869cc802604bcb48",
                "label": "OPTION2",
                "value": "OPTION2"
            },
            {
                "id": "dda8e22c1b5c2590869cc802604bcb0a",
                "label": "OPTION3",
                "value": "OPTION3"
            },
            {
                "id": "61c8226c1b5c2590869cc802604bcba3",
                "label": "OPTION4",
                "value": "OPTION4"
            }
        ],
        "response": "OPTION1",
        "responseLabel": "OPTION1",
        "responseLabels": [
            "OPTION1"
        ],
        "additionalInfoResponse": null,
        "lastUpdated": "2023-03-05T17:44:46.000Z",
        "lastUpdatedFirstName": "Miguel",
        "lastUpdatedLastName": "Sanchez",
        "isRemediated": false,
        "hasAlertFlag": false,
        "hasSkippedFlag": false
    },
    {
        "id": "d7f8a2ec1b5c2590869cc802604bcb3b",
        "version": "1.0",
        "displayText": "QUESTION MEDIUM",
        "responseMaxLength": "100",
        "numberLevel": "2",
        "type": "three_buttons",
        "isMandatory": false,
        "mandatoryIndicator": null,
        "isImportant": true,
        "importantIndicator": "*",
        "hasDependentQuestion": false,
        "responseToDisplayDependentQuestionBoolean": false,
        "responseToDisplayDependentQuestionList": null,
        "responseToDisplayDependentQuestionStartDate": "",
        "responseToDisplayDependentQuestionEndDate": "",
        "additionalInfoRequired": true,
        "additionalInfoLabel": "ADDITIONAL INFO",
        "responseToRequireAdditionalInfoBoolean": false,
        "responseToRequireAdditionalInfoList": "Cannot do it",
        "responseToRequireAdditionalInfoStartDate": "",
        "responseToRequireAdditionalInfoEndDate": "",
        "requiresNotification": true,
        "responseToRequireNotificationBoolean": false,
        "responseToRequireNotificationList": "Cannot do it",
        "responseToRequireNotificationStartDate": "",
        "responseToRequireNotificationEndDate": "",
        "tooltipText": null,
        "hasHardStop": false,
        "maximumNumberOfCheckboxes": null,
        "furtherInstructions": null,
        "textValidRange": null,
        "textInvalidRange": null,
        "isVisible": false,
        "multilevelChoiceDef": "",
        "expandAdditionalInfo": false,
        "choiceOptions": [
            {
                "id": "c919e2ac1b5c2590869cc802604bcba7",
                "label": "Acceptable",
                "value": "true"
            },
            {
                "id": "091926ec1b5c2590869cc802604bcb91",
                "label": "Not Acceptable",
                "value": "false"
            },
            {
                "id": "0d1926ec1b5c2590869cc802604bcb91",
                "label": "Not Verified",
                "value": "Cannot do it"
            }
        ],
        "response": "true",
        "responseLabel": "Acceptable",
        "responseLabels": [],
        "additionalInfoResponse": null,
        "lastUpdated": "2023-03-05T17:44:53.000Z",
        "lastUpdatedFirstName": "Miguel",
        "lastUpdatedLastName": "Sanchez",
        "isRemediated": false,
        "hasAlertFlag": false,
        "hasSkippedFlag": false
    },
    {
        
        "id": "6baa66601b9c2590869cc802604bcb62",
        "version": "1.0",
        "displayText": "DROPDOWN PARENT",
        "responseMaxLength": "100",
        "numberLevel": "3",
        "type": "dropdown",
        "isMandatory": false,
        "mandatoryIndicator": null,
        "isImportant": true,
        "importantIndicator": "*",
        "hasDependentQuestion": true,
        "responseToDisplayDependentQuestionBoolean": false,
        "responseToDisplayDependentQuestionList": "OPTION 1",
        "responseToDisplayDependentQuestionStartDate": "",
        "responseToDisplayDependentQuestionEndDate": "",
        "additionalInfoRequired": false,
        "additionalInfoLabel": null,
        "responseToRequireAdditionalInfoBoolean": false,
        "responseToRequireAdditionalInfoList": null,
        "responseToRequireAdditionalInfoStartDate": "",
        "responseToRequireAdditionalInfoEndDate": "",
        "requiresNotification": false,
        "responseToRequireNotificationBoolean": false,
        "responseToRequireNotificationList": null,
        "responseToRequireNotificationStartDate": "",
        "responseToRequireNotificationEndDate": "",
        "tooltipText": null,
        "hasHardStop": false,
        "maximumNumberOfCheckboxes": null,
        "furtherInstructions": null,
        "textValidRange": null,
        "textInvalidRange": null,
        "isVisible": false,
        "multilevelChoiceDef": "",
        "expandAdditionalInfo": false,
        "choiceOptions": [
            {
                "id": "d3ca22a01b9c2590869cc802604bcb37",
                "label": "OPTION 1",
                "value": "OPTION 1"
            },
            {
                "id": "8aea26201b9c2590869cc802604bcb02",
                "label": "OPTION 2",
                "value": "OPTION 2"
            }
        ],
        "dependentQuestion": [
            {
                "id": "9d2be6a01b9c2590869cc802604bcb00",
                "version": "1.0",
                "displayText": "NUMBER DEPENDENT DROPDOWN",
                "responseMaxLength": "100",
                "numberLevel": "1",
                "type": "number",
                "isMandatory": false,
                "mandatoryIndicator": null,
                "isImportant": true,
                "importantIndicator": "*",
                "hasDependentQuestion": false,
                "responseToDisplayDependentQuestionBoolean": false,
                "responseToDisplayDependentQuestionList": "0,0",
                "responseToDisplayDependentQuestionStartDate": "",
                "responseToDisplayDependentQuestionEndDate": "",
                "additionalInfoRequired": false,
                "additionalInfoLabel": null,
                "responseToRequireAdditionalInfoBoolean": false,
                "responseToRequireAdditionalInfoList": "0,0",
                "responseToRequireAdditionalInfoStartDate": "",
                "responseToRequireAdditionalInfoEndDate": "",
                "requiresNotification": false,
                "responseToRequireNotificationBoolean": false,
                "responseToRequireNotificationList": "0,0",
                "responseToRequireNotificationStartDate": "",
                "responseToRequireNotificationEndDate": "",
                "tooltipText": null,
                "hasHardStop": false,
                "maximumNumberOfCheckboxes": null,
                "furtherInstructions": null,
                "textValidRange": null,
                "textInvalidRange": null,
                "isVisible": false,
                "multilevelChoiceDef": "",
                "expandAdditionalInfo": false
            }
        ],
        "response": "OPTION 2",
        "responseLabel": "OPTION 2",
        "responseLabels": [
            "OPTION 2"
        ],
        "additionalInfoResponse": null,
        "lastUpdated": "2023-03-05T17:44:37.000Z",
        "lastUpdatedFirstName": "Miguel",
        "lastUpdatedLastName": "Sanchez",
        "isRemediated": false,
        "hasAlertFlag": false,
        "hasSkippedFlag": false
    }
  ]
  
  public get section1(): FormArray{
    return <FormArray>this.sectionsForm.get('section1');
  }

  public get section2(): FormArray{
    return <FormArray>this.sectionsForm.get('section2');
  }

  public get section3(): FormArray{
    return <FormArray>this.sectionsForm.get('section3');
  }

  public get section4(): FormArray{
    return <FormArray>this.sectionsForm.get('section4');
  }

  ngOnInit(): void {
    this.initSection(this.questions1, this.section1);
    // this.section1.valueChanges.subscribe(changes => {
    //   console.log(changes)
    // })
  }

  initSection(questions: Question[], section: FormArray) {
    for(let i=0; i< questions.length; i++){
      let questionformGroup: FormGroup = this.fb.group({
        id: new FormControl(null),
        value: new FormControl(null),
        label: new FormControl(null)
      })
      section.push(questionformGroup);
    }
  }



  getFormGroup(formArray: FormArray, index: number){
    return <FormGroup>formArray.at(index);
  }

  asFormGroup(formGroup: AbstractControl){
    return <FormGroup>formGroup
  }

}
