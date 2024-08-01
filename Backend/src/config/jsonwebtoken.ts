import jwt from 'jsonwebtoken';
import { envs } from './envs';

const seed = envs.JWT_SEED; 

export const jwtGenerator = {

  async generateToken( payload: any, duration: string = '5h' ) {
    return new Promise( ( resolve, _ ) => {

      jwt.sign( payload, seed, { expiresIn: duration }, ( err, token ) => {
        if ( err ) return resolve( null );
        resolve(token);
      })

    }) 
  }

}