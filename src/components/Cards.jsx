import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      deck_id: null,
      cards: [],
      
    };
  }

  async componentDidMount() {
    const deck_id = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    this.setState({ deck_id: deck_id.data.deck_id });
  }

  cartes = async () => {
    const response = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=1`
    );
    var card = response.data.cards[0]
    var copyCards = [...this.state.cards, card]
    this.setState({ cards: copyCards });
  };

  render() {
    console.log("this.state.cards", this.state.cards);
    return (
      <>
        <button onClick={this.cartes}>X</button>
        {
          this.state.cards.map(c => <Card card={c}/>)
        }
      </>
    );
  }
}

export default Cards;
