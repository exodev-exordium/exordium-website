import { HttpHeaders } from '@angular/common/http';

export class API {
    public endpoint: string = 'https://api.exordium.dev'; // http://localhost:3000
    public headers = new HttpHeaders().set('Content-Type', 'application/json');
}