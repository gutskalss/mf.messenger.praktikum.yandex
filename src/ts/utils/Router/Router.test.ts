// import { expect } from 'chai'
// import { Router } from './Router'
// import { SigninPage } from '../../pages/signin'
// import { SignupPage } from '../../pages/signup'
// import { beforeEach, before } from 'mocha'

// const chai = require('chai')
// const jsdom = require('mocha-jsdom')
// let chaiHttp = require('chai-http')

// chai.use(chaiHttp)

// const { JSDOM } = require('jsdom')
// const { window } = new JSDOM('<!DOCTYPE html><div id="root"></div>')
// const { document } = window

// describe('Init router', function () {
//   global.Handlebars = require('handlebars')

//   let router = new Router('#root')

//   it('Router create 2 Routes', function () {
//     router.use('/', SigninPage).use('/profile/change-password', SignupPage)
//     router.start()

//     expect(router.routes.length).to.equal(2)
//   })

//   it('Router not create 3 routes', function () {
//     router.use('/', SigninPage).use('/profile/change-password', SignupPage)
//     router.start()

//     expect(router.routes.length).not.equal(3)
//   })
// })

import { expect } from 'chai'

function hello(name: string) {
  return `Hello ${name}`
}

describe('Typescript + Babel usage suite', () => {
  it('should return string correctly', () => {
    expect(hello('mocha'), 'Hello mocha')
  })
})
