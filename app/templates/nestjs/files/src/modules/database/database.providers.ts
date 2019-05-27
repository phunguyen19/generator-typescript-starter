import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(process.env.DATABASE_URL);
      sequelize.addModels([]);
      await sequelize.sync({ force: process.env.DB_FORCE_SYNC === 'true' });
      return sequelize;
    },
  },
];
