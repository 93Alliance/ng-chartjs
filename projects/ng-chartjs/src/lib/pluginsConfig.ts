export class PluginConfig {
    private _plugins: any[];
    constructor(plugins: any[] = []) {
        this._plugins = plugins;
    }

    get plugins() {
        return this._plugins;
    }
}
