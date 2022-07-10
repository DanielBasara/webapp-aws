/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEventLog = /* GraphQL */ `
  mutation CreateEventLog(
    $input: CreateEventLogInput!
    $condition: ModelEventLogConditionInput
  ) {
    createEventLog(input: $input, condition: $condition) {
      id
      unit
      timeStamp
      park
      statusCode
      description
      createdOn
      updatedOn
    }
  }
`;
export const updateEventLog = /* GraphQL */ `
  mutation UpdateEventLog(
    $input: UpdateEventLogInput!
    $condition: ModelEventLogConditionInput
  ) {
    updateEventLog(input: $input, condition: $condition) {
      id
      unit
      timeStamp
      park
      statusCode
      description
      createdOn
      updatedOn
    }
  }
`;
export const deleteEventLog = /* GraphQL */ `
  mutation DeleteEventLog(
    $input: DeleteEventLogInput!
    $condition: ModelEventLogConditionInput
  ) {
    deleteEventLog(input: $input, condition: $condition) {
      id
      unit
      timeStamp
      park
      statusCode
      description
      createdOn
      updatedOn
    }
  }
`;
