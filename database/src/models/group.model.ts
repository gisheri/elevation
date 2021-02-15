import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Group extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
  })
  campus?: string;

  @property({
    type: 'string',
  })
  demographic?: string;

  @property({
    type: 'string',
  })
  group_type?: string;

  @property({
    type: 'string',
  })
  meeting_date?: string;

  @property({
    type: 'number',
  })
  zip_code?: number;

  @property({
    type: 'array',
    itemType: 'object',
  })
  additionalProp1?: object[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Group>) {
    super(data);
  }
}

export interface GroupRelations {
  // describe navigational properties here
}

export type GroupWithRelations = Group & GroupRelations;
