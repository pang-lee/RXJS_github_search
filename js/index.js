// https://github.com/ecmadao/Coding-Guide/blob/master/Notes/RxJS/%E6%8E%A2%E7%B4%A2RxJS-%E5%81%9A%E4%B8%80%E4%B8%AAgithub%E5%B0%8F%E5%BA%94%E7%94%A8.md
import helper from './helper.js'

$(() => {
  const $input = $('.search');
  // 通过 input 的 keyup 事件来创建流
  const input = rxjs.fromEvent($input, 'keyup').pipe(rxjs.debounce(() => rxjs.timer(400)))
  // 开启监听
  input.subscribe(e => {
    rxjs.operators.mergeMap(helper.fetchRepo(e.target.value))
  })
});

