import { Injectable } from '@angular/core';
import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';

@Injectable({
  providedIn: 'root',
})
export class CitizenSoapServiceService {
  url: string = 'http://localhost:8001/?wsdl';
  client!: Client;
  constructor(private soap: NgxSoapService) {
    // this.initClient();
  }

  initClient() {
    this.soap.createClient(this.url).then((client: Client) => {
      console.log(client);
      client.addHttpHeader('Content-Type', 'text/xml');
      client.addHttpHeader('Accept', '*/*');

      this.client = client;
      this.getCitizens();
    });
  }

  getCitizens() {
    (<any>this.client).get_all().subscribe((res: ISoapMethodResponse) => {
      console.log(res.result);
    });
  }
}
