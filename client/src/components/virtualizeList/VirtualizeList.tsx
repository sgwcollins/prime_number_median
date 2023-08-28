import useVirtual from "react-cool-virtual";

type VirtualizedListProps = {
    items: string[] | number[];
    width?: number;
    height?: number;
};



const List: React.FC<VirtualizedListProps> = ({ items, height = '300px' }) => {

    const { outerRef, innerRef, items: v_items } = useVirtual<HTMLDivElement>({
        itemCount: items.length,
    });
 
    return (
        <div
            style={{ height, overflow: "auto" }}
            ref={outerRef}

        >
            <div ref={innerRef} className={`flex flex-col divide-y`}>
                {v_items.map(({ index, size }) => (
                    <div className="flex justify-center items-center" key={index} style={{ height: `${size}px` }}>
                        <div className="text-xs h-5 font-semibold inline-block py-1 px-2 uppercase rounded text-gray-600 bg-gray-200 uppercase last:mr-0 mr-1">
                            {items[index]}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;