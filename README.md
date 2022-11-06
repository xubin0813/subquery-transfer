topic:

a basic demo to index polkadot main network.

requirement:
get account transfer event list, where block number > 10159783.
we can filter the transfer event by the specified method "balances.Transfer".


what you need:
1. polkadot main network.
https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpolkadot.api.onfinality.io%2Fpublic-ws#/explorer

2. an data index  framework.
SubQuery
https://explorer.subquery.network/


 
what expect:
sample table schema: 

id	block_number	from_account	to_account	balance_change	timestamp