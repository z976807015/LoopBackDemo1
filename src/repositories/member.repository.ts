import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MemberDataSource} from '../datasources';
import {Member, MemberRelations} from '../models';

export class MemberRepository extends DefaultCrudRepository<
  Member,
  typeof Member.prototype.id,
  MemberRelations
> {
  constructor(
    @inject('datasources.member') dataSource: MemberDataSource,
  ) {
    super(Member, dataSource);
  }
}
