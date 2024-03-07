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
}

interface UserFiles {
  id: number;
  user_id: number;
  filename: string;
}

export const getUserResources = async (
  db: Knex,
  userName?: string,
  userId?: string
): Promise<(User & UserStorage)> => {
  const user = await db('users')
    .join<UserStorage>('user_storage', 'users.id', 'user_storage.user_id')
    .select('users.*', 'user_storage.*')
    .where('users.id', userId)
    .where('users.username', userName)
    .first();
  
  return user
}

export const getUserFiles = async(
  db: Knex,
  userId?: string
): Promise<(UserFiles)> => {
  const user = await db('user_files')
    .where('user_id', userId)
    .first();
  
  return user
}