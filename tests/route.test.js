const chai = require('chai')
const { expect } = require('chai');
const chaiHttp = require('chai-http')
const server = require('../app')

chai.use(chaiHttp);

describe("test routes", () => {
    it("test index route", async () => {
        const res = await chai.request(server).get('/').send();
        expect(res).to.have.status(200);
    })

    // it(`test game route`, async () => {
    //     const res = await chai.request(server).get('/game').send();
    //     expect(res).to.have.status(200);
    // })

    // it(`test result route`, async () => {
    //     const res = await chai.request(server).post('/result').send();
    //     expect(response).to.have.status(200);
    // })
})