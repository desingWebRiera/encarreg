import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Encarreg} from '../models';
import {EncarregRepository} from '../repositories';

export class EncarregController {
  constructor(
    @repository(EncarregRepository)
    public encarregRepository : EncarregRepository,
  ) {}

  @post('/encarregs')
  @response(200, {
    description: 'Encarreg model instance',
    content: {'application/json': {schema: getModelSchemaRef(Encarreg)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Encarreg, {
            title: 'NewEncarreg',
            exclude: ['id'],
          }),
        },
      },
    })
    encarreg: Omit<Encarreg, 'id'>,
  ): Promise<Encarreg> {
    return this.encarregRepository.create(encarreg);
  }

  @get('/encarregs/count')
  @response(200, {
    description: 'Encarreg model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Encarreg) where?: Where<Encarreg>,
  ): Promise<Count> {
    return this.encarregRepository.count(where);
  }

  @get('/encarregs')
  @response(200, {
    description: 'Array of Encarreg model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Encarreg, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Encarreg) filter?: Filter<Encarreg>,
  ): Promise<Encarreg[]> {
    return this.encarregRepository.find(filter);
  }

  @patch('/encarregs')
  @response(200, {
    description: 'Encarreg PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Encarreg, {partial: true}),
        },
      },
    })
    encarreg: Encarreg,
    @param.where(Encarreg) where?: Where<Encarreg>,
  ): Promise<Count> {
    return this.encarregRepository.updateAll(encarreg, where);
  }

  @get('/encarregs/{id}')
  @response(200, {
    description: 'Encarreg model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Encarreg, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Encarreg, {exclude: 'where'}) filter?: FilterExcludingWhere<Encarreg>
  ): Promise<Encarreg> {
    return this.encarregRepository.findById(id, filter);
  }

  @patch('/encarregs/{id}')
  @response(204, {
    description: 'Encarreg PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Encarreg, {partial: true}),
        },
      },
    })
    encarreg: Encarreg,
  ): Promise<void> {
    await this.encarregRepository.updateById(id, encarreg);
  }

  @put('/encarregs/{id}')
  @response(204, {
    description: 'Encarreg PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() encarreg: Encarreg,
  ): Promise<void> {
    await this.encarregRepository.replaceById(id, encarreg);
  }

  @del('/encarregs/{id}')
  @response(204, {
    description: 'Encarreg DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.encarregRepository.deleteById(id);
  }
}
