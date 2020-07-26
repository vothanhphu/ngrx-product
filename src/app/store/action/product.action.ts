import { Action } from '@ngrx/store';

export enum ProductActionTypes {
  Add = 'Product Component Add',
  Edit = 'Product Component Edit',
  Delete = 'Product Component Delete'
}

export class ActionExtend implements Action {
  readonly type;
  payload: any
}

export class ProductAdd implements ActionExtend {
  readonly type = ProductActionTypes.Add;

  constructor(public payload: any) {
  }
}

export class ProductEdit implements ActionExtend {
  readonly type = ProductActionTypes.Edit;

  constructor(public payload: any) {
  }
}

export class CustomerRemove implements ActionExtend {
  readonly type = ProductActionTypes.Delete;

  constructor(public payload: any) {
  }
}
