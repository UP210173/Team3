import { regularExps } from "../../../config/regular-exp";

export class RegisterUserDto {

  private constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly password: string,
  ){}

  public static create( obj: {[key: string]: any} ): [ string?, RegisterUserDto? ] {

    const { firstName, lastName, email, password } = obj;

    if ( !firstName ) return ['El nombre es obligatorio', undefined ];
    if ( !lastName ) return ['El apellido es obligatorio', undefined ];
    if ( !regularExps.email.test( email )  ) return ['Email no valido', undefined]
    if ( !password ) return ['La contraseña es obligatoria', undefined]
    if ( password.length < 8 ) return ['La contraseña debe contener mínimo 8 caracteres', undefined]

    return [ undefined, new RegisterUserDto( firstName, lastName, email, password ) ]
  }

}