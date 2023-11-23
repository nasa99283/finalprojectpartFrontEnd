export class Category {
    constructor(
      private _id: number | null,
      private _title: string,
      private _description: string,
      private _productId: number | null
    ) {}
  
    public get description(): string {
      return this._description;
    }
    public set description(value: string) {
      this._description = value;
    }
    public get title(): string {
      return this._title;
    }
    public set title(value: string) {
      this._title = value;
    }
    public get id(): number | null {
      return this._id;
    }
    public set id(value: number | null) {
      this._id = value;
    }
    public get productId(): number | null {
      return this._productId;
    }
    public set productId(value: number | null) {
      this._productId = value;
    }
  
    public toJSON(): object {
      return {
        id: this._id,
        title: this._title,
        description: this._description,
        productId: this._productId,
      };
    }
  }
