import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import {rest} from 'msw'
import {setupServer} from 'msw/node'

const server = setupServer(
  rest.get('http://localhost:8080/actions', (req, res, ctx) => {
    return res(
      ctx.json(
      [
        {
            "timestamp": "2019-09-22T15:36:48.099208",
            "type": "TurnFreshAirOff",
            "temperature": 21.0,
            "humidity": 12,
            "id": "9717cc3e-115e-4165-ad1f-ad2f6af45239"
        }
      ]
    ))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders app title', () => {
  render(<App />);

  const linkElement = screen.getByText("My House");

  expect(linkElement).toBeInTheDocument();
});

test('renders action temperature', async () => {
  render(<App />);

  await waitFor(() => expect(screen.getByText("Temperature: 21")).toBeInTheDocument(1))
});

