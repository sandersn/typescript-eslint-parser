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

