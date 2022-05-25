import { Injectable, Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { ContractFactory } from '~contract/contracts';
import { Network } from '~types/network.interface';

import { SCheez__factory } from './ethers';
import { VCheez__factory } from './ethers';
import { WsCheez__factory } from './ethers';

// eslint-disable-next-line
type ContractOpts = { address: string; network: Network };

@Injectable()
export class CheeseGameZapperContractFactory extends ContractFactory {
  constructor(@Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit) {
    super((network: Network) => appToolkit.getNetworkProvider(network));
  }

  sCheez({ address, network }: ContractOpts) {
    return SCheez__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  vCheez({ address, network }: ContractOpts) {
    return VCheez__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  wsCheez({ address, network }: ContractOpts) {
    return WsCheez__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
}

export type { SCheez } from './ethers';
export type { VCheez } from './ethers';
export type { WsCheez } from './ethers';
