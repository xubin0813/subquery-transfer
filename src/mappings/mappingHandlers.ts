import {
  SubstrateExtrinsic,
  SubstrateEvent,
  SubstrateBlock,
} from "@subql/types";
import { Transfer } from "../types";
import { Balance, AccountId } from "@polkadot/types/interfaces";


export async function handleEvent(event: SubstrateEvent): Promise<void> {
  const record = new Transfer(event.idx.toString());
  record.blockNumber = event.block.block.header.number.toString();
  record.timestamp = event.block.timestamp;
  const {
    event: {
      data: [fromAccount, toAccount, amount],
    },
  } = event;
  record.fromAccount = (fromAccount as AccountId).toString();
  record.toAccount = (toAccount as AccountId).toString();
  record.blanceChange = (amount as Balance).toBigInt();
  await record.save();
}

