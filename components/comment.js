import React, { useState } from "react";
import { firebase } from "../components/firebase";
class Commentarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      comment: ""
    };
  }

  render() {
    return (
      <div>
        <hr />
        <div className='hero'>
          <div>Yorum Yap</div>
          <br />
          <div className='input-field col s6'>
            <div className='input-field col s12'>
              <textarea
                id='2'
                className='materialize-textarea'
                data-length='120'
                onChange={e => {
                  this.setState({ author: e.target.value });
                }}
              ></textarea>
              <label for='2'>Adınız</label>
            </div>
            <div className='input-field col s12'>
              <textarea
                id='2'
                className='materialize-textarea'
                data-length='120'
                onChange={e => {
                  this.setState({ comment: e.target.value });
                }}
              ></textarea>
              <label for='1'>Yorumunuz</label>
            </div>
            <button
              className='btn waves-effect waves-light'
              type='submit'
              name='action'
              onClick={() => {
                firebase
                  .database()
                  .ref("comments/" + this.props.id)
                  .set({
                    author: this.state.author,
                    comment: this.state.comment,
                    slug: this.props.slug
                  })
                  .then(() => {
                    window.location.reload();
                  });
              }}
            >
              Gönder
              <i className='material-icons right'>send</i>
            </button>
          </div>
        </div>
        <hr />
        <style jsx>{`
          .hero {
            text-align: center;
            font-family: "Montserrat", sans-serif;
            margin: 10px 0 10px 0;
          }
          .comment-button {
            margin-top: 50px;
            display: block;
            border: none;
            background-color: #fff;
            font-size: 16px;
            cursor: pointer;
            text-align: center;
            color: #000;
            border: 2px solid #000;
            margin: 0 auto;
          }
          .comment-button:hover {
          }
          .comment-comment-area {
            display: block;
            color: inherit;
            width: 50%;
            font-family: inherit;
            font-size: var(--inputFontSize);
            font-weight: inherit;
            line-height: var(--inputLineHeight);
            border-radius: 0.4rem;
            transition: box-shadow var(--transitionDuration);
            margin: 0 auto;
            padding: var(--inputPaddingV) var(--inputPaddingH);
          }
          .comment-name-area {
            display: block;
            color: inherit;
            width: 50%;
            font-family: inherit;
            font-size: var(--inputFontSize);
            font-weight: inherit;
            line-height: var(--inputLineHeight);

            border-radius: 0.4rem;
            transition: box-shadow var(--transitionDuration);
            margin: 0 auto;
            padding: var(--inputPaddingV) var(--inputPaddingH);
          }
        `}</style>
      </div>
    );
  }
}

export default Commentarea;
