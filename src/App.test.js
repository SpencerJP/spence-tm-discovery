import React from 'react';
import fetchMock from "fetch-mock"
import { render, wait } from '@testing-library/react';
import { mockData } from "./Components/EventsListComponents/Redux"
import App from './App';
import configureStore, { getTestMiddleware, reducerManager } from "./Store"

const mockEventsFetch = (time) => {

  fetchMock.get(/events/i, JSON.stringify(mockData.mockEventsJson), {
      delay: time || 1000,
  })
  fetchMock.get(/ipregistry/i, JSON.stringify(mockData.mockIPLookup), {
      delay: 200,
  })
}

describe("app acceptance tests", () => {
  const initialState = {}
  let mockStore = configureStore(initialState, getTestMiddleware())
  beforeEach(() => {
        mockStore = configureStore(initialState, getTestMiddleware())
  })
  it('renders navbar', () => {
    const { getByText } = render(<App storeProp={mockStore}/>);
    const linkElement = getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
    const linkElement2 = getByText(/About/i);
    expect(linkElement2).toBeInTheDocument();
    const linkElement3 = getByText(/Event Lookup/i);
    expect(linkElement3).toBeInTheDocument();
  });
  
  it("Allows you to switch between tabs", async () => {
    mockEventsFetch()
    const { getByText } = render(<App storeProp={mockStore}/>);
    const button1 = getByText(/Home/i)
    button1.click()
    
    const button2 = getByText(/About/i)
    button2.click()
    wait(() => {
      const aboutElement = getByText(/This React-Redux site made by Spencer Porteous./i)
      expect(aboutElement).toBeInTheDocument()

    }, 1500)

    await wait(() => {}, 500)
    
    button1.click()
    wait(() => {
      const eventElement = getByText(/Charlotte Hornets vs. Los Angeles Lakers/i)
      expect(eventElement).toBeInTheDocument()

    }, 1500)
  
  })
})

