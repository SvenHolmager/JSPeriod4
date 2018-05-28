import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { Query } from "react-apollo";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "DKK") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ));
    }}
  </Query>
);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <dir>
      <ExchangeRates/>
      </dir>
      </ApolloProvider>
    );
  }
}

export default App;
