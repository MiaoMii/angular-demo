// 核心模块
import {Component} from '@angular/core';

@Component({
    selector: 'app-root',                   // 使用这个组件名称
    templateUrl: './app.component.html',    // html
    styleUrls: ['./app.component.less']     // css 文件
})
export class AppComponent {
    title = 'angular-demo';
}
