const { createMacro, MacroError } = require('babel-plugin-macros')
const plugin = require('react-hot-loader/babel')

function macro({ babel, references, state }) {
    if (!references.default) {
        throw new MacroError('react-hot-reload.macro requires a default import')
    }

    const { types: t } = babel
    const { node: referenceNode, scope } = references.default[0]

    if (process.env.NODE_ENV === 'production') {
        state.file.path.traverse({
            CallExpression(path) {
                if (path.node.callee.name !== referenceNode.name) {
                    return
                }

                path.replaceWith(t.identifier(
                    path.node.arguments[0].name,
                ))
            },
        })
        scope.removeBinding(referenceNode.name)
    } else {
        // Do apply react-hot-loader plugin first
        plugin(babel)

        state.file.path.traverse({
            ImportDefaultSpecifier({ node, parentPath }) {
                if (node.local.name !== referenceNode.name) {
                    return
                }

                const identifier = t.identifier(referenceNode.name)
                const declaration = t.importDeclaration(
                    [t.importSpecifier(identifier, identifier)],
                    t.stringLiteral('react-hot-loader/root'),
                )

                parentPath.insertAfter(declaration)
            },
        })
    }
}

module.exports = createMacro(macro)
