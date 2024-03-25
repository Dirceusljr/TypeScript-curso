export class Negociacao {
    
    // constructor(
    //     private _data: Date,
    //     private _quantidade: number,
    //     private _valor: number,
    // ) {}

    // get data(): Date {
    //     return this._data
    // }

    // get quantidade(): number {
    //     return this._quantidade
    // }

    // get valor(): number {
    //     return this._valor
    // }

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number,
    ) {}

    get volume(): number {
        return this.quantidade * this.valor
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    
    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString)
        return new Negociacao(date, quantidade, valor)
    }

}