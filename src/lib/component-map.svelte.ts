export default class ComponentMap<K, V> {
	private components: Map<K, V> = $state(new Map());

	constructor(components?: [K, V][]) {
		if (components) this.components = new Map(components);
	}

	get size() {
		return this.components.size;
	}

	entries() {
		return this.components;
	}

	values() {
		return this.components.values();
	}

	set(key: K, value: V) {
		this.components.set(key, value);
		this.components = new Map(this.components);
	}

	delete(key: K) {
		this.components.delete(key);
		this.components = new Map(this.components);
	}

	clear() {
		this.components.clear();
		this.components = new Map(this.components);
	}
}
