/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace IPBMTokenManager {
  export type PBMTokenStruct = {
    name: string;
    faceValue: BigNumberish;
    expiry: BigNumberish;
    uri: string;
    totalSupply: BigNumberish;
  };

  export type PBMTokenStructOutput = [
    name: string,
    faceValue: bigint,
    expiry: bigint,
    uri: string,
    totalSupply: bigint
  ] & {
    name: string;
    faceValue: bigint;
    expiry: bigint;
    uri: string;
    totalSupply: bigint;
  };
}

export interface IPBMTokenManagerInterface extends Interface {
  getFunction(
    nameOrSignature: "createPBMTokenType" | "getTokenDetails"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "NewPBMTypeCreated"): EventFragment;

  encodeFunctionData(
    functionFragment: "createPBMTokenType",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenDetails",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "createPBMTokenType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenDetails",
    data: BytesLike
  ): Result;
}

export namespace NewPBMTypeCreatedEvent {
  export type InputTuple = [
    tokenId: BigNumberish,
    tokenName: string,
    amount: BigNumberish,
    expiry: BigNumberish,
    creator: AddressLike
  ];
  export type OutputTuple = [
    tokenId: bigint,
    tokenName: string,
    amount: bigint,
    expiry: bigint,
    creator: string
  ];
  export interface OutputObject {
    tokenId: bigint;
    tokenName: string;
    amount: bigint;
    expiry: bigint;
    creator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IPBMTokenManager extends BaseContract {
  connect(runner?: ContractRunner | null): IPBMTokenManager;
  waitForDeployment(): Promise<this>;

  interface: IPBMTokenManagerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createPBMTokenType: TypedContractMethod<
    [
      _name: string,
      _faceValue: BigNumberish,
      _tokenExpiry: BigNumberish,
      _tokenURI: string
    ],
    [bigint],
    "nonpayable"
  >;

  getTokenDetails: TypedContractMethod<
    [tokenId: BigNumberish],
    [IPBMTokenManager.PBMTokenStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createPBMTokenType"
  ): TypedContractMethod<
    [
      _name: string,
      _faceValue: BigNumberish,
      _tokenExpiry: BigNumberish,
      _tokenURI: string
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getTokenDetails"
  ): TypedContractMethod<
    [tokenId: BigNumberish],
    [IPBMTokenManager.PBMTokenStructOutput],
    "view"
  >;

  getEvent(
    key: "NewPBMTypeCreated"
  ): TypedContractEvent<
    NewPBMTypeCreatedEvent.InputTuple,
    NewPBMTypeCreatedEvent.OutputTuple,
    NewPBMTypeCreatedEvent.OutputObject
  >;

  filters: {
    "NewPBMTypeCreated(uint256,string,uint256,uint256,address)": TypedContractEvent<
      NewPBMTypeCreatedEvent.InputTuple,
      NewPBMTypeCreatedEvent.OutputTuple,
      NewPBMTypeCreatedEvent.OutputObject
    >;
    NewPBMTypeCreated: TypedContractEvent<
      NewPBMTypeCreatedEvent.InputTuple,
      NewPBMTypeCreatedEvent.OutputTuple,
      NewPBMTypeCreatedEvent.OutputObject
    >;
  };
}