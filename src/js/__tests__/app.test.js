import orderByProps from '../app'

test('Проверка правильности сортировки', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const result = orderByProps(obj, ['name', 'level']);
    const expected = [
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10}
      ]
      expect(result).toEqual(expected);
})

test('Проверка правильности сортировки при пустой очереди', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const result = orderByProps(obj, []);
    const expected = [
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10},
        {key: "level", value: 2},
        {key: "name", value: "мечник"}
      ]
      expect(result).toEqual(expected);
})