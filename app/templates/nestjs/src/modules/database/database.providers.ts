import { Sequelize } from 'sequelize-typescript';
import { Booking } from '../../models/booking.entity';
import { User } from '../../models/user.entity';
import { Airline } from '../../models/airline.entity';
import { Airport } from '../../models/airport.entity';
import { Flight } from '../../models/flight.entity';

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
