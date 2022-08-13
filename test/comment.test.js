import CommentApi from '../src/Apicomment.js';

describe('Api testing', () => {
  const testAray = [
    {
      comment: 'Great movie!',
      creation_date: '2022-02-10',
      username: 'Tkay',
    },
    {
      comment: 'Nice!',
      creation_date: '2022-04-10',
      username: 'John',
    },
  ];
  test('Comment Counter', () => {
    const comment = CommentApi.counterComments(testAray);
    expect(comment).toBe(2);
  });
});
