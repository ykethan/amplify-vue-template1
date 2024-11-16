import { getCurrentUser } from 'aws-amplify/auth';

export default function isAuthenticated(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    getCurrentUser()
      .then((userId) => (userId !== undefined ? resolve(true) : reject(false)))
      .catch(() => {
        console.log('User is not authenticated');
        resolve(false);
      });
  });
}
