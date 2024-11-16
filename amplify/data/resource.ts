import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { preSignUp } from "../auth/pre-sign-up/resource";


const schema = a.schema({
  UserModel: a.model({
    userId: a.id().required(),
    fullName: a.string().required(),
    email: a.email().required(),
    profileOwner: a.string(),
    settings: a.hasOne("SettingsModel", "email"),
    teamId: a.id(),
    team: a.belongsTo("TeamModel", "teamId")
  })
  .authorization((allow) => [
        allow.ownerDefinedIn("profileOwner"),
  ]).identifier(["email"]),

  SettingsModel: a.model({
    settingId: a.id().required(),
    email: a.email().required(),
    user: a.belongsTo("UserModel", "email")
  }).authorization((allow) => [allow.owner()]),

  TeamModel: a.model({
    teamId: a.id().required(),
    users: a.hasMany("UserModel", "teamId")
  }).authorization((allow) => [allow.owner()]),

  AtomicNode: a.model({
    text: a.string(),
    mediaFilePath: a.string(),
    nodeName: a.string(),
    nodeThumbnail: a.string(),
    shotId: a.id(),
    shotNode: a.belongsTo("ShotNode","shotId"),
  }).authorization((allow) => [allow.owner()]),

  ShotNode: a.model({
    mediaFile: a.hasMany("AtomicNode","shotId"),
    shotName: a.string(),
    text: a.string(),
  }).authorization((allow) => [allow.owner()]),

}).authorization((allow) => [allow.resource(preSignUp)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    // defaultAuthorizationMode: 'userPool',
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    }
  },
});
