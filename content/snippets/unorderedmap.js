import { NearBindgen, call, view, near, UnorderedMap } from "near-sdk-js";

@NearBindgen({})
export class StatusMessage {
  constructor() {
    this.records = new UnorderedMap("a");
  }

  @call({})
  set_status({ message }) {
    let account_id = near.signerAccountId();
    near.log(`${account_id} set_status with message ${message}`);
    this.records.set(account_id, message);
  }

  @view({})
  get_status({ account_id }) {
    near.log(`get_status for account_id ${account_id}`);
    return this.records.get(account_id);
  }

  @view({})
  get_all_statuses() {
    return this.records.toArray();
  }
}