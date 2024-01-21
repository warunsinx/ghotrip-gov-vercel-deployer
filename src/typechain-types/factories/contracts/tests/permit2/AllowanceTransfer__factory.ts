/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  AllowanceTransfer,
  AllowanceTransferInterface,
} from "../../../../contracts/tests/permit2/AllowanceTransfer";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "AllowanceExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "ExcessiveInvalidation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidContractSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidNonce",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSigner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "signatureDeadline",
        type: "uint256",
      },
    ],
    name: "SignatureExpired",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "amount",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "expiration",
        type: "uint48",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "Lockdown",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "newNonce",
        type: "uint48",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "oldNonce",
        type: "uint48",
      },
    ],
    name: "NonceInvalidation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "amount",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "expiration",
        type: "uint48",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "nonce",
        type: "uint48",
      },
    ],
    name: "Permit",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint160",
        name: "amount",
        type: "uint160",
      },
      {
        internalType: "uint48",
        name: "expiration",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "nonce",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "amount",
        type: "uint160",
      },
      {
        internalType: "uint48",
        name: "expiration",
        type: "uint48",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "newNonce",
        type: "uint48",
      },
    ],
    name: "invalidateNonces",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
        ],
        internalType: "struct IAllowanceTransfer.TokenSpenderPair[]",
        name: "approvals",
        type: "tuple[]",
      },
    ],
    name: "lockdown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint160",
                name: "amount",
                type: "uint160",
              },
              {
                internalType: "uint48",
                name: "expiration",
                type: "uint48",
              },
              {
                internalType: "uint48",
                name: "nonce",
                type: "uint48",
              },
            ],
            internalType: "struct IAllowanceTransfer.PermitDetails[]",
            name: "details",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "sigDeadline",
            type: "uint256",
          },
        ],
        internalType: "struct IAllowanceTransfer.PermitBatch",
        name: "permitBatch",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint160",
                name: "amount",
                type: "uint160",
              },
              {
                internalType: "uint48",
                name: "expiration",
                type: "uint48",
              },
              {
                internalType: "uint48",
                name: "nonce",
                type: "uint48",
              },
            ],
            internalType: "struct IAllowanceTransfer.PermitDetails",
            name: "details",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "sigDeadline",
            type: "uint256",
          },
        ],
        internalType: "struct IAllowanceTransfer.PermitSingle",
        name: "permitSingle",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint160",
            name: "amount",
            type: "uint160",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
        ],
        internalType: "struct IAllowanceTransfer.AllowanceTransferDetails[]",
        name: "transferDetails",
        type: "tuple[]",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "amount",
        type: "uint160",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c06040523462000039575b6200001562000048565b604051611b57620001c28239608051816111a2015260a0518161117b0152611b5790f35b62000042600080fd5b6200000b565b6200005262000054565b565b4660a052620000a47f9ac997416e8ff9d2ff6bebeb7149f65cdae5e32e2b90440b566bb3044041d36a7f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86662000174565b608052565b620000bf90620000c2906001600160a01b031682565b90565b6001600160a01b031690565b620000bf90620000a9565b620000bf90620000ce565b9052565b620000e490620000c2565b6200012462000052946200011d60609498979562000116608086019a6000870152565b6020850152565b6040830152565b0190620000e8565b50634e487b7160e01b600052604160045260246000fd5b90601f01601f191681019081106001600160401b038211176200016557604052565b6200016f6200012c565b604052565b4691620001a9916200019c6200018a30620000d9565b604051958694602086019485620000f3565b9081038252038262000143565b620001bd620001b6825190565b9160200190565b209056fe60806040526004361015610018575b610016600080fd5b005b60003560e01c80630d58b1db146100cc5780632a2d80d1146100c35780632b67b570146100ba5780633644e515146100b157806336c78516146100a857806365d9723c1461009f57806387517c4514610096578063927da1051461008d5763cc53287f0361000e5761008861096b565b61000e565b506100886108a1565b50610088610740565b506100886106ce565b50610088610665565b506100886105e1565b506100886105a7565b506100886104d0565b50610088610177565b600080fd5b909182601f83011215610123575b602082359267ffffffffffffffff8411610116575b01926080830284011161010c57565b610114600080fd5b565b61011e600080fd5b6100fd565b61012b600080fd5b6100e8565b906101599160208183031261016a575b80359067ffffffffffffffff821161015d575b016100da565b9091565b610165600080fd5b610153565b610172600080fd5b610140565b503461019b575b61019261018c366004610130565b90610c2b565b604051005b0390f35b6101a3600080fd5b61017e565b6001600160a01b031690565b90565b6001600160a01b0381165b036100d557565b90503590610114826101b7565b50634e487b7160e01b600052604160045260246000fd5b90601f01601f1916810190811067ffffffffffffffff82111761020f57604052565b6102176101d6565b604052565b9061011461022960405190565b92836101ed565b6020809167ffffffffffffffff811161024857020190565b6102506101d6565b020190565b6001600160a01b0381166101c2565b9050359061011482610255565b65ffffffffffff81166101c2565b9050359061011482610271565b9190916080818403126102ec575b6102e66102a7608061021c565b9360006102b482856101c9565b9086015260206102c682828601610264565b9086015260406102d88282860161027f565b90860152606080930161027f565b90830152565b6102f4600080fd5b61029a565b9092919261030e61030982610230565b61021c565b93818552608060208601920283019281841161034e575b915b8383106103345750505050565b6020608091610343848661028c565b815201920191610327565b610356600080fd5b610325565b906101b49181601f82011215610377575b6020813591016102f9565b61037f600080fd5b61036c565b806101c2565b9050359061011482610384565b9190916060818403126103fb575b6102e66103b2606061021c565b936103d081843567ffffffffffffffff81116103ee575b850161035b565b855260206103e0828583016101c9565b90860152604080930161038a565b6103f6600080fd5b6103c9565b610403600080fd5b6103a5565b909182601f83011215610444575b602082359267ffffffffffffffff8411610437575b01928284011161010c57565b61043f600080fd5b61042b565b61044c600080fd5b610416565b90916060828403126104c3575b61015961046b84846101c9565b9361048c81602086013567ffffffffffffffff81116104b6575b8601610397565b9360408101359067ffffffffffffffff82116104a9575b01610408565b6104b1600080fd5b6104a3565b6104be600080fd5b610485565b6104cb600080fd5b61045e565b50346104ee575b6101926104e5366004610451565b92919091610afd565b6104f6600080fd5b6104d7565b91906105419060c084820312610548575b610516606061021c565b936000610523838361028c565b9086015261053482608083016101c9565b602086015260a00161038a565b6040830152565b610550600080fd5b61050c565b90916101008284031261059a575b61015961057084846101c9565b9361057e81602086016104fb565b9360e08101359067ffffffffffffffff82116104a95701610408565b6105a2600080fd5b610563565b50346105c5575b6101926105bc366004610555565b92919091610a29565b6105cd600080fd5b6105ae565b600091031261010c57565b9052565b503461060e575b6105f33660046105d2565b6101976105fe611179565b6040519182918290815260200190565b610616600080fd5b6105e8565b608081830312610658575b61063082826101c9565b926101b461064184602085016101c9565b9361064f8160408601610264565b936060016101c9565b610660600080fd5b610626565b5034610683575b61019261067a36600461061b565b92919091610b95565b61068b600080fd5b61066c565b90916060828403126106c1575b6101b46106aa84846101c9565b936106b881602086016101c9565b9360400161027f565b6106c9600080fd5b61069d565b50346106e9575b6101926106e3366004610690565b91610fc0565b6106f1600080fd5b6106d5565b608081830312610733575b61070b82826101c9565b926101b461071c84602085016101c9565b9361072a8160408601610264565b9360600161027f565b61073b600080fd5b610701565b503461075e575b6101926107553660046106f6565b929190916109b2565b610766600080fd5b610747565b909160608284031261079c575b6101b461078584846101c9565b9361079381602086016101c9565b936040016101c9565b6107a4600080fd5b610778565b6101b4906101a8906001600160a01b031682565b6101b4906107a9565b6101b4906107bd565b906107d9906107c6565b600052602052604060002090565b6101b4906101a8565b6101b490546107e7565b6101b49060a01c5b65ffffffffffff1690565b6101b490546107fa565b6101b49060d01c610802565b6101b49054610817565b61084592916108406108409260006107cf565b6107cf565b61084e816107f0565b916101b4600061085d8461080d565b9301610823565b6001600160a01b0390911681526060810193926101149290916040916108939065ffffffffffff166020830152565b019065ffffffffffff169052565b50346108cf575b6101976108bf6108b936600461076b565b9161082d565b6040519193915b93849384610864565b6108d7600080fd5b6108a8565b909182601f8301121561091b575b602082359267ffffffffffffffff841161090e575b01926040830284011161010c57565b610916600080fd5b6108ff565b610923600080fd5b6108ea565b906101599160208183031261095e575b80359067ffffffffffffffff8211610951575b016108dc565b610959600080fd5b61094b565b610966600080fd5b610938565b5034610986575b610192610980366004610928565b90610e94565b61098e600080fd5b610972565b6001600160a01b03909116815260408101929161011491602090610893565b9091926000906109d881866109d36101b4886108408961084033809b6107cf565b611363565b610a0e610a08610a087fda9fa7c1b00402c17d0161b249b1ab8bbec047c5a52207b9c112deffd817036b946107c6565b946107c6565b94610a24610a1b60405190565b92839283610993565b0390a4565b6040820194939192909142610a46610a426101b4895190565b9190565b11610a8557610114949550610a6e918391610a68610a638761144d565b6112a5565b9161184c565b81516020909201516001600160a01b0316916110a7565b610aad610a90875190565b60405163cd21db4f60e01b81529182916004830190815260200190565b0390fd5b6101b46101b46101b49290565b50634e487b7160e01b600052603260045260246000fd5b9060208091610ae2845190565b811015610af0575b02010190565b610af8610abe565b610aea565b919092426040850190610b14610a426101b4845190565b11610b8b5750610b2c918391610a68610a638761156e565b60208201516001600160a01b031682515190939092600091610b4d83610ab1565b855b811015610b8257610b7b81610b758988610b6f610b4f968a8a0151610ad5565b516110a7565b60010190565b9050610b4d565b50945050505050565b51610aad90610a90565b90610114939291610d3c565b91608091811015610bb157020190565b610250610abe565b919091608081840312610c13575b6102e6610bd4608061021c565b936000610be182856101c9565b908601526020610bf3828286016101c9565b908601526040610c0582828601610264565b9086015260608093016101c9565b610c1b600080fd5b610bc7565b6101b4903690610bb9565b908091600093610c3a85610ab1565b845b811015610cb757610cb081610b75610c60610c5b610c3c958989610ba1565b610c20565b808a01516001600160a01b031690610c8260208201516001600160a01b031690565b610caa6060610c9b60408501516001600160a01b031690565b9301516001600160a01b031690565b92610d3c565b9050610c3a565b509350505050565b6101b46101b46101b49265ffffffffffff1690565b6105dd90610cbf565b6020810192916101149190610cd4565b6101b49081906001600160a01b031681565b6101a86101b46101b49290565b906001600160a01b03905b9181191691161790565b90610d316101b4610d38926107a9565b8254610d0c565b9055565b600093610d5a6101b4610d5383610840868a6107cf565b33906107cf565b9442950194610d73610a42610d6e8861080d565b610cbf565b11610e2b57610d89610d84866107f0565b610ced565b94610d9a6001600160a01b03610ced565b8603610dbf575b506101149450610db3610db9916107c6565b93610ced565b92611acb565b85610dc986610ced565b1115610df657610aad86610ddc60405190565b63f96fb07160e01b81529182916004830190815260200190565b610db991610e24610db392610e1e88610e116101149b610cff565b036001600160a01b031690565b90610d21565b9150610da1565b610aad610e378661080d565b604051636c0d979760e11b815291829160048301610cdd565b91604091811015610bb157020190565b356101b4816101b7565b6001600160a01b039091168152604081019291610114916020905b01906001600160a01b03169052565b909190338392600090610ea682610ab1565b855b811015610b8257610f4b81610ecb85610ec5610ea8958c8b610e50565b01610e60565b610edb6020610ec5848d8c610e50565b610f018888610efb8461084087610840610ef486610cff565b96866107cf565b01610d21565b7f89b1add15eff56b3dfe299ad94e01f2b52fbcb80ae1a3baea6ae8c04cb2b98a490610f2c896107c6565b92610f42610f3960405190565b92839283610e6a565b0390a260010190565b9050610ea6565b6108026101b46101b49261ffff1690565b906001600160d01b03199060d01b610d17565b6108026101b46101b49265ffffffffffff1690565b90610f9b6101b4610d3892610f76565b8254610f63565b65ffffffffffff909116815260408101929161011491602090610893565b336000610fdd81610fd786610840878188866107cf565b01610823565b9065ffffffffffff821665ffffffffffff871611156110955765ffffffffffff8287031661101b61100f61ffff610f52565b9165ffffffffffff1690565b1161108357858161103787610840886108408961103d986107cf565b01610f8b565b61106d610a08610a087f55eb90d810e1700b35a8e7e25395ff7f2b2259abd7415ca2284dfb1c246418f3946107c6565b94610a2461107a60405190565b92839283610fa2565b604051631269ad1360e11b8152600490fd5b604051633ab3447f60e11b8152600490fd5b606081015191929165ffffffffffff16926110c982516001600160a01b031690565b916110f160406110e360208401516001600160a01b031690565b92015165ffffffffffff1690565b90600061111461110c6101b488610840896108408a886107cf565b918201610823565b61112565ffffffffffff891661100f565b0361109557868383611136936112e5565b610a2461116f6111696111697fc6a377bfc4eb120024a8ac08eef205be16b817020812c73223e81d1bdb9708ec966107c6565b966107c6565b966108c660405190565b7f000000000000000000000000000000000000000000000000000000000000000046036111c4577f000000000000000000000000000000000000000000000000000000000000000090565b6101b47f9ac997416e8ff9d2ff6bebeb7149f65cdae5e32e2b90440b566bb3044041d36a7f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a866611234565b610e856101149461054160609498979561122d608086019a6000870152565b6020850152565b469161126391611257611246306107c6565b60405195869460208601948561120e565b908103825203826101ed565b61127561126e825190565b9160200190565b2090565b0190565b602080939261129f61129a6112799461190160f01b815260020190565b918252565b01918252565b611263611257916112b4600090565b506112bd611179565b60405193849260208401928361127d565b6108026101b46101b49290565b6101b46000610ab1565b929061130e610d3893926112f7600090565b5061130260016112ce565b0165ffffffffffff1690565b9161131a6101b46112db565b61132382610cbf565b036113325750611332426112ce565b906113cf565b9065ffffffffffff60a01b9060a01b610d17565b9061135c6101b4610d3892610f76565b8254611338565b61139861011493600090611376826112ce565b65ffffffffffff82160361139d575061138e426112ce565b925b01918261134c565b610d21565b92611390565b6113b06101b46101b49290565b60ff1690565b6101b4906113ca610a426101b49460ff1690565b901b90565b919061140f6114056113ff6113ef611416956113e9600090565b50610cbf565b6113f960d06113a3565b906113b6565b92610cbf565b6113f960a06113a3565b1791610ced565b1790565b6114496101149461143960609498979561122d608086019a6000870152565b6001600160a01b03166040830152565b0152565b61126361145d600083015161169b565b7ff3841cd1ff0085026a6327b620b67997ce40f282c88a8e905a7a5626e310f3d06112576114a0604061149a60208801516001600160a01b031690565b96015190565b60405195869460208601948561141a565b9061129a61030983610230565b369037565b906101146114d96114d3846114b1565b93610230565b601f1901602084016114be565b50634e487b7160e01b600052601160045260246000fd5b600190600019811461150d570190565b6112796114e6565b9061152f611528611524845190565b9290565b9260200190565b9060005b8181106115405750505090565b90919261155d6115566001928651815260200190565b9460200190565b929101611533565b6101b491611515565b8051519061157b826114c3565b9060009361158885610ab1565b845b8110156115ca576115c3816115be6115b16115ab61158a958b890151610ad5565b5161169b565b6115bb8389610ad5565b52565b6114fd565b9050611588565b5093509150611263907faf1b0d30d2cab0380e68f0689007e3254993c596f2fdd0aaa7f4d04f794408639061161161160160405190565b8092611257602083019182611565565b61161c61126e825190565b20906112576114a0604061149a60208801516001600160a01b031690565b80516001600160a01b03168252610114919060609081906020818101516001600160a01b03169085015260408181015165ffffffffffff1690850152015165ffffffffffff16910152565b90815260a081019291610114916020019061163a565b611263611257916116aa600090565b507f65626cad6cb96493bf6f5ebea28756c966f023ab9e8a83a7101849d5573b3678604051938492602084019283611685565b6001600160e01b031981166101c2565b90505190610114826116dd565b906101b491602081830312156116ed57611712600080fd5b6116ed565b90826000939282370152565b91906117418161173a816112799560209181520190565b8095611717565b601f01601f191690565b9081526040602082018190526101b493910191611723565b506040513d6000823e3d90fd5b91906101b490604084820312611794575b61178b818561038a565b9360200161038a565b61179c600080fd5b611781565b6101b46001600160ff1b03610ab1565b6101b4906117c5610a426101b49460ff1690565b901c90565b6101b490610ab1565b60ff9081169116019060ff82116117e657565b6101146114e6565b91600191811015610bb157020190565b6113b06101b46101b49260ff1690565b6101b49060f81c6117fe565b61144961011494610541606094989795611839608086019a6000870152565b60ff166020850152565b6101b490610cff565b6000939290919084843b611862610a4283610ab1565b036119c75785929190826118766041610ab1565b81036119405750506118cd846118bf6118ba6118ac6118998760209a0185611770565b9490976118a66040610ab1565b916117ee565b356001600160f81b03191690565b61180e565b935b6040519485948561181a565b838052039060015afa15611933575b81516118ec906101a89093611843565b6001600160a01b03831614611921576001600160a01b0390811691160361190f57565b604051632057875960e21b8152600490fd5b604051638baa579f60e01b8152600490fd5b61193b611763565b6118dc565b90949350611951610a426040610ab1565b036119b55761196b86936118cd9360209650810190611770565b9290926119af61199f61199a6119956119826117a1565b85169461198f60ff6113a3565b906117b1565b6117ca565b6113a3565b6119a9601b6113a3565b906117d3565b936118c1565b604051634be6321b60e01b8152600490fd5b50919350611a016119e16119dc6020956107c6565b6107c6565b91611a0c631626ba7e916119f460405190565b9788968795869560e01b90565b85526004850161174b565b03915afa908115611a7b575b600091611a4d575b50630b135d3f60e11b906001600160e01b03191603611a3b57565b604051632c19a72f60e21b8152600490fd5b611a6e915060203d8111611a74575b611a6681836101ed565b8101906116fa565b38611a20565b503d611a5c565b611a83611763565b611a18565b15611a8f57565b60405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606490fd5b6000918260649261011496602096611ae1600090565b506040516323b872dd60e01b81526001600160a01b0395861660048201529416602485015260448401525af13d15601f3d11600160005114161716611a8856fea2646970667358221220def7b3a831d9bbcc7a765ae4ee880b39eb1274d1c1f5780466c69c8a339b4f3564736f6c63430008110033";

type AllowanceTransferConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AllowanceTransferConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AllowanceTransfer__factory extends ContractFactory {
  constructor(...args: AllowanceTransferConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      AllowanceTransfer & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AllowanceTransfer__factory {
    return super.connect(runner) as AllowanceTransfer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AllowanceTransferInterface {
    return new Interface(_abi) as AllowanceTransferInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AllowanceTransfer {
    return new Contract(address, _abi, runner) as unknown as AllowanceTransfer;
  }
}