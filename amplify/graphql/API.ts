/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type AtomicNode = {
  __typename: "AtomicNode",
  createdAt: string,
  id: string,
  mediaFilePath?: string | null,
  nodeName?: string | null,
  nodeThumbnail?: string | null,
  owner?: string | null,
  shotId?: string | null,
  shotNode?: ShotNode | null,
  text?: string | null,
  updatedAt: string,
};

export type ShotNode = {
  __typename: "ShotNode",
  createdAt: string,
  id: string,
  mediaFile?: ModelAtomicNodeConnection | null,
  shotName?: string | null,
  text?: string | null,
  updatedAt: string,
};

export type ModelAtomicNodeConnection = {
  __typename: "ModelAtomicNodeConnection",
  items:  Array<AtomicNode | null >,
  nextToken?: string | null,
};

export type SettingsModel = {
  __typename: "SettingsModel",
  createdAt: string,
  email: string,
  id: string,
  settingId: string,
  updatedAt: string,
  user?: UserModel | null,
};

export type UserModel = {
  __typename: "UserModel",
  createdAt: string,
  email: string,
  fullName: string,
  profileOwner?: string | null,
  settings?: SettingsModel | null,
  team?: TeamModel | null,
  teamId?: string | null,
  updatedAt: string,
  userId: string,
};

export type TeamModel = {
  __typename: "TeamModel",
  createdAt: string,
  id: string,
  owner?: string | null,
  teamId: string,
  updatedAt: string,
  users?: ModelUserModelConnection | null,
};

export type ModelUserModelConnection = {
  __typename: "ModelUserModelConnection",
  items:  Array<UserModel | null >,
  nextToken?: string | null,
};

