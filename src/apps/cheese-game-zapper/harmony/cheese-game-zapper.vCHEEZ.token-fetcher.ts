import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { AppTokenPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { CHEESE_GAME_ZAPPER_DEFINITION } from '../cheese-game-zapper.definition';
import { CheeseGameZapperContractFactory } from '../contracts';

const appId = CHEESE_GAME_ZAPPER_DEFINITION.id;
const groupId = CHEESE_GAME_ZAPPER_DEFINITION.groups.vCheez.id;
const network = Network.HARMONY_MAINNET;

@Register.TokenPositionFetcher({ appId, groupId, network })
export class HarmonyCheeseGameZapperVCheezTokenFetcher implements PositionFetcher<AppTokenPosition> {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(CheeseGameZapperContractFactory)
    private readonly cheeseGameZapperContractFactory: CheeseGameZapperContractFactory,
  ) {}

  async getPositions() {
    return [];
  }
}
