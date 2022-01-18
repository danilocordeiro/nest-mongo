import { User } from 'src/users/schemas/user.schema';

export const userStub = (): User => {
  return {
    userId: '123',
    email: 'test@emm.com',
    age: 23,
    favoriteFoods: ['sushi', 'pizza'],
  };
};
