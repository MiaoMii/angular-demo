import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  isShow = true;
  arr: string[] = ['我是第一个', '我是第二个'];

  orderStatus = 1; // 1、已支付 2、支付并且确认 3、已发货 4、已收货
  blueFontColor = 'blue';
  today = new Date();
  redFlag = false;
  keywords = '默认值';
  constructor() {}

  run() {
    alert('执行方法');
  }

  keydown = (e) => {
    console.log(e);
    console.log('keydown');
  };

  ngOnInit(): void {}
}
