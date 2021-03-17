import React from "react";
import "./albudeitails.css";

export default class AlbumDetails extends React.Component {
  render() {
    return (
      <div className="music">
        <h3>Album Title: {this.props.albumTitle}</h3>
        <h3>Artist Name: {this.props.artistName}</h3>
        <h3>Number of Songs:  {this.props.numberOfSongs}</h3>
        <h3>length: {this.props.albumLength}</h3>
        <a href={this.props.link}>Youtube link</a>
      </div>
    );
  }

  static defaultProps = {
    albumTitle: "Ready To Die",
    artistName: "The Notorious B.I.G.",
    numberOfSongs: "19",
    Length: "1 hour 16 minutes",
    link: "https://music.youtube.com/playlist?list=OLAK5uy_mXhuBRiTG1-w3MMfdV2DK7u14ts8qnaX0",
  };
}
