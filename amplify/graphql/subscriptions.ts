/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAtomicNode = /* GraphQL */ `subscription OnCreateAtomicNode(
  $filter: ModelSubscriptionAtomicNodeFilterInput
  $owner: String
) {
  onCreateAtomicNode(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAtomicNodeSubscriptionVariables,
  APITypes.OnCreateAtomicNodeSubscription
>;
export const onCreateSettingsModel = /* GraphQL */ `subscription OnCreateSettingsModel(
  $filter: ModelSubscriptionSettingsModelFilterInput
) {
  onCreateSettingsModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSettingsModelSubscriptionVariables,
  APITypes.OnCreateSettingsModelSubscription
>;
export const onCreateShotNode = /* GraphQL */ `subscription OnCreateShotNode($filter: ModelSubscriptionShotNodeFilterInput) {
  onCreateShotNode(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateShotNodeSubscriptionVariables,
  APITypes.OnCreateShotNodeSubscription
>;
export const onCreateTeamModel = /* GraphQL */ `subscription OnCreateTeamModel(
  $filter: ModelSubscriptionTeamModelFilterInput
  $owner: String
) {
  onCreateTeamModel(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTeamModelSubscriptionVariables,
  APITypes.OnCreateTeamModelSubscription
>;
export const onCreateUserModel = /* GraphQL */ `subscription OnCreateUserModel(
  $filter: ModelSubscriptionUserModelFilterInput
  $profileOwner: String
) {
  onCreateUserModel(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserModelSubscriptionVariables,
  APITypes.OnCreateUserModelSubscription
>;
export const onDeleteAtomicNode = /* GraphQL */ `subscription OnDeleteAtomicNode(
  $filter: ModelSubscriptionAtomicNodeFilterInput
  $owner: String
) {
  onDeleteAtomicNode(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAtomicNodeSubscriptionVariables,
  APITypes.OnDeleteAtomicNodeSubscription
>;
export const onDeleteSettingsModel = /* GraphQL */ `subscription OnDeleteSettingsModel(
  $filter: ModelSubscriptionSettingsModelFilterInput
) {
  onDeleteSettingsModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSettingsModelSubscriptionVariables,
  APITypes.OnDeleteSettingsModelSubscription
>;
export const onDeleteShotNode = /* GraphQL */ `subscription OnDeleteShotNode($filter: ModelSubscriptionShotNodeFilterInput) {
  onDeleteShotNode(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteShotNodeSubscriptionVariables,
  APITypes.OnDeleteShotNodeSubscription
>;
export const onDeleteTeamModel = /* GraphQL */ `subscription OnDeleteTeamModel(
  $filter: ModelSubscriptionTeamModelFilterInput
  $owner: String
) {
  onDeleteTeamModel(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTeamModelSubscriptionVariables,
  APITypes.OnDeleteTeamModelSubscription
>;
export const onDeleteUserModel = /* GraphQL */ `subscription OnDeleteUserModel(
  $filter: ModelSubscriptionUserModelFilterInput
  $profileOwner: String
) {
  onDeleteUserModel(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserModelSubscriptionVariables,
  APITypes.OnDeleteUserModelSubscription
>;
export const onUpdateAtomicNode = /* GraphQL */ `subscription OnUpdateAtomicNode(
  $filter: ModelSubscriptionAtomicNodeFilterInput
  $owner: String
) {
  onUpdateAtomicNode(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAtomicNodeSubscriptionVariables,
  APITypes.OnUpdateAtomicNodeSubscription
>;
export const onUpdateSettingsModel = /* GraphQL */ `subscription OnUpdateSettingsModel(
  $filter: ModelSubscriptionSettingsModelFilterInput
) {
  onUpdateSettingsModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSettingsModelSubscriptionVariables,
  APITypes.OnUpdateSettingsModelSubscription
>;
export const onUpdateShotNode = /* GraphQL */ `subscription OnUpdateShotNode($filter: ModelSubscriptionShotNodeFilterInput) {
  onUpdateShotNode(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateShotNodeSubscriptionVariables,
  APITypes.OnUpdateShotNodeSubscription
>;
export const onUpdateTeamModel = /* GraphQL */ `subscription OnUpdateTeamModel(
  $filter: ModelSubscriptionTeamModelFilterInput
  $owner: String
) {
  onUpdateTeamModel(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTeamModelSubscriptionVariables,
  APITypes.OnUpdateTeamModelSubscription
>;
export const onUpdateUserModel = /* GraphQL */ `subscription OnUpdateUserModel(
  $filter: ModelSubscriptionUserModelFilterInput
  $profileOwner: String
) {
  onUpdateUserModel(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserModelSubscriptionVariables,
  APITypes.OnUpdateUserModelSubscription
>;