export type ModelAtomicNodeFilterInput = {
  and?: Array< ModelAtomicNodeFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  mediaFilePath?: ModelStringInput | null,
  nodeName?: ModelStringInput | null,
  nodeThumbnail?: ModelStringInput | null,
  not?: ModelAtomicNodeFilterInput | null,
  or?: Array< ModelAtomicNodeFilterInput | null > | null,
  owner?: ModelStringInput | null,
  shotId?: ModelIDInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelSettingsModelFilterInput = {
  and?: Array< ModelSettingsModelFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelSettingsModelFilterInput | null,
  or?: Array< ModelSettingsModelFilterInput | null > | null,
  settingId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelSettingsModelConnection = {
  __typename: "ModelSettingsModelConnection",
  items:  Array<SettingsModel | null >,
  nextToken?: string | null,
};

export type ModelShotNodeFilterInput = {
  and?: Array< ModelShotNodeFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelShotNodeFilterInput | null,
  or?: Array< ModelShotNodeFilterInput | null > | null,
  shotName?: ModelStringInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelShotNodeConnection = {
  __typename: "ModelShotNodeConnection",
  items:  Array<ShotNode | null >,
  nextToken?: string | null,
};

export type ModelTeamModelFilterInput = {
  and?: Array< ModelTeamModelFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTeamModelFilterInput | null,
  or?: Array< ModelTeamModelFilterInput | null > | null,
  owner?: ModelStringInput | null,
  teamId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTeamModelConnection = {
  __typename: "ModelTeamModelConnection",
  items:  Array<TeamModel | null >,
  nextToken?: string | null,
};

export type ModelUserModelFilterInput = {
  and?: Array< ModelUserModelFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserModelFilterInput | null,
  or?: Array< ModelUserModelFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  teamId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAtomicNodeConditionInput = {
  and?: Array< ModelAtomicNodeConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  mediaFilePath?: ModelStringInput | null,
  nodeName?: ModelStringInput | null,
  nodeThumbnail?: ModelStringInput | null,
  not?: ModelAtomicNodeConditionInput | null,
  or?: Array< ModelAtomicNodeConditionInput | null > | null,
  owner?: ModelStringInput | null,
  shotId?: ModelIDInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateAtomicNodeInput = {
  id?: string | null,
  mediaFilePath?: string | null,
  nodeName?: string | null,
  nodeThumbnail?: string | null,
  shotId?: string | null,
  text?: string | null,
};

export type ModelSettingsModelConditionInput = {
  and?: Array< ModelSettingsModelConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  not?: ModelSettingsModelConditionInput | null,
  or?: Array< ModelSettingsModelConditionInput | null > | null,
  settingId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateSettingsModelInput = {
  email: string,
  id?: string | null,
  settingId: string,
};

export type ModelShotNodeConditionInput = {
  and?: Array< ModelShotNodeConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelShotNodeConditionInput | null,
  or?: Array< ModelShotNodeConditionInput | null > | null,
  shotName?: ModelStringInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateShotNodeInput = {
  id?: string | null,
  shotName?: string | null,
  text?: string | null,
};

export type ModelTeamModelConditionInput = {
  and?: Array< ModelTeamModelConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelTeamModelConditionInput | null,
  or?: Array< ModelTeamModelConditionInput | null > | null,
  owner?: ModelStringInput | null,
  teamId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTeamModelInput = {
  id?: string | null,
  teamId: string,
};

export type ModelUserModelConditionInput = {
  and?: Array< ModelUserModelConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  not?: ModelUserModelConditionInput | null,
  or?: Array< ModelUserModelConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  teamId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateUserModelInput = {
  email: string,
  fullName: string,
  profileOwner?: string | null,
  teamId?: string | null,
  userId: string,
};

export type DeleteAtomicNodeInput = {
  id: string,
};

export type DeleteSettingsModelInput = {
  id: string,
};

export type DeleteShotNodeInput = {
  id: string,
};

export type DeleteTeamModelInput = {
  id: string,
};

export type DeleteUserModelInput = {
  email: string,
};

export type UpdateAtomicNodeInput = {
  id: string,
  mediaFilePath?: string | null,
  nodeName?: string | null,
  nodeThumbnail?: string | null,
  shotId?: string | null,
  text?: string | null,
};

export type UpdateSettingsModelInput = {
  email?: string | null,
  id: string,
  settingId?: string | null,
};

export type UpdateShotNodeInput = {
  id: string,
  shotName?: string | null,
  text?: string | null,
};

export type UpdateTeamModelInput = {
  id: string,
  teamId?: string | null,
};

export type UpdateUserModelInput = {
  email: string,
  fullName?: string | null,
  profileOwner?: string | null,
  teamId?: string | null,
  userId?: string | null,
};

export type ModelSubscriptionAtomicNodeFilterInput = {
  and?: Array< ModelSubscriptionAtomicNodeFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  mediaFilePath?: ModelSubscriptionStringInput | null,
  nodeName?: ModelSubscriptionStringInput | null,
  nodeThumbnail?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionAtomicNodeFilterInput | null > | null,
  owner?: ModelStringInput | null,
  shotId?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSettingsModelFilterInput = {
  and?: Array< ModelSubscriptionSettingsModelFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionSettingsModelFilterInput | null > | null,
  settingId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionShotNodeFilterInput = {
  and?: Array< ModelSubscriptionShotNodeFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionShotNodeFilterInput | null > | null,
  shotName?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTeamModelFilterInput = {
  and?: Array< ModelSubscriptionTeamModelFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTeamModelFilterInput | null > | null,
  owner?: ModelStringInput | null,
  teamId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserModelFilterInput = {
  and?: Array< ModelSubscriptionUserModelFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  fullName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserModelFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  teamId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type GetAtomicNodeQueryVariables = {
  id: string,
};

export type GetAtomicNodeQuery = {
  getAtomicNode?:  {
    __typename: "AtomicNode",
    createdAt: string,
    id: string,
    mediaFilePath?: string | null,
    nodeName?: string | null,
    nodeThumbnail?: string | null,
    owner?: string | null,
    shotId?: string | null,
    shotNode?:  {
      __typename: "ShotNode",
      createdAt: string,
      id: string,
      shotName?: string | null,
      text?: string | null,
      updatedAt: string,
    } | null,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type GetSettingsModelQueryVariables = {
  id: string,
};

export type GetSettingsModelQuery = {
  getSettingsModel?:  {
    __typename: "SettingsModel",
    createdAt: string,
    email: string,
    id: string,
    settingId: string,
    updatedAt: string,
    user?:  {
      __typename: "UserModel",
      createdAt: string,
      email: string,
      fullName: string,
      profileOwner?: string | null,
      teamId?: string | null,
      updatedAt: string,
      userId: string,
    } | null,
  } | null,
};

export type GetShotNodeQueryVariables = {
  id: string,
};

export type GetShotNodeQuery = {
  getShotNode?:  {
    __typename: "ShotNode",
    createdAt: string,
    id: string,
    mediaFile?:  {
      __typename: "ModelAtomicNodeConnection",
      nextToken?: string | null,
    } | null,
    shotName?: string | null,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type GetTeamModelQueryVariables = {
  id: string,
};

export type GetTeamModelQuery = {
  getTeamModel?:  {
    __typename: "TeamModel",
    createdAt: string,
    id: string,
    owner?: string | null,
    teamId: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserModelConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetUserModelQueryVariables = {
  email: string,
};

export type GetUserModelQuery = {
  getUserModel?:  {
    __typename: "UserModel",
    createdAt: string,
    email: string,
    fullName: string,
    profileOwner?: string | null,
    settings?:  {
      __typename: "SettingsModel",
      createdAt: string,
      email: string,
      id: string,
      settingId: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "TeamModel",
      createdAt: string,
      id: string,
      owner?: string | null,
      teamId: string,
      updatedAt: string,
    } | null,
    teamId?: string | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type ListAtomicNodesQueryVariables = {
  filter?: ModelAtomicNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAtomicNodesQuery = {
  listAtomicNodes?:  {
    __typename: "ModelAtomicNodeConnection",
    items:  Array< {
      __typename: "AtomicNode",
      createdAt: string,
      id: string,
      mediaFilePath?: string | null,
      nodeName?: string | null,
      nodeThumbnail?: string | null,
      owner?: string | null,
      shotId?: string | null,
      text?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListSettingsModelsQueryVariables = {
  filter?: ModelSettingsModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSettingsModelsQuery = {
  listSettingsModels?:  {
    __typename: "ModelSettingsModelConnection",
    items:  Array< {
      __typename: "SettingsModel",
      createdAt: string,
      email: string,
      id: string,
      settingId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListShotNodesQueryVariables = {
  filter?: ModelShotNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShotNodesQuery = {
  listShotNodes?:  {
    __typename: "ModelShotNodeConnection",
    items:  Array< {
      __typename: "ShotNode",
      createdAt: string,
      id: string,
      shotName?: string | null,
      text?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTeamModelsQueryVariables = {
  filter?: ModelTeamModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamModelsQuery = {
  listTeamModels?:  {
    __typename: "ModelTeamModelConnection",
    items:  Array< {
      __typename: "TeamModel",
      createdAt: string,
      id: string,
      owner?: string | null,
      teamId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserModelsQueryVariables = {
  email?: string | null,
  filter?: ModelUserModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserModelsQuery = {
  listUserModels?:  {
    __typename: "ModelUserModelConnection",
    items:  Array< {
      __typename: "UserModel",
      createdAt: string,
      email: string,
      fullName: string,
      profileOwner?: string | null,
      teamId?: string | null,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateAtomicNodeMutationVariables = {
  condition?: ModelAtomicNodeConditionInput | null,
  input: CreateAtomicNodeInput,
};

export type CreateAtomicNodeMutation = {
  createAtomicNode?:  {
    __typename: "AtomicNode",
    createdAt: string,
    id: string,
    mediaFilePath?: string | null,
    nodeName?: string | null,
    nodeThumbnail?: string | null,
    owner?: string | null,
    shotId?: string | null,
    shotNode?:  {
      __typename: "ShotNode",
      createdAt: string,
      id: string,
      shotName?: string | null,
      text?: string | null,
      updatedAt: string,
    } | null,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateSettingsModelMutationVariables = {
  condition?: ModelSettingsModelConditionInput | null,
  input: CreateSettingsModelInput,
};

export type CreateSettingsModelMutation = {
  createSettingsModel?:  {
    __typename: "SettingsModel",
    createdAt: string,
    email: string,
    id: string,
    settingId: string,
    updatedAt: string,
    user?:  {
      __typename: "UserModel",
      createdAt: string,
      email: string,
      fullName: string,
      profileOwner?: string | null,
      teamId?: string | null,
      updatedAt: string,
      userId: string,
    } | null,
  } | null,
};

export type CreateShotNodeMutationVariables = {
  condition?: ModelShotNodeConditionInput | null,
  input: CreateShotNodeInput,
};

export type CreateShotNodeMutation = {
  createShotNode?:  {
    __typename: "ShotNode",
    createdAt: string,
    id: string,
    mediaFile?:  {
      __typename: "ModelAtomicNodeConnection",
      nextToken?: string | null,
    } | null,
    shotName?: string | null,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateTeamModelMutationVariables = {
  condition?: ModelTeamModelConditionInput | null,
  input: CreateTeamModelInput,
};

export type CreateTeamModelMutation = {
  createTeamModel?:  {
    __typename: "TeamModel",
    createdAt: string,
    id: string,
    owner?: string | null,
    teamId: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserModelConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateUserModelMutationVariables = {
  condition?: ModelUserModelConditionInput | null,
  input: CreateUserModelInput,
};

export type CreateUserModelMutation = {
  createUserModel?:  {
    __typename: "UserModel",
    createdAt: string,
    email: string,
    fullName: string,
    profileOwner?: string | null,
    settings?:  {
      __typename: "SettingsModel",
      createdAt: string,
      email: string,
      id: string,
      settingId: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "TeamModel",
      createdAt: string,
      id: string,
      owner?: string | null,
      teamId: string,
      updatedAt: string,
    } | null,
    teamId?: string | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type DeleteAtomicNodeMutationVariables = {
  condition?: ModelAtomicNodeConditionInput | null,
  input: DeleteAtomicNodeInput,
};

export type DeleteAtomicNodeMutation = {
  deleteAtomicNode?:  {
    __typename: "AtomicNode",
    createdAt: string,
    id: string,
    mediaFilePath?: string | null,
    nodeName?: string | null,
    nodeThumbnail?: string | null,
    owner?: string | null,
    shotId?: string | null,
    shotNode?:  {
      __typename: "ShotNode",
      createdAt: string,
      id: string,
      shotName?: string | null,
      text?: string | null,
      updatedAt: string,
    } | null,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteSettingsModelMutationVariables = {
  condition?: ModelSettingsModelConditionInput | null,
  input: DeleteSettingsModelInput,
};

export type DeleteSettingsModelMutation = {
  deleteSettingsModel?:  {
    __typename: "SettingsModel",
    createdAt: string,
    email: string,
    id: string,
    settingId: string,
    updatedAt: string,
    user?:  {
      __typename: "UserModel",
      createdAt: string,
      email: string,
      fullName: string,
      profileOwner?: string | null,
      teamId?: string | null,
      updatedAt: string,
      userId: string,
    } | null,
  } | null,
};

export type DeleteShotNodeMutationVariables = {
  condition?: ModelShotNodeConditionInput | null,
  input: DeleteShotNodeInput,
};

export type DeleteShotNodeMutation = {
  deleteShotNode?:  {
    __typename: "ShotNode",
    createdAt: string,
    id: string,
    mediaFile?:  {
      __typename: "ModelAtomicNodeConnection",
      nextToken?: string | null,
    } | null,
    shotName?: string | null,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteTeamModelMutationVariables = {
  condition?: ModelTeamModelConditionInput | null,
  input: DeleteTeamModelInput,
};

export type DeleteTeamModelMutation = {
  deleteTeamModel?:  {
    __typename: "TeamModel",
    createdAt: string,
    id: string,
    owner?: string | null,
    teamId: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserModelConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteUserModelMutationVariables = {
  condition?: ModelUserModelConditionInput | null,
  input: DeleteUserModelInput,
};

export type DeleteUserModelMutation = {
  deleteUserModel?:  {
    __typename: "UserModel",
    createdAt: string,
    email: string,
    fullName: string,
    profileOwner?: string | null,
    settings?:  {
      __typename: "SettingsModel",
      createdAt: string,
      email: string,
      id: string,
      settingId: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "TeamModel",
      createdAt: string,
      id: string,
      owner?: string | null,
      teamId: string,
      updatedAt: string,
    } | null,
    teamId?: string | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type UpdateAtomicNodeMutationVariables = {
  condition?: ModelAtomicNodeConditionInput | null,
  input: UpdateAtomicNodeInput,
};

export type UpdateAtomicNodeMutation = {
  updateAtomicNode?:  {
    __typename: "AtomicNode",
    createdAt: string,
    id: string,
    mediaFilePath?: string | null,
    nodeName?: string | null,
    nodeThumbnail?: string | null,
    owner?: string | null,
    shotId?: string | null,
    shotNode?:  {
      __typename: "ShotNode",
      createdAt: string,
      id: string,
      shotName?: string | null,
      text?: string | null,
      updatedAt: string,
    } | null,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateSettingsModelMutationVariables = {
  condition?: ModelSettingsModelConditionInput | null,
  input: UpdateSettingsModelInput,
};

export type UpdateSettingsModelMutation = {
  updateSettingsModel?:  {
    __typename: "SettingsModel",
    createdAt: string,
    email: string,
    id: string,
    settingId: string,
    updatedAt: string,
    user?:  {
      __typename: "UserModel",
      createdAt: string,
      email: string,
      fullName: string,
      profileOwner?: string | null,
      teamId?: string | null,
      updatedAt: string,
      userId: string,
    } | null,
  } | null,
};

export type UpdateShotNodeMutationVariables = {
  condition?: ModelShotNodeConditionInput | null,
  input: UpdateShotNodeInput,
};

export type UpdateShotNodeMutation = {
  updateShotNode?:  {
    __typename: "ShotNode",
    createdAt: string,
    id: string,
    mediaFile?:  {
      __typename: "ModelAtomicNodeConnection",
      nextToken?: string | null,
    } | null,
    shotName?: string | null,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateTeamModelMutationVariables = {
  condition?: ModelTeamModelConditionInput | null,
  input: UpdateTeamModelInput,
};

export type UpdateTeamModelMutation = {
  updateTeamModel?:  {
    __typename: "TeamModel",
    createdAt: string,
    id: string,
    owner?: string | null,
    teamId: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserModelConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateUserModelMutationVariables = {
  condition?: ModelUserModelConditionInput | null,
  input: UpdateUserModelInput,
};

export type UpdateUserModelMutation = {
  updateUserModel?:  {
    __typename: "UserModel",
    createdAt: string,
    email: string,
    fullName: string,
    profileOwner?: string | null,
    settings?:  {
      __typename: "SettingsModel",
      createdAt: string,
      email: string,
      id: string,
      settingId: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "TeamModel",
      createdAt: string,
      id: string,
      owner?: string | null,
      teamId: string,
      updatedAt: string,
    } | null,
    teamId?: string | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type OnCreateAtomicNodeSubscriptionVariables = {
  filter?: ModelSubscriptionAtomicNodeFilterInput | null,
  owner?: string | null,
};

export type OnCreateAtomicNodeSubscription = {
  onCreateAtomicNode?:  {
    __typename: "AtomicNode",
    createdAt: string,
    id: string,
    mediaFilePath?: string | null,
    nodeName?: string | null,
    nodeThumbnail?: string | null,
    owner?: string | null,
    shotId?: string | null,
    shotNode?:  {
      __typename: "ShotNode",
      createdAt: string,
      id: string,
      shotName?: string | null,
      text?: string | null,
      updatedAt: string,
    } | null,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateSettingsModelSubscriptionVariables = {
  filter?: ModelSubscriptionSettingsModelFilterInput | null,
};

export type OnCreateSettingsModelSubscription = {
  onCreateSettingsModel?:  {
    __typename: "SettingsModel",
    createdAt: string,
    email: string,
    id: string,
    settingId: string,
    updatedAt: string,
    user?:  {
      __typename: "UserModel",
      createdAt: string,
      email: string,
      fullName: string,
      profileOwner?: string | null,
      teamId?: string | null,
      updatedAt: string,
      userId: string,
    } | null,
  } | null,
};

export type OnCreateShotNodeSubscriptionVariables = {
  filter?: ModelSubscriptionShotNodeFilterInput | null,
};

export type OnCreateShotNodeSubscription = {
  onCreateShotNode?:  {
    __typename: "ShotNode",
    createdAt: string,
    id: string,
    mediaFile?:  {
      __typename: "ModelAtomicNodeConnection",
      nextToken?: string | null,
    } | null,
    shotName?: string | null,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateTeamModelSubscriptionVariables = {
  filter?: ModelSubscriptionTeamModelFilterInput | null,
  owner?: string | null,
};

export type OnCreateTeamModelSubscription = {
  onCreateTeamModel?:  {
    __typename: "TeamModel",
    createdAt: string,
    id: string,
    owner?: string | null,
    teamId: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserModelConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateUserModelSubscriptionVariables = {
  filter?: ModelSubscriptionUserModelFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateUserModelSubscription = {
  onCreateUserModel?:  {
    __typename: "UserModel",
    createdAt: string,
    email: string,
    fullName: string,
    profileOwner?: string | null,
    settings?:  {
      __typename: "SettingsModel",
      createdAt: string,
      email: string,
      id: string,
      settingId: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "TeamModel",
      createdAt: string,
      id: string,
      owner?: string | null,
      teamId: string,
      updatedAt: string,
    } | null,
    teamId?: string | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type OnDeleteAtomicNodeSubscriptionVariables = {
  filter?: ModelSubscriptionAtomicNodeFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAtomicNodeSubscription = {
  onDeleteAtomicNode?:  {
    __typename: "AtomicNode",
    createdAt: string,
    id: string,
    mediaFilePath?: string | null,
    nodeName?: string | null,
    nodeThumbnail?: string | null,
    owner?: string | null,
    shotId?: string | null,
    shotNode?:  {
      __typename: "ShotNode",
      createdAt: string,
      id: string,
      shotName?: string | null,
      text?: string | null,
      updatedAt: string,
    } | null,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteSettingsModelSubscriptionVariables = {
  filter?: ModelSubscriptionSettingsModelFilterInput | null,
};

export type OnDeleteSettingsModelSubscription = {
  onDeleteSettingsModel?:  {
    __typename: "SettingsModel",
    createdAt: string,
    email: string,
    id: string,
    settingId: string,
    updatedAt: string,
    user?:  {
      __typename: "UserModel",
      createdAt: string,
      email: string,
      fullName: string,
      profileOwner?: string | null,
      teamId?: string | null,
      updatedAt: string,
      userId: string,
    } | null,
  } | null,
};

export type OnDeleteShotNodeSubscriptionVariables = {
  filter?: ModelSubscriptionShotNodeFilterInput | null,
};

export type OnDeleteShotNodeSubscription = {
  onDeleteShotNode?:  {
    __typename: "ShotNode",
    createdAt: string,
    id: string,
    mediaFile?:  {
      __typename: "ModelAtomicNodeConnection",
      nextToken?: string | null,
    } | null,
    shotName?: string | null,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamModelSubscriptionVariables = {
  filter?: ModelSubscriptionTeamModelFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTeamModelSubscription = {
  onDeleteTeamModel?:  {
    __typename: "TeamModel",
    createdAt: string,
    id: string,
    owner?: string | null,
    teamId: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserModelConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserModelSubscriptionVariables = {
  filter?: ModelSubscriptionUserModelFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteUserModelSubscription = {
  onDeleteUserModel?:  {
    __typename: "UserModel",
    createdAt: string,
    email: string,
    fullName: string,
    profileOwner?: string | null,
    settings?:  {
      __typename: "SettingsModel",
      createdAt: string,
      email: string,
      id: string,
      settingId: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "TeamModel",
      createdAt: string,
      id: string,
      owner?: string | null,
      teamId: string,
      updatedAt: string,
    } | null,
    teamId?: string | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type OnUpdateAtomicNodeSubscriptionVariables = {
  filter?: ModelSubscriptionAtomicNodeFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAtomicNodeSubscription = {
  onUpdateAtomicNode?:  {
    __typename: "AtomicNode",
    createdAt: string,
    id: string,
    mediaFilePath?: string | null,
    nodeName?: string | null,
    nodeThumbnail?: string | null,
    owner?: string | null,
    shotId?: string | null,
    shotNode?:  {
      __typename: "ShotNode",
      createdAt: string,
      id: string,
      shotName?: string | null,
      text?: string | null,
      updatedAt: string,
    } | null,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateSettingsModelSubscriptionVariables = {
  filter?: ModelSubscriptionSettingsModelFilterInput | null,
};

export type OnUpdateSettingsModelSubscription = {
  onUpdateSettingsModel?:  {
    __typename: "SettingsModel",
    createdAt: string,
    email: string,
    id: string,
    settingId: string,
    updatedAt: string,
    user?:  {
      __typename: "UserModel",
      createdAt: string,
      email: string,
      fullName: string,
      profileOwner?: string | null,
      teamId?: string | null,
      updatedAt: string,
      userId: string,
    } | null,
  } | null,
};

export type OnUpdateShotNodeSubscriptionVariables = {
  filter?: ModelSubscriptionShotNodeFilterInput | null,
};

export type OnUpdateShotNodeSubscription = {
  onUpdateShotNode?:  {
    __typename: "ShotNode",
    createdAt: string,
    id: string,
    mediaFile?:  {
      __typename: "ModelAtomicNodeConnection",
      nextToken?: string | null,
    } | null,
    shotName?: string | null,
    text?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamModelSubscriptionVariables = {
  filter?: ModelSubscriptionTeamModelFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTeamModelSubscription = {
  onUpdateTeamModel?:  {
    __typename: "TeamModel",
    createdAt: string,
    id: string,
    owner?: string | null,
    teamId: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserModelConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserModelSubscriptionVariables = {
  filter?: ModelSubscriptionUserModelFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateUserModelSubscription = {
  onUpdateUserModel?:  {
    __typename: "UserModel",
    createdAt: string,
    email: string,
    fullName: string,
    profileOwner?: string | null,
    settings?:  {
      __typename: "SettingsModel",
      createdAt: string,
      email: string,
      id: string,
      settingId: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "TeamModel",
      createdAt: string,
      id: string,
      owner?: string | null,
      teamId: string,
      updatedAt: string,
    } | null,
    teamId?: string | null,
    updatedAt: string,
    userId: string,
  } | null,
};
