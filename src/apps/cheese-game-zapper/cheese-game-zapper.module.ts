import { Register } from '~app-toolkit/decorators';
import { AbstractApp } from '~app/app.dynamic-module';

import { CheeseGameZapperAppDefinition, CHEESE_GAME_ZAPPER_DEFINITION } from './cheese-game-zapper.definition';
import { CheeseGameZapperContractFactory } from './contracts';
import { HarmonyCheeseGameZapperSCHEEZTokenFetcher } from './harmony/cheese-game-zapper.sCHEEZ.token-fetcher';
import { HarmonyCheeseGameZapperVCHEEZTokenFetcher } from './harmony/cheese-game-zapper.vCHEEZ.token-fetcher';
import { HarmonyCheeseGameZapperWsCHEEZTokenFetcher } from './harmony/cheese-game-zapper.wsCHEEZ.token-fetcher';

@Register.AppModule({
  appId: CHEESE_GAME_ZAPPER_DEFINITION.id,
  providers: [
    CheeseGameZapperAppDefinition,
    CheeseGameZapperContractFactory,
    HarmonyCheeseGameZapperSCHEEZTokenFetcher,
    HarmonyCheeseGameZapperVCHEEZTokenFetcher,
    HarmonyCheeseGameZapperWsCHEEZTokenFetcher,
  ],
})
export class CheeseGameZapperAppModule extends AbstractApp() {}
