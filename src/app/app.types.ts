export interface Question {
  id: string;
  version: string;
  displayText: string;
  responseMaxLength: string;
  numberLevel: string;
  type: string;
  isMandatory: boolean;
  mandatoryIndicator?: string | null;
  isImportant: boolean;
  importantIndicator: string;
  hasDependentQuestion: boolean;
  responseToDisplayDependentQuestionBoolean: boolean;
  responseToDisplayDependentQuestionList?: string | null;
  responseToDisplayDependentQuestionStartDate: string;
  responseToDisplayDependentQuestionEndDate: string;
  additionalInfoRequired: boolean;
  additionalInfoLabel?: string | null;
  responseToRequireAdditionalInfoBoolean: boolean;
  responseToRequireAdditionalInfoList?: string | null;
  responseToRequireAdditionalInfoStartDate: string;
  responseToRequireAdditionalInfoEndDate: string;
  requiresNotification: boolean;
  responseToRequireNotificationBoolean: boolean;
  responseToRequireNotificationList?: string | null;
  responseToRequireNotificationStartDate: string;
  responseToRequireNotificationEndDate: string;
  tooltipText: any;
  hasHardStop: boolean;
  maximumNumberOfCheckboxes: any;
  furtherInstructions: any;
  textValidRange: any;
  textInvalidRange: any;
  isVisible: boolean;
  multilevelChoiceDef: string;
  expandAdditionalInfo: boolean;
  choiceOptions: ChoiceOption[];
  response: string;
  responseLabel: string;
  responseLabels: string[];
  additionalInfoResponse: any;
  lastUpdated: string;
  lastUpdatedFirstName: string;
  lastUpdatedLastName: string;
  isRemediated: boolean;
  hasAlertFlag: boolean;
  hasSkippedFlag: boolean;
  dependentQuestion?: DependentQuestion[];
}

export interface ChoiceOption {
  id: string;
  label: string;
  value: string;
}

export interface DependentQuestion {
  id: string;
  version: string;
  displayText: string;
  responseMaxLength: string;
  numberLevel: string;
  type: string;
  isMandatory: boolean;
  mandatoryIndicator: any;
  isImportant: boolean;
  importantIndicator: string;
  hasDependentQuestion: boolean;
  responseToDisplayDependentQuestionBoolean: boolean;
  responseToDisplayDependentQuestionList: string;
  responseToDisplayDependentQuestionStartDate: string;
  responseToDisplayDependentQuestionEndDate: string;
  additionalInfoRequired: boolean;
  additionalInfoLabel: any;
  responseToRequireAdditionalInfoBoolean: boolean;
  responseToRequireAdditionalInfoList: string;
  responseToRequireAdditionalInfoStartDate: string;
  responseToRequireAdditionalInfoEndDate: string;
  requiresNotification: boolean;
  responseToRequireNotificationBoolean: boolean;
  responseToRequireNotificationList: string;
  responseToRequireNotificationStartDate: string;
  responseToRequireNotificationEndDate: string;
  tooltipText: any;
  hasHardStop: boolean;
  maximumNumberOfCheckboxes: any;
  furtherInstructions: any;
  textValidRange: any;
  textInvalidRange: any;
  isVisible: boolean;
  multilevelChoiceDef: string;
  expandAdditionalInfo: boolean;
  dependentQuestion?: DependentQuestion[];
}

export interface Section {
  sectionOccurrenceId: string;
  status: string;
  issueStatus: IssueStatus;
  name: string;
  description: string | null;
  numberLevel: string;
  totalQuestions: string;
  answeredQuestions: string;
}

export interface IssueStatus {
  hardStopCount: number;
  issueCount: number;
  remidiatedCount: number;
  skippedCount: number;
}
