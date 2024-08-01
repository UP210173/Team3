import express, { Router } from 'express';
import cors from 'cors';

interface Options {
  port: number,
  public_path: string,
  routes: Router
}

export class Server {

  private readonly app = express();
  private serverListener?: any;
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor( options: Options ) {
    const { port, routes, public_path = 'public' } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }

  public async start() {

    this.app.use( cors() );
    this.app.use( express.json() );
    this.app.use( express.urlencoded({ extended: true }) );
    this.app.use( express.static( this.publicPath ) );
    this.app.use( this.routes );

    this.serverListener = this.app.listen( this.port, () => {
      console.log(`Server running in port ${this.port}`);
    });

  }

  public close() {
    this.serverListener?.close();
  }

}