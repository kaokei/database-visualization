import { Prisma, Server } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ServerService {
  constructor(private prisma: PrismaService) {}

  create(createServerDto: Prisma.ServerCreateInput): Promise<Server> {
    return this.prisma.server.create({ data: createServerDto });
  }

  update(params: {
    where: Prisma.ServerWhereUniqueInput;
    data: Prisma.ServerUpdateInput;
  }): Promise<Server> {
    const { where, data } = params;
    return this.prisma.server.update({
      where,
      data,
    });
  }

  findOne(where: Prisma.ServerWhereUniqueInput): Promise<Server | null> {
    return this.prisma.server.findUnique({
      where,
    });
  }

  findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ServerWhereUniqueInput;
    where?: Prisma.ServerWhereInput;
    orderBy?: Prisma.ServerOrderByWithRelationInput;
  }): Promise<Server[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.server.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findAll(where: Prisma.ServerWhereInput): Promise<Server[]> {
    return this.prisma.server.findMany({ where });
  }

  remove(where: Prisma.ServerWhereUniqueInput): Promise<Server> {
    return this.prisma.server.delete({ where });
  }
}
