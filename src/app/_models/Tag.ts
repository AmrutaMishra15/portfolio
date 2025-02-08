export class Tag{
    static readonly ANGULAR =new Tag('ANGULAR','blue');
    static readonly JAVA =new Tag('JAVA','darkgoldenrod');
    static readonly PYTHON =new Tag('PYTHON','green');
    static readonly SPRING_BOOT =new Tag('SPRING BOOT','orange');
    static readonly JAVASCRIPT =new Tag('JAVASCRIPT','purple');
    static readonly TYPESCRIPT =new Tag('TYPESCRIPT','darkblue');

    constructor(private readonly key:string, public  readonly color:string){

    }
    toString(){
        return this.key;
    }
}