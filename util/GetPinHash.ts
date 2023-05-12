import bcrypt from 'bcryptjs';

export const encryptPassword = async (num1:number,num2:number,num3:number,num4:number): Promise<string> => {
  const saltRounds = 10; // Number of salt rounds for encryption
  const salt = await bcrypt.genSalt(saltRounds);
  const encryptedPassword = await bcrypt.hash(num1,num2,num3,num4, salt);
  console.log("ENCRYPTED PIN:", encryptedPassword)
  return encryptedPassword;
};
