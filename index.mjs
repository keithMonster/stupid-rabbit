import { screen, Region ,keyboard} from '@nut-tree/nut-js';
import Tesseract from 'tesseract.js'

// 定义屏幕区域的坐标和大小
const left = 0; // 区域的起始x坐标
const top = 50; // 区域的起始y坐标
const width = 150; // 区域的宽度
const height = 50; // 区域的高度

// 截取屏幕区域并保存到文件
const regionImagePath = await screen.captureRegion(
  'ignore-isScreen',
  new Region(left, top, width, height)
);
console.log('Region screenshot saved:', regionImagePath);

console.log('create-');
const worker = await Tesseract.createWorker(['eng']);
console.log('in-');
const ret = await worker.recognize(regionImagePath);
console.log('-------',ret.data.text);
await worker.terminate();

keyboard.type(`左上角的那段英文是：${ret.data.text}`)