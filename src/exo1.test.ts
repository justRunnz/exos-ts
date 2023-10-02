import axios from 'axios';
import { getUserSummary } from './exo1';

jest.mock('axios');

describe('getUserSummary', () => {
  it('should return a summary string for a given user ID', async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: {
        id: 1,
        name: 'John Doe',
        username: 'john',
        email: 'john.doe@example.com'
      }
    });

    const summary = await getUserSummary(1);
    expect(summary).toEqual('John Doe (john) - john.doe@example.com');
  });

  it('should throw an error if the user is not found', async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error('User not found'));

    await expect(getUserSummary(2)).rejects.toThrow('User not found');
  });
});
