import { getAddress } from "viem";
import { SerializedFarmConfig } from '@pancakeswap/farms'
import { coreTokens } from '@pancakeswap/tokens'

const priceHelperLps: SerializedFarmConfig[] = [
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x5ebAE3A840fF34B107D637c8Ed07C3D1D2017178',
        token: coreTokens.wcore_old,
        quoteToken: coreTokens.usdt,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xFEE8F527e3909b3f16CbdA437DA6876dEeA132Ca',
        token: coreTokens.ice,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x876C62C8C94ca04aFE45a9Ef9DB39799D3CddF34',
        token: coreTokens.score,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x2d32d80bbefff482b0c58332590e7afe6c436979',
        token: coreTokens.aicore,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xcadda376b2840094cf6efa16a4c8483d6064adee',
        token: coreTokens.bcore,
        quoteToken: coreTokens.usdt,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xb737cb83f5e7c365b95e54517f37a67eb3de88a6',
        token: coreTokens.kishu,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x087E0c6547f9dA7F89AFDd8e4b08541959Bd4462',
        token: coreTokens.gte,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x1609775ef02856E4fA83BDa833e8975cA1EA091F',
        token: coreTokens.word,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x4203434560d2d995278f71e1f5c165424c7febe5',
        token: coreTokens.hobo,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xf73DC0399A9aEA8549278fbd9c074D5E5D1D244B',
        token: coreTokens.coreshiba,
        quoteToken: coreTokens.usdt,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x6a1a2b2af9683d810b7660b9a8addca19f466f17',
        token: coreTokens.usdtrain,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xe9aF781e080424F93a05a297BaDeC5caA2EAE018',
        token: coreTokens.fsxm,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x6932543112c90dfc265afb2918a6f2490deaf91f',
        token: coreTokens.royale,
        quoteToken: coreTokens.score,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x6932543112c90dfc265afb2918a6f2490deaf91f',
        token: coreTokens.royale,
        quoteToken: coreTokens.score,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x30d84a940a7209c4c63fc4636afdf3fe52591ec2',
        token: coreTokens.cfee,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xf9020ac12ed1163b0fd8c47910cc0e60051e4cc7',
        token: coreTokens.btv,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x00cfc5acb409c962737999c2d3951fda09eda00b',
        token: coreTokens.woof,
        quoteToken: coreTokens.score,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x7c2a08db0f8d3976a336298a5d14962a9e67adfc',
        token: coreTokens.miidas,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xae83e154f83b1b2328e6c80751a0353d0bb4b16c',
        token: coreTokens.block,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xb7f513A716D78a4148d02C1b4Ec33E60e5887AB4',
        token: coreTokens.ucore,
        quoteToken: coreTokens.ice,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x78b3478A465194a9c69021A2FA9774764f3d8483',
        token: coreTokens.bcore_new,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x6ec0aE0578C3AF81e28fa0b43908b02d95118CBE',
        token: coreTokens.crystal,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xC899dE5B1D2Fc5c14a55CA5601B7aF1FF73B6DeA',
        token: coreTokens.maxi,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x1870902226f4a5aa664ffbd0b96916ed380ecdab',
        token: coreTokens.cmct,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x8d899600218dc49ed196a5ddb2298a0c28155780',
        token: coreTokens.but,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x148921045bd2b38ab7260bf1c5cfb6d7b049963e',
        token: coreTokens.bliz,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x00d57cdbf480a8c1979e2a2393831d6409749b21',
        token: coreTokens.asi,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xd779221387de65c4e6b4ce03b5a8f62cf2b65581',
        token: coreTokens.kigu,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x34e0ca6fea0c0e5846a2e88d9c529673a771efd5',
        token: coreTokens.musk,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xa491173573F5a2198EeF7cC7091B3D64E47dAB0A',
        token: coreTokens.hice,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x95fC2b57c4d12e50d0131319EE974be0ac6473A1',
        token: coreTokens.kice,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x7fb2d9168cc4c7709f9C4fc9eFacC32ed5F21B7b',
        token: coreTokens.cBTC,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x3d253ef2209c3C30a1817993Af8407e33A6B49e1',
        token: coreTokens.lung,
        quoteToken: coreTokens.wcore_old,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xbc9a2b3Ca0F918C4EdD6915fc196485464abd0aF',
        token: coreTokens.gator,
        quoteToken: coreTokens.wcore_old,
    },
].map((p) => ({
    ...p,
    token: p.token.serialize,
    quoteToken: p.quoteToken.serialize,
    lpAddress: getAddress(p.lpAddress),
}))

export default priceHelperLps