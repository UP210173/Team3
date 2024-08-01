import { RegisterUserDto, LoginUserDto } from '../../domain/dto/users';
import { prisma } from '../../data/postgres';
import { CustomError } from '../../domain/errors';
import { bcryptAdapter, jwtGenerator } from '../../config';

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

  public async loginUser( loginUserDto: LoginUserDto ) {

    try {
      const user = await prisma.user.findUnique({
        where: { email: loginUserDto.email }
      });
  
      if ( !user ) {
        throw CustomError.notFound(`Email ${loginUserDto.email} no existe`);
      }
  
      const isCorrectPassword = bcryptAdapter.compare( loginUserDto.password, user.password );
  
      if ( !isCorrectPassword ) {
        throw CustomError.unauthorized('Contraseña incorrecta');
      }
  
      const token = await jwtGenerator.generateToken({ id: user.id });
  
      if ( !token ) {
        throw CustomError.internalServerError('Error al crear token');
      }
  
      return {
        user,
        token
      }
    } catch (error) {
      throw CustomError.internalServerError(`${error}`);
    }

  }


}
