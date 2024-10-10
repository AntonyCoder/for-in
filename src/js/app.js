export default function orderByProps(obj, order) {
    const result = [];

    for (const key of order) {
        if (key in obj) {
            result.push({ key: key, value: obj[key] });
        }
    }

    const restProps = [];

    for (const key in obj) {
        if (!order.includes(key)) {
            restProps.push({ key: key, value: obj[key] });
        }
    }

    restProps.sort((a, b) => (a.key > b.key ? 1 : -1));

    return [...result, ...restProps];
}