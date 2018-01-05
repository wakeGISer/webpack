/**
 * Created by wuerchang on 2017/6/14.
 */
import _ from 'lodash';
import css  from './test.css';
import Hello from './hello';

function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+   element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
Hello();
