import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Encarreg, EncarregRelations} from '../models';

export class EncarregRepository extends DefaultCrudRepository<
  Encarreg,
  typeof Encarreg.prototype.id,
  EncarregRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Encarreg, dataSource);
  }
}
