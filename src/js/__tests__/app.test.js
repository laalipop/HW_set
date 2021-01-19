import Team from '../app';

test('test add same obj', () => {
  const team = new Team();
  const obj1 = {
    name: 'Bob',
  };
  expect(() => {
    team.add(obj1);
    team.add(obj1);
  }).toThrow(Error);
});

test('test add different obj', () => {
  const team = new Team();
  const obj1 = {
    name: 'Bob',
  };
  const obj2 = {
    name: 'Poplun',
  };

  team.add(obj1);
  team.add(obj2);
  const result = new Set();
  result.add(obj1);
  result.add(obj2);
  expect(team.members).toEqual(result);
});

test('test addAll', () => {
  const team = new Team();
  const obj2 = {
    name: 'Poplun',
  };
  const obj1 = {
    name: 'Bob',
  };
  const result = new Set();
  result.add(obj1);
  result.add(obj2);
  result.add(obj1);
  expect(team.addAll(obj1, obj2)).toEqual(result);
});

test('test toArr', () => {
  const team = new Team();
  const obj2 = {
    name: 'Poplun',
  };
  const obj1 = {
    name: 'Bob',
  };
  expect(team.toArray(obj1, obj2)).toEqual([]);
});
