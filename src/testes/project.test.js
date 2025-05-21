import request from 'supertest'
import app from '../server.js'

var root = '/projects'
var id

describe('POST - Criação de um novo projeto', () => {
      it('Deve criar um novo projeto', async () => {
            const response = await request(app)
                  .post(root)
                  .send({
                        name: 'Projeto teste case',
                        description: 'Um projeto criado para teste.'
                  })
            
                  id = response.body.id

            expect(response.statusCode).toBe(201)
            expect(response.body).toHaveProperty('id')
            expect(response.body.name).toBe('Projeto teste case')
            expect(response.body.description).toBe('Um projeto criado para teste.')
      })

      it('Um novo projeto não deve ser criado', async () => {
            const response = await request(app)
                  .post(root)
                  .send({
                        description: 'Um projeto criado para teste.'
                  })

            expect(response.statusCode).toBe(400)
      })

      it('Um novo projeto não deve ser criado', async () => {
            const response = await request(app)
                  .post(root)
                  .send({
                        name: 'um nome'
                  })

            expect(response.statusCode).toBe(400)
      })
})

describe('GET - Listar todos os projetos', () => {
      it('Deve listar todos os projetos armazenados', async () => {
            const response = await request(app)
                  .get(root)

            expect(response.statusCode).toBe(200)
      })

      it('Deve buscar um projeto especifico pelo id', async () => {
            const response = await request(app)
                  .get(`${root}/${id}`)
            
            expect(response.statusCode).toBe(200)
            expect(response.body.id).toBe(id)
      })

      it('Não deve localizar nenhum projeto', async () => {
            const response = await request(app)
                  .get(`${root}/abc`)

            expect(response.statusCode).toBe(404)
      })
})

describe('PUT - Alteração de  projetos', () => {
      it('Deve alterar as informações do projeto', async () => {
            const response = await request(app)
                  .put(`${root}/${id}`)
                  .send({
                        name: 'novo nome',
                        description: 'nova descrição'
                  })

            expect(response.statusCode).toBe(200)
            expect(response.body.changedAt).not.toBe('')
            expect(response.body.name).toBe('novo nome')
            expect(response.body.description).toBe('nova descrição')
      })

      it('Deve alterar as informações do projeto', async () => {
            const response = await request(app)
                  .put(`${root}/${id}`)
                  .send({
                        description: 'nova descrição'
                  })

            expect(response.statusCode).toBe(200)
            expect(response.body.changedAt).not.toBe('')
            expect(response.body.description).toBe('nova descrição')
      })

      it('Deve alterar as informações do projeto', async () => {
            const response = await request(app)
                  .put(`${root}/${id}`)
                  .send({
                        name: 'novo nome'
                  })

            expect(response.statusCode).toBe(200)
            expect(response.body.changedAt).not.toBe('')
            expect(response.body.name).toBe('novo nome')

      })

      it('Não deve localizar o projeto', async () => {
            const response = await request(app)
                  .put(`${root}/abcde`)
                  .send({
                        name: 'teste',
                        description: 'teste'
                  })

            expect(response.statusCode).toBe(404)
      })
})

describe('DELETE - Deletar um projeto', () => {
      it('Deve deletar um projeto', async () => {
            const response = await request(app)
                  .delete(`${root}/${id}`)

            expect(response.statusCode).toBe(200)
      })

      it('Não deve deletar um projeto', async () => {
            const response = await request(app)
                  .delete(`${root}/abc`)

            expect(response.statusCode).toBe(404)
      })
})