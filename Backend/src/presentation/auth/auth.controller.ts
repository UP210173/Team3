import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "../../domain/dto/users/create-user.dto";
import { CustomError } from "../../domain/errors";

export class AuthController {

  constructor(
    private readonly authService: AuthService
  ){}

  private handleErrorResponse = ( error: unknown, res: Response ) => {

    if ( error instanceof CustomError ) {
      return res.status( error.statusCode ).json(({ error: error.message }))
    }

    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal Server Error'});

  }

  public registerUser = ( req: Request, res: Response ) => {
    
    const [ errorMessage, registerUserDto ] = RegisterUserDto.create( req.body );

    if ( errorMessage ) {
      return res.status(400).json({ error: errorMessage });
    }

    this.authService.postUser( registerUserDto! )
      .then( data => res.status(201).json( data ) )
      .catch( error => this.handleErrorResponse( error, res ))

  }  
  
  public loginUser = ( req: Request, res: Response ) => {
    res.status(200).json('Loggeando usuario...')
  }

}