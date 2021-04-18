import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
})
export class NewsComponent implements OnInit {
  /*
   * public 共有 默认属性 可以在这个类里面使用、也可以在类外面使用
   * protected 保护类型 只有在当前类和当前的类的子类中可以使用
   * private 私有 只能在当前类中使用
   * */
  public title = '我是新闻组件';
  public userInfo: any = {
    name: '杨力',
    info: '肥猪',
  };
  public infoTitle = '我是一个学生';
  public content = '<h2>我是一个html标签</h2>';

  arr: number[] = [1, 2, 3, 4];
  arr1: Array<any> = [
    { name: '新闻1', time: '2011-04-17' },
    { name: '新闻2', time: '2011-04-17' },
    { name: '新闻3', time: '2011-04-17' },
  ];

  constructor() {
    this.title = '我是改变后的值';
  }

  ngOnInit(): void {}
}
