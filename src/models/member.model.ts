import {Entity, model, property} from '@loopback/repository';

@model()
export class Member extends Entity {

  constructor(data?: Partial<Member>) {
    super(data);
  }

  @property({
    type:'number',
    id:true,
    generated: true,
  })
  id?:number;

  @property({
    type:'string',
    require:true,
  })
  name:string;

  @property({
    type:'string',
    require:true,
  })
  passw:string;

  @property({
    type:'number',
    require:true,
  })
  admin:number;


}

export interface MemberRelations {
  // describe navigational properties here
}

export type MemberWithRelations = Member & MemberRelations;
