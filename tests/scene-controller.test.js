import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SceneController, catState } from '../assets/js/scene-controller.js';

function fixture() {
  const media = { matches:false, addEventListener(type, listener) { this.listener=listener; } };
  globalThis.matchMedia = () => media;
  const pending = [];
  const host = { children:[], append(layer) { this.children.push(layer); layer.host=this; } };
  globalThis.document = { createElement() {
    return { style:{}, attributes:{},
      querySelector() { return null; },
      setAttribute(key,value) { this.attributes[key]=value; },
      removeAttribute(key) { delete this.attributes[key]; },
      remove() { this.host.children=this.host.children.filter(child=>child!==this); },
      animate() {
        let resolve, reject;
        const finished = new Promise((yes,no)=>{resolve=yes;reject=no;});
        const animation={finished,finish:resolve,cancel:()=>reject(new Error('cancelled'))};
        pending.push(animation); return animation;
      }
    };
  } };
  return { host, media, pending, controller:new SceneController(host) };
}

test('快速切换取消过期淡化，最终只保留最后场景', async () => {
  const { host, pending, controller } = fixture();
  await controller.show('cafe','cafe');
  const first=controller.show('beach','beach');
  assert.equal(host.children.length,2);
  assert.equal(host.children[0].attributes['aria-hidden'],'true');
  const second=controller.show('camp','camp');
  pending.slice(-2).forEach(animation=>animation.finish());
  await Promise.all([first,second]);
  assert.equal(host.children.length,1);
  assert.equal(host.children[0].innerHTML,'camp');
  assert.equal(host.children[0].attributes['aria-hidden'],undefined);
});

test('关闭动画及动态减少动画偏好立即结束淡化，同场景重绘不替换节点', async () => {
  const { host, media, controller } = fixture();
  await controller.show('cafe','cafe');
  const initial=host.children[0];
  await controller.show('cafe','unchanged');
  assert.equal(host.children[0],initial);
  const switching=controller.show('beach','beach');
  controller.setMotion(false);
  await switching;
  assert.equal(host.children.length,1);
  controller.setMotion(true);
  const next=controller.show('camp','camp');
  media.matches=true; media.listener();
  await next;
  assert.equal(host.children.length,1);
  assert.equal(host.children[0].innerHTML,'camp');
  await controller.show('rain','rain');
  assert.equal(host.children.length,1);
});

test('猫咪区分专注、长短休息、暂停、完成和空闲', () => {
  assert.equal(catState({state:'running',mode:'focus'}),'focus');
  for(const mode of ['short','long']) assert.equal(catState({state:'running',mode}),'rest');
  for(const state of ['paused','idle']) assert.equal(catState({state,mode:'focus'}),'idle');
  assert.equal(catState({state:'completed',mode:'focus'}),'completed');
});
