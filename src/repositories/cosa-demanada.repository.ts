import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {CosaDemanada, CosaDemanadaRelations} from '../models';

export class CosaDemanadaRepository extends DefaultCrudRepository<
  CosaDemanada,
  typeof CosaDemanada.prototype.id,
  CosaDemanadaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(CosaDemanada, dataSource);
  }
}
