import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mysql',
  url: 'mysql://avnadmin:AVNS_ajF_HzyNBFDC8_Qt5wq@mysql-3690e1e5-rieravelazquez-4baa.d.aivencloud.com:21335/encarregs?ssl-mode=REQUIRED',
  host: 'mysql-3690e1e5-rieravelazquez-4baa.d.aivencloud.com',
  port: 21335,
  user: 'avnadmin',
  password: 'AVNS_ajF_HzyNBFDC8_Qt5wq',
  database: 'encarregs'
};


// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
