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
import {CosaDemanada} from '../models';
import {CosaDemanadaRepository} from '../repositories';

export class CosademandadaController {
  constructor(
    @repository(CosaDemanadaRepository)
    public cosaDemanadaRepository : CosaDemanadaRepository,
  ) {}

  @post('/cosa-demanadas')
  @response(200, {
    description: 'CosaDemanada model instance',
    content: {'application/json': {schema: getModelSchemaRef(CosaDemanada)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CosaDemanada, {
            title: 'NewCosaDemanada',
            exclude: ['id'],
          }),
        },
      },
    })
    cosaDemanada: Omit<CosaDemanada, 'id'>,
  ): Promise<CosaDemanada> {
    return this.cosaDemanadaRepository.create(cosaDemanada);
  }

  @get('/cosa-demanadas/count')
  @response(200, {
    description: 'CosaDemanada model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CosaDemanada) where?: Where<CosaDemanada>,
  ): Promise<Count> {
    return this.cosaDemanadaRepository.count(where);
  }

  @get('/cosa-demanadas')
  @response(200, {
    description: 'Array of CosaDemanada model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CosaDemanada, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CosaDemanada) filter?: Filter<CosaDemanada>,
  ): Promise<CosaDemanada[]> {
    return this.cosaDemanadaRepository.find(filter);
  }

  @patch('/cosa-demanadas')
  @response(200, {
    description: 'CosaDemanada PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CosaDemanada, {partial: true}),
        },
      },
    })
    cosaDemanada: CosaDemanada,
    @param.where(CosaDemanada) where?: Where<CosaDemanada>,
  ): Promise<Count> {
    return this.cosaDemanadaRepository.updateAll(cosaDemanada, where);
  }

  @get('/cosa-demanadas/{id}')
  @response(200, {
    description: 'CosaDemanada model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CosaDemanada, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CosaDemanada, {exclude: 'where'}) filter?: FilterExcludingWhere<CosaDemanada>
  ): Promise<CosaDemanada> {
    return this.cosaDemanadaRepository.findById(id, filter);
  }

  @patch('/cosa-demanadas/{id}')
  @response(204, {
    description: 'CosaDemanada PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CosaDemanada, {partial: true}),
        },
      },
    })
    cosaDemanada: CosaDemanada,
  ): Promise<void> {
    await this.cosaDemanadaRepository.updateById(id, cosaDemanada);
  }

  @put('/cosa-demanadas/{id}')
  @response(204, {
    description: 'CosaDemanada PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cosaDemanada: CosaDemanada,
  ): Promise<void> {
    await this.cosaDemanadaRepository.replaceById(id, cosaDemanada);
  }

  @del('/cosa-demanadas/{id}')
  @response(204, {
    description: 'CosaDemanada DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cosaDemanadaRepository.deleteById(id);
  }
}
