import { RegisterUserDto } from '../../domain/dto/users/create-user.dto';
import { prisma } from '../../data/postgres';
import { CustomError } from '../../domain/errors';

export class AuthService {
  // DI
  constructor() {}

  public async postUser(registerUserDto: RegisterUserDto) {
    const emailExistence = await prisma.user.findUnique({
      where: { email: registerUserDto.email },
    });

    if (emailExistence) {
      throw CustomError.badRequest('El email ya existe en la base de datos');
    }

    try {
      const newUser = await prisma.user.create({
        data: registerUserDto!,
      });

      return { user: newUser };
      
    } catch (error) {
      throw CustomError.internalServerError(`${error}`);
    }

  }
}
