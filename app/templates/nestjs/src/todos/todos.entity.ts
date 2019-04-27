import { Column, Model, Table } from 'sequelize-typescript';
import { BaseEntity } from 'src/shared/base.entity';

@Table
export class Todo extends BaseEntity<Todo> {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;

  @Column
  testColumn: string;
}
