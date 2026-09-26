import GameSaving from "../GameSaving"

describe('GameSaving', () => {
  test('should create instance with given data', () => {
    const data = {
      id: 9,
      created: 3764373823,
      userInfo: {id: 1, name: 'Hitman', level: 10, points: 500},
    };
    const saving = new GameSaving(data);
    expect(saving.id).toBe(9);
    expect(saving.created).toBe(3764373823);
    expect(saving.userInfo.name).toBe('Hitman');
  });
});