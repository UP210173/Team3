import { RegisterUserDto } from '../../domain/dto/users/create-user.dto';
import { prisma } from '../../data/postgres';
import { CustomError } from '../../domain/errors';
import { bcryptAdapter } from '../../config';

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

      const hashPassword = bcryptAdapter.hash( registerUserDto.password );

      const newUser = await prisma.user.create({
        data: {
          ...registerUserDto,
          password: hashPassword
        },
      });

      return { user: newUser };
      
    } catch (error) {
      throw CustomError.internalServerError(`${error}`);
    }

  }
}
