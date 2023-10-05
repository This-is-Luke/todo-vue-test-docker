import * as bcrypt from 'bcrypt';

const saltRounds = 10;

export async function hashPassword(plainTextPassword: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
  return hashedPassword;
}

export async function checkPassword(userInput: string, storedHash: string): Promise<boolean> {
  const match = await bcrypt.compare(userInput, storedHash);
  return match;
}
