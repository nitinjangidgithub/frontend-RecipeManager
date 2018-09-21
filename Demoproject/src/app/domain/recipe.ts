export class Recipe {
    private _id: number;
    private _recipeName: string;
    private _ingredient1: string;
    private _ingredient2: string;
    private _ingredient3: string;
    private _ingredient4: string;

    get id(): number {
        return this._id;
        }
    set id(id: number) {
        this._id = id;
    }

    get recipeName(): string {
        return this._recipeName;
        }
    set recipeName(recipeName: string) {
        this._recipeName = recipeName;
    }

    get ingredient1(): string {
        return this._ingredient1;
    }
    set ingredient1(ingredient1: string) {
        this._ingredient1 = ingredient1;
    }

    get ingredient2(): string {
        return this._ingredient2;
    }
    set ingredient2(ingredient2: string) {
        this._ingredient2 = ingredient2;
    }

    get ingredient3(): string {
        return this._ingredient3;
    }
    set ingredient3(ingredient3: string) {
        this._ingredient3 = ingredient3;
    }


    get ingredient4(): string {
        return this._ingredient4;
    }
    set ingredient4(ingredient4: string) {
        this._ingredient4 = ingredient4;
    }

    toJSON(): any {
        return {
            'recipeName': this._recipeName,
            'ingredient1': this._ingredient1,
            'ingredient2': this._ingredient2,
            'ingredient3': this._ingredient3,
            'ingredient4': this._ingredient4
        };
    }
}
