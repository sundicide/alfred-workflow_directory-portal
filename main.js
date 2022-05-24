class ItemClass {
	constructor(id, title, path) {
		this.uid = id
		this.title = title
		this.path = path
	}
	toJSON() {
		return {
			uid: this.id,
			type: "file",
			title: this.title,
			subtitle: this.path,
			arg: this.path,
			autocomplete: this.title,
			icon: {
				type: "fileicon",
				path: this.path
			}
		}
	}
}

const ITEMS = [
	new ItemClass("desktop", "Desktop", "~/Desktop"),
	new ItemClass("download", "Downloads", "~/Downloads"),
	new ItemClass("document", "Documents", "~/Documents"),
	new ItemClass("onedrive-personal", "OneDrive - Personal", "~/OneDrive")
]	

function main() {
	const result = {items: ITEMS}
	return JSON.stringify(result)
}
main()