import request from 'supertest'
import app from '../server.js'

var projectId, endpoint, id

describe('POST - Create a new project', () => {
      endpoint = '/projects'

      it('Create a new project to be used for a sample', async () => {
            const response = await request(app)
                  .post(endpoint)
                  .send({
                        name: 'Projeto de teste',
                        description: 'uma descrição qualquer'
                  })

            projectId = await response.body.id
      })
})

describe('POST - Create a new task', () => {
      endpoint = `/projects/${projectId}/tasks`

      it('A task should be created', async () => {
            const response = await request(app)
                  .post(endpoint)
                  .send({title: 'nova task'})

            id = await response.body.taskId

            expect(response.statusCode).toBe(201)
            expect(response.body.title).toBe('nova task')
      })

      it('A task cant be create', async () => {
            const response = await request(app)
                  .post(endpoint)
                  .send({})
            
            expect(response.statusCode).toBe(400)
      })
})

describe('GET - Get all tasks', () => {


      it('Return all tasks disponible', async () => {
            const response = await request(app)
                  .get('/tasks')

            expect(response.statusCode).toBe(200)
      })
})

describe('GET - Get all task by project id', () => {
      endpoint = `/projects/${projectId}/tasks`

      it('Should get all tasks', async () => {
            const response = await request(app)
                  .get(endpoint)

            expect(response.statusCode).toBe(200)
      })

      it('dont should return any task', async () => {
            const response = await request(app)
                  .get(`/projects/14365346/tasks`)

            expect(response.statusCode).toBe(404)
      })
})

describe('PUT - Update a task', () => {
      it('should update a task', async () => {
            const response = await request(app)
                  .put('/tasks/meuid123')
                  .send({
                        title: 'novo titulo',
                        done: true
                  })

            expect(response.statusCode).toBe(200)
      })

      it('should update only done', async () => {
            const response = await request(app)
                  .put('/tasks/meuid123')
                  .send({
                        done: true
                  })

            expect(response.statusCode).toBe(200)
      })

      it('should update only title', async () => {
            const response = await request(app)
                  .put('/tasks/meuid123')
                  .send({
                        title: 'novo titulo'
                  })

            expect(response.statusCode).toBe(200)
      })

      it('dont update', async () => {
            const response = await request(app)
                  .put('/tasks/1234')
                  .send({title: 'title update', done: true})

            expect(response.statusCode).toBe(404)
      })

})

describe('DELETE - Delete a task', () => {
      it('Should be delete', async () => {
            const response = await request(app)
                  .delete(`/tasks/${id}`)

            expect(response.statusCode).toBe(200)
      })

      it('Dont delete', async () => {
            const response = await request(app)
                  .delete('/tasks/1234')

            expect(response.statusCode).toBe(404)
      })
})