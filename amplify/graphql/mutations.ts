/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAtomicNode = /* GraphQL */ `mutation CreateAtomicNode(
  $condition: ModelAtomicNodeConditionInput
  $input: CreateAtomicNodeInput!
) {
  createAtomicNode(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateAtomicNodeMutationVariables,
  APITypes.CreateAtomicNodeMutation
>;
export const createSettingsModel = /* GraphQL */ `mutation CreateSettingsModel(
  $condition: ModelSettingsModelConditionInput
  $input: CreateSettingsModelInput!
) {
  createSettingsModel(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateSettingsModelMutationVariables,
  APITypes.CreateSettingsModelMutation
>;
export const createShotNode = /* GraphQL */ `mutation CreateShotNode(
  $condition: ModelShotNodeConditionInput
  $input: CreateShotNodeInput!
) {
  createShotNode(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateShotNodeMutationVariables,
  APITypes.CreateShotNodeMutation
>;
export const createTeamModel = /* GraphQL */ `mutation CreateTeamModel(
  $condition: ModelTeamModelConditionInput
  $input: CreateTeamModelInput!
) {
  createTeamModel(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTeamModelMutationVariables,
  APITypes.CreateTeamModelMutation
>;
export const createUserModel = /* GraphQL */ `mutation CreateUserModel(
  $condition: ModelUserModelConditionInput
  $input: CreateUserModelInput!
) {
  createUserModel(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserModelMutationVariables,
  APITypes.CreateUserModelMutation
>;
export const deleteAtomicNode = /* GraphQL */ `mutation DeleteAtomicNode(
  $condition: ModelAtomicNodeConditionInput
  $input: DeleteAtomicNodeInput!
) {
  deleteAtomicNode(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteAtomicNodeMutationVariables,
  APITypes.DeleteAtomicNodeMutation
>;
export const deleteSettingsModel = /* GraphQL */ `mutation DeleteSettingsModel(
  $condition: ModelSettingsModelConditionInput
  $input: DeleteSettingsModelInput!
) {
  deleteSettingsModel(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteSettingsModelMutationVariables,
  APITypes.DeleteSettingsModelMutation
>;
export const deleteShotNode = /* GraphQL */ `mutation DeleteShotNode(
  $condition: ModelShotNodeConditionInput
  $input: DeleteShotNodeInput!
) {
  deleteShotNode(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteShotNodeMutationVariables,
  APITypes.DeleteShotNodeMutation
>;
export const deleteTeamModel = /* GraphQL */ `mutation DeleteTeamModel(
  $condition: ModelTeamModelConditionInput
  $input: DeleteTeamModelInput!
) {
  deleteTeamModel(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTeamModelMutationVariables,
  APITypes.DeleteTeamModelMutation
>;
export const deleteUserModel = /* GraphQL */ `mutation DeleteUserModel(
  $condition: ModelUserModelConditionInput
  $input: DeleteUserModelInput!
) {
  deleteUserModel(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserModelMutationVariables,
  APITypes.DeleteUserModelMutation
>;
export const updateAtomicNode = /* GraphQL */ `mutation UpdateAtomicNode(
  $condition: ModelAtomicNodeConditionInput
  $input: UpdateAtomicNodeInput!
) {
  updateAtomicNode(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateAtomicNodeMutationVariables,
  APITypes.UpdateAtomicNodeMutation
>;
export const updateSettingsModel = /* GraphQL */ `mutation UpdateSettingsModel(
  $condition: ModelSettingsModelConditionInput
  $input: UpdateSettingsModelInput!
) {
  updateSettingsModel(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateSettingsModelMutationVariables,
  APITypes.UpdateSettingsModelMutation
>;
export const updateShotNode = /* GraphQL */ `mutation UpdateShotNode(
  $condition: ModelShotNodeConditionInput
  $input: UpdateShotNodeInput!
) {
  updateShotNode(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateShotNodeMutationVariables,
  APITypes.UpdateShotNodeMutation
>;
export const updateTeamModel = /* GraphQL */ `mutation UpdateTeamModel(
  $condition: ModelTeamModelConditionInput
  $input: UpdateTeamModelInput!
) {
  updateTeamModel(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTeamModelMutationVariables,
  APITypes.UpdateTeamModelMutation
>;
export const updateUserModel = /* GraphQL */ `mutation UpdateUserModel(
  $condition: ModelUserModelConditionInput
  $input: UpdateUserModelInput!
) {
  updateUserModel(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserModelMutationVariables,
  APITypes.UpdateUserModelMutation
>;
