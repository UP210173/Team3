export class LoginUserDto {

  private constructor(
    public readonly email: string,
    public readonly password: string,
  ){}

  public static create( obj: {[key: string]: any} ): [ string?, LoginUserDto? ] {
    
    const { email, password } = obj;

    if ( !email ) return ['Email obligatorio', undefined ];
    if ( !password ) return ['Password obligatoria', undefined]

    return [ undefined, new LoginUserDto( email, password ) ];
  }

}