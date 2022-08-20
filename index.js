class ResourceLimitPlugin {
	constructor(options) {
		this.options = options || {};
	}
	apply(compiler) {
		const pluginName = 'ResourceLimitPlugin';

		const folder = this.options.folder;
		const limit = this.options.limit;

		compiler.hooks.compilation.tap(pluginName, (compilation, { normalModuleFactory }) => {
			normalModuleFactory.hooks.parser.for('javascript/auto').tap(pluginName, parser => {
				parser.hooks.import.tap(pluginName, (statement, source) => {
					if (parser.state.current.resource.includes(folder)) {
						if (limit.includes(source)) {
							throw new Error(`ERROR: [${folder}] 中禁止引用[${source}]`);
						}
					}
				});
			});
		});
	}
}

module.exports = ResourceLimitPlugin;
