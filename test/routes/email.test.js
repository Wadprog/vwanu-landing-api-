const request = require('supertest')
const app = require('../../app')
const Tester = require('../../model/tester')

describe('Testing adding a listing testers', () => {
  let testers = []
  const testEmail = 'minek12108@hbehs.com'
  afterAll(async () => {
    await Promise.all(
      testers.map((tester) => Tester.findByIdAndDelete(tester._id))
    )
  })

  test('should create a tester', async () => {
    const tester1 = await request(app).post('/tester').send({
      email: testEmail,
      firstName: 'Tester',
      lastName: 'last name',
    })
    testers.push(tester1.body)

    expect(tester1.body).toMatchObject({
      _id: expect.any(String),
      email: testEmail,
      firstName: 'Tester',
      lastName: 'last name',
      authorized: true,
    })
  })

  test('should not create a second tester with same email', async () => {
    const response = await request(app).post('/tester').send({
      email: testEmail,
      firstName: 'Tester',
      lastName: 'last name',
    })
    expect(response.status).toEqual(401)
  })

  test('should list all the testers', async () => {
    const response = await request(app).get('/tester')
    expect(response.status).toEqual(200)
    expect(Array.isArray(response.body)).toBeTruthy()
    expect(response.body[0]).toMatchObject({
      _id: expect.any(String),
      firstName: expect.any(String),
      lastName: expect.any(String),
      email: expect.any(String),
      authorized: expect.any(Boolean),
    })
  })
})
