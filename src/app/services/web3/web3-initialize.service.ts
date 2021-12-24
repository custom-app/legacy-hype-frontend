import {Injectable} from '@angular/core';
import Web3 from 'web3';
// import Web4 from '@cryptonteam/web4';
import Onboard from "bnc-onboard";
import {environment} from "@env/environment";
import {IAccount} from "@models/interfaces/account.interface";
import {BehaviorSubject} from "rxjs";
// @ts-ignore
import abi from '../../../abi'
import {IContract} from "@models/interfaces/contracts.interase";

declare let window: any;

@Injectable({
    providedIn: 'root'
})
export class Web3InitializeService {
    hcOnboard: any;
    account$: BehaviorSubject<IAccount> = new BehaviorSubject<IAccount>({});

    busd_contract$: BehaviorSubject<IContract> = new BehaviorSubject<IContract>({});
    hype_contract$: BehaviorSubject<IContract> = new BehaviorSubject<IContract>({});
    buy_contract$: BehaviorSubject<IContract> = new BehaviorSubject<IContract>({});

    hype_balance$: BehaviorSubject<any> = new BehaviorSubject<any>({});


    private web3!: Web3;

    constructor() {
    }

    onboard() {
        const BLOCKNATIVE_KEY = environment.BLOCKNATIVE_KEY;
        const NETWORK_ID = environment.NETWORK_ID;

        const wallets = [
            {walletName: "metamask", preferred: true},
            {
                walletName: "walletConnect",
                infuraKey: 'dc31440a68374455bfade402dcbaf1ab',
                preferred: true,
            },
        ];
        this.hcOnboard = Onboard({
            dappId: BLOCKNATIVE_KEY,
            networkId: +NETWORK_ID,
            hideBranding: true,
            darkMode: true,
            walletSelect: {
                wallets: wallets,
            },
        });
    }

    async initialize() {

        if (!this.hcOnboard) await this.onboard();

        let selectStatus = await this.hcOnboard.walletSelect();

        if (selectStatus) {
            let checkStatus = await this.hcOnboard.walletCheck();
            if (!checkStatus) {
                await this.hcOnboard.walletReset();
                return console.log(404, 'Connection check fail');
            }

            let walletData = await this.hcOnboard.getState();

            let account = {
                address: walletData.address,
                netId: walletData.network
                // netType: getChainTypeById(walletData.network),
            };
            this.account$.next(account);
            this.web3 = new Web3(window.ethereum)

            // web4 = new Web4();
            // await web4.setProvider(window.ethereum, walletData.address);
        }
    }

    async connect() {
        await this.initialize();
        await this.initEthContracts();
        await this.getContractsData();
    }

    async initEthContracts() {
        await Promise.all([
            this.initBUSDContract(),
            this.initHYPEContract(),
            this.initBUYContract()
        ])
    }

    async initWeb3Contract(abi: any, address: any) {
        try {
            return await new this.web3.eth.Contract(abi, address, {from: this.account.address});
        } catch (e) {
            return console.log(500, '', e.message);
        }
    };

    async initBUSDContract() {
        const [abs, address] = [abi.BUSD_CONTRACT, environment.BUSD_CONTRACT];
        const instance = await this.initWeb3Contract(abs, address);

        const payload = {
            address,
            instance,
        };
        this.busd_contract$.next(payload);
    }

    async initHYPEContract() {
        const [abs, address] = [abi.HYPE_CONTRACT, environment.HYPE_CONTRACT];
        const instance = await this.initWeb3Contract(abs, address);

        const payload = {
            address,
            instance,
        };
        this.hype_contract$.next(payload);
    }

    async initBUYContract() {
        const [abs, address] = [abi.BUY_CONTRACT, environment.BUY_CONTRACT];
        const instance = await this.initWeb3Contract(abs, address);

        const payload = {
            address,
            instance,
        };
        this.buy_contract$.next(payload);
        // commit('setPublicRound', payload);
    }

    async getContractsData() {
        await Promise.all([
            this.setHYPEBalance(this.hype_contract.instance, this.account.address)
        ]);
    }

    async setHYPEBalance(instance: any, address: any) {
        try {
            let HYPEBalance = await instance.methods.balanceOf(address).call();
            this.hype_balance$.next(Math.round(HYPEBalance * 10e-5 * 10e-5 * 10e-11));
        } catch (e) {
            console.log(e);
        }
    }

    get account(): IAccount {
        return this.account$.value;
    }

    get busd_contract(): IContract {
        return this.busd_contract$.value;
    }

    get hype_contract(): IContract {
        return this.hype_contract$.value;
    }

    get buy_contract(): IContract {
        return this.buy_contract$.value;
    }

    get hype_balance(): any {
        return this.hype_balance$.value;
    }
}
