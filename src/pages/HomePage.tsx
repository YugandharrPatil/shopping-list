import { For, Show, createResource } from "solid-js";
import { db } from "../lib/db";
import { item } from "../lib/db/schema";

// const fetchItems = async () => {
// 	try {
// 		const items = await db.select().from(item);
// 		console.log(items[0]);
// 		return items;
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

const addItem = async () => {
	try {
		await db.insert(item).values({ id: 4, itemName: "Bread" });
	} catch (err) {
		console.error(err);
	}
};

export default function HomePage() {
	// fetchItems();
	// const [items] = createResource(fetchItems);
	// console.log(fetchItems);
	// const items = fetchItems();
	return (
		<>
			<button onClick={addItem}>AddItem</button>
			{/* {console.log(items())} */}
			Hello
			{/* <div class="w-1/3 h-96 bg-blue-200 border border-black mx-auto relative top-10">
				<Show when={items()} fallback={<h1>Loading...</h1>}>
					<div class="items">
						<For each={items()}>
							{(item: any) => (
								<div class="">
									<h1>{item}</h1>
								</div>
							)}
						</For>
					</div>
				</Show>
			</div> */}
		</>
	);
}
