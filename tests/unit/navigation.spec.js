import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import Navigation from '~/navigation/src/navigation.vue'
chai.use(sinonChai)

describe('Navigation', () => {
  it('存在', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(Navigation).to.exist
  })
  // 传入数组可以生成导航栏条目
  it('传入数组可以生成导航栏条目', (done) => {
    
  })
  // 点击按钮显示/隐藏
  it('点击按钮显示/隐藏', () => {

  })
})
