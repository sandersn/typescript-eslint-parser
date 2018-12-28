type TSNode = import("estree").Node & {
    decorators: any;
    typeAnnotation: any;
}
type Options = {
    topLevel: boolean;
    rest: boolean;
    assignments: any[];
};

declare module "eslint-scope/lib/pattern-visitor" {
    import { Node, Expression, SpreadElement } from "estree";
    class PatternVisitor {
        constructor(
            options: any,
            rootPattern: any,
            callback: (p: any, options: Options) => void);
        rightHandNodes: Array<Expression | SpreadElement>;

        Identifier(node: Node): void;
        visit(node: Node): void;
    }
    export = PatternVisitor;
}
declare module "eslint-scope/lib/scope" {
    import { Node } from "estree";
    import { ScopeManager } from "eslint-scope/lib/scope-manager";
    export type Type =
        | "module"
        | "block"
        | "switch"
        | "function"
        | "catch"
        | "with"
        | "function"
        | "class"
        | "global";
    export class Scope {
        constructor(scopeManager: ScopeManager, type: Type, upperScope: Scope, block: Node, isMethodDefinition: boolean);
    }
}
declare module "eslint-scope/lib/scope-manager" {
    export class ScopeManager {
        constructor(options: object);
    }
}

