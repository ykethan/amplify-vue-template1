import type { PreSignUpTriggerHandler } from 'aws-lambda';
import { env } from '$amplify/env/pre-sign-up';
import type { Schema } from '../../data/resource';
import { generateClient } from 'aws-amplify/data';
import { Amplify } from 'aws-amplify';
import { createUserModel } from '../../graphql/mutations';

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "iam",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const client = generateClient<Schema>({
  authMode: "iam"
});

export const handler: PreSignUpTriggerHandler = async (event) => {
  await client.graphql({
    query: createUserModel,
    variables: {
      input: {
        userId: event.userName,
        fullName: event.request.userAttributes.given_name,
        email: event.request.userAttributes.email,
        profileOwner: `${event.request.userAttributes.sub}::${event.userName}`
      }
    }
  })

  return event;
};
