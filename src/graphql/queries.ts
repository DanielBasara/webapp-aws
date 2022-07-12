/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEventLog = /* GraphQL */ `
  query GetEventLog($id: ID!) {
    getEventLog(id: $id) {
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
export const listEventLogs = /* GraphQL */ `
  query ListEventLogs(
    $filter: ModelEventLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        unit
        timeStamp
        park
        statusCode
        description
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const eventLogByUnitAndTimeStamp = /* GraphQL */ `
  query EventLogByUnitAndTimeStamp(
    $unit: String!
    $timeStamp: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventLogByUnitAndTimeStamp(
      unit: $unit
      timeStamp: $timeStamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        unit
        timeStamp
        park
        statusCode
        description
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const enventlogByTimestamp = /* GraphQL */ `
  query EnventlogByTimestamp(
    $timeStamp: AWSDateTime!
    $sortDirection: ModelSortDirection
    $filter: ModelEventLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    enventlogByTimestamp(
      timeStamp: $timeStamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        unit
        timeStamp
        park
        statusCode
        description
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
