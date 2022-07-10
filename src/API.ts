/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventLogInput = {
  id?: string | null,
  unit: string,
  timeStamp: string,
  park: string,
  statusCode?: number | null,
  description: string,
};

export type ModelEventLogConditionInput = {
  unit?: ModelStringInput | null,
  timeStamp?: ModelStringInput | null,
  park?: ModelStringInput | null,
  statusCode?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelEventLogConditionInput | null > | null,
  or?: Array< ModelEventLogConditionInput | null > | null,
  not?: ModelEventLogConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type EventLog = {
  __typename: "EventLog",
  id: string,
  unit: string,
  timeStamp: string,
  park: string,
  statusCode?: number | null,
  description: string,
  createdOn: string,
  updatedOn: string,
};

export type UpdateEventLogInput = {
  id: string,
  unit?: string | null,
  timeStamp?: string | null,
  park?: string | null,
  statusCode?: number | null,
  description?: string | null,
};

export type DeleteEventLogInput = {
  id: string,
};

export type ModelEventLogFilterInput = {
  id?: ModelIDInput | null,
  unit?: ModelStringInput | null,
  timeStamp?: ModelStringInput | null,
  park?: ModelStringInput | null,
  statusCode?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelEventLogFilterInput | null > | null,
  or?: Array< ModelEventLogFilterInput | null > | null,
  not?: ModelEventLogFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelEventLogConnection = {
  __typename: "ModelEventLogConnection",
  items:  Array<EventLog | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateEventLogMutationVariables = {
  input: CreateEventLogInput,
  condition?: ModelEventLogConditionInput | null,
};

export type CreateEventLogMutation = {
  createEventLog?:  {
    __typename: "EventLog",
    id: string,
    unit: string,
    timeStamp: string,
    park: string,
    statusCode?: number | null,
    description: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type UpdateEventLogMutationVariables = {
  input: UpdateEventLogInput,
  condition?: ModelEventLogConditionInput | null,
};

export type UpdateEventLogMutation = {
  updateEventLog?:  {
    __typename: "EventLog",
    id: string,
    unit: string,
    timeStamp: string,
    park: string,
    statusCode?: number | null,
    description: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type DeleteEventLogMutationVariables = {
  input: DeleteEventLogInput,
  condition?: ModelEventLogConditionInput | null,
};

export type DeleteEventLogMutation = {
  deleteEventLog?:  {
    __typename: "EventLog",
    id: string,
    unit: string,
    timeStamp: string,
    park: string,
    statusCode?: number | null,
    description: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type GetEventLogQueryVariables = {
  id: string,
};

export type GetEventLogQuery = {
  getEventLog?:  {
    __typename: "EventLog",
    id: string,
    unit: string,
    timeStamp: string,
    park: string,
    statusCode?: number | null,
    description: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type ListEventLogsQueryVariables = {
  filter?: ModelEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventLogsQuery = {
  listEventLogs?:  {
    __typename: "ModelEventLogConnection",
    items:  Array< {
      __typename: "EventLog",
      id: string,
      unit: string,
      timeStamp: string,
      park: string,
      statusCode?: number | null,
      description: string,
      createdOn: string,
      updatedOn: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EventLogByUnitAndTimeStampQueryVariables = {
  unit: string,
  timeStamp?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EventLogByUnitAndTimeStampQuery = {
  eventLogByUnitAndTimeStamp?:  {
    __typename: "ModelEventLogConnection",
    items:  Array< {
      __typename: "EventLog",
      id: string,
      unit: string,
      timeStamp: string,
      park: string,
      statusCode?: number | null,
      description: string,
      createdOn: string,
      updatedOn: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEventLogSubscription = {
  onCreateEventLog?:  {
    __typename: "EventLog",
    id: string,
    unit: string,
    timeStamp: string,
    park: string,
    statusCode?: number | null,
    description: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnUpdateEventLogSubscription = {
  onUpdateEventLog?:  {
    __typename: "EventLog",
    id: string,
    unit: string,
    timeStamp: string,
    park: string,
    statusCode?: number | null,
    description: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnDeleteEventLogSubscription = {
  onDeleteEventLog?:  {
    __typename: "EventLog",
    id: string,
    unit: string,
    timeStamp: string,
    park: string,
    statusCode?: number | null,
    description: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};
