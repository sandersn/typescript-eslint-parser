declare module "eslint-scope/lib/pattern-visitor" {
    import { Node, Expression, SpreadElement } from "estree";
    type Options = {
        topLevel: boolean;
        rest: boolean;
        assignments: any[];
    };
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
