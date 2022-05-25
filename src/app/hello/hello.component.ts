import { Component, OnInit } from '@angular/core';
import { MyWasmService } from '../services/my-wasm.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  message = 'waiting for input...';
  inputValue = 0;

  constructor(private myWasm: MyWasmService) { }

  ngOnInit(): void {
  }

  calculate() {
    const result = this.myWasm.square(this.inputValue);
    this.myWasm.square_alert(this.inputValue);
    this.message = result.toString();
  }

}
