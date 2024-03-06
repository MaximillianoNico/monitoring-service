import { Knex } from "knex"

interface User {
  id: number;
  username: string;
  // Add other properties as needed
}

interface UserStorage {
  id: number;
  user_id: number;
  totalStorage: string;
  // Add other properties as needed
}

export const getUserResources = async (db:Knex, userName: string, userId: number): Promise<(User & UserStorage)> => {
  const user = await db('users')
    .join<UserStorage>('user_storage', 'users.id', 'user_storage.user_id')
    .select('users.*', 'user_storage.*')
    .where('id', userId)
    .where('username', userName)
    .first();
  
  return user
}