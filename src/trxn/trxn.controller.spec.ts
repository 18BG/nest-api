import { Test, TestingModule } from '@nestjs/testing';
import { TrxnController } from './trxn.controller';

describe('TrxnController', () => {
  let controller: TrxnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrxnController],
    }).compile();

    controller = module.get<TrxnController>(TrxnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
