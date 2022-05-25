import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { AppAction, AppTag, GroupType } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const CHEESE_GAME_ZAPPER_DEFINITION = appDefinition({
  id: 'cheese-game-zapper',
  name: 'Cheese Game Zapper',
  description: 'An app to track the various tokens associated with Cheese Game',
  url: 'cheese.game',

  groups: {
    sCheez: {
      id: 'sCHEEZ',
      type: GroupType.TOKEN,
      label: 'sCHEEZ',
    },

    wsCheez: {
      id: 'wsCHEEZ',
      type: GroupType.TOKEN,
      label: 'wsCHEEZ',
    },

    vCheez: {
      id: 'vCHEEZ',
      type: GroupType.TOKEN,
      label: 'vCHEEZ',
    },
  },

  tags: [AppTag.GAMING],
  keywords: [],
  links: {},

  supportedNetworks: {
    [Network.HARMONY_MAINNET]: [AppAction.VIEW],
  },

  primaryColor: '#fff',
});

@Register.AppDefinition(CHEESE_GAME_ZAPPER_DEFINITION.id)
export class CheeseGameZapperAppDefinition extends AppDefinition {
  constructor() {
    super(CHEESE_GAME_ZAPPER_DEFINITION);
  }
}

export default CHEESE_GAME_ZAPPER_DEFINITION;
