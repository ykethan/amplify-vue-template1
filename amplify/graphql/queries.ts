/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAtomicNode = /* GraphQL */ `query GetAtomicNode($id: ID!) {
  getAtomicNode(id: $id) {
    createdAt
    id
    mediaFilePath
    nodeName
    nodeThumbnail
    owner
    shotId
    shotNode {
      createdAt
      id
      shotName
      text
      updatedAt
      __typename
    }
    text
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAtomicNodeQueryVariables,
  APITypes.GetAtomicNodeQuery
>;
export const getSettingsModel = /* GraphQL */ `query GetSettingsModel($id: ID!) {
  getSettingsModel(id: $id) {
    createdAt
    email
    id
    settingId
    updatedAt
    user {
      createdAt
      email
      fullName
      profileOwner
      teamId
      updatedAt
      userId
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSettingsModelQueryVariables,
  APITypes.GetSettingsModelQuery
>;
export const getShotNode = /* GraphQL */ `query GetShotNode($id: ID!) {
  getShotNode(id: $id) {
    createdAt
    id
    mediaFile {
      nextToken
      __typename
    }
    shotName
    text
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetShotNodeQueryVariables,
  APITypes.GetShotNodeQuery
>;
export const getTeamModel = /* GraphQL */ `query GetTeamModel($id: ID!) {
  getTeamModel(id: $id) {
    createdAt
    id
    owner
    teamId
    updatedAt
    users {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTeamModelQueryVariables,
  APITypes.GetTeamModelQuery
>;
export const getUserModel = /* GraphQL */ `query GetUserModel($email: AWSEmail!) {
  getUserModel(email: $email) {
    createdAt
    email
    fullName
    profileOwner
    settings {
      createdAt
      email
      id
      settingId
      updatedAt
      __typename
    }
    team {
      createdAt
      id
      owner
      teamId
      updatedAt
      __typename
    }
    teamId
    updatedAt
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserModelQueryVariables,
  APITypes.GetUserModelQuery
>;
export const listAtomicNodes = /* GraphQL */ `query ListAtomicNodes(
  $filter: ModelAtomicNodeFilterInput
  $limit: Int
  $nextToken: String
) {
  listAtomicNodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      mediaFilePath
      nodeName
      nodeThumbnail
      owner
      shotId
      text
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAtomicNodesQueryVariables,
  APITypes.ListAtomicNodesQuery
>;
export const listSettingsModels = /* GraphQL */ `query ListSettingsModels(
  $filter: ModelSettingsModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listSettingsModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      email
      id
      settingId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSettingsModelsQueryVariables,
  APITypes.ListSettingsModelsQuery
>;
export const listShotNodes = /* GraphQL */ `query ListShotNodes(
  $filter: ModelShotNodeFilterInput
  $limit: Int
  $nextToken: String
) {
  listShotNodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      shotName
      text
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListShotNodesQueryVariables,
  APITypes.ListShotNodesQuery
>;
export const listTeamModels = /* GraphQL */ `query ListTeamModels(
  $filter: ModelTeamModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeamModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      owner
      teamId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTeamModelsQueryVariables,
  APITypes.ListTeamModelsQuery
>;
export const listUserModels = /* GraphQL */ `query ListUserModels(
  $email: AWSEmail
  $filter: ModelUserModelFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserModels(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      email
      fullName
      profileOwner
      teamId
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserModelsQueryVariables,
  APITypes.ListUserModelsQuery
>;
