import { Card } from "./Card";
export function NewArrivalsSection({ items, onClickCard }) {
    return (
    <div className="mt-20">
        <div className="flex-center">
            <div className="bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold dark:text-white"> NEW ARRIVALS
        </div>
    </div>

    <div className="mt-10 justify-betweenmt-10 grid grid-cols-1 gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3, 25%)]">
        {items.map(( item ) => (<Card item={item} key={item.id} onClick={onClickCard}/>))}
    </div>
    </div>
    )
}