import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {

  constructor(
    private readonly authService: AuthService
  ){}

  public registerUser = ( req: Request, res: Response ) => {
    res.status(200).json('Registrando usuario...')
  }  
  
  public loginUser = ( req: Request, res: Response ) => {
    res.status(200).json('Loggeando usuario...')
  }

}