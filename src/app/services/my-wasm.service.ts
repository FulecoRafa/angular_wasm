import { Injectable } from '@angular/core';
import init, { square, square_alert } from '../../squarer/pkg/squarer';
// import '!!file-loader?name=wasm/squarer_bg.wasm!../../squarer/pkg/squarer_bg.wasm';

@Injectable({
  providedIn: 'root'
})
export class MyWasmService {

  constructor() {
    init('assets/wasm/squarer_bg.wasm')
      .then(() => console.log('Wasm module loaded'))
      .catch(console.error);
  }

  square(value: number): number {
    return square(value);
  }

  square_alert(value: number) {
    square_alert(value);
  }
}
