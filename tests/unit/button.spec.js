import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import Button from '~/button/src/button.vue'
chai.use(sinonChai)

describe('Button', () => {

  it('存在', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(Button).to.exist
  })
  // 能否设置icon
  it('可以设置icon', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'xu-icon-taobao'
      }
    })
    const el = wrapper.find('i')
    expect(el.attributes()['class']).to.equal('xu-icon-taobao')
  })
  // 设置按钮类型
  it('type', () => {
    const wrapper = mount(Button, {
      propsData: {
        type: 'primary'
      }
    })
    const el = wrapper.find('button')
    expect(el.attributes()['class']).to.include('xu-button--primary')
  })
  // 设置按钮size
  it('size', () => {
    const wrapper = mount(Button, {
      propsData: {
        size: 'mini'
      }
    })
    const el = wrapper.find('button')
    expect(el.attributes()['class']).to.include('xu-button--mini')
  })
  // 设置按钮disabled
  it('disabled', () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: true
      }
    })
    const el = wrapper.find('button')
    expect(el.attributes()['class']).to.include('is-disabled')
  })
  // 设置按钮圆角round
  it('round', () => {
    const wrapper = mount(Button, {
      propsData: {
        round: true
      }
    })
    const el = wrapper.find('button')
    expect(el.attributes()['class']).to.include('is-round')
  })
  // 设置朴素按钮
  it('plain', () => {
    const wrapper = mount(Button, {
      propsData: {
        plain: true
      }
    })
    const el = wrapper.find('button')
    expect(el.attributes()['class']).to.include('is-plain')
  })
  // 设置loading
  it('可以设置loading', () => {
    const wrapper = mount(Button, {
      propsData: {
        loading: true
      }
    })
    const el = wrapper.find('i')
    expect(el.attributes()['class']).to.equal('xu-icon-loading')
  })
  // 可以触发click事件
  it('可以触发click事件', () => {
    const wrapper = mount(Button)
    const vm = wrapper.vm

    const cb = sinon.fake()
    vm.$on('click', cb)
    vm.$el.click()
    // eslint-disable-next-line no-unused-expressions
    expect(cb).to.have.been.called
  })
})
