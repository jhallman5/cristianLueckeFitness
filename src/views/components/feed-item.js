/* eslint-disable */
import React from 'react';

const feedItem = () => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <strong>John Smith</strong><br />
          YO DAWG I HIT A NEW PR!
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item">
              <span className="icon is-small"><i className="fa fa-reply"></i></span>
            </a>
            <a className="level-item">
              <span className="icon is-small"><i className="fa fa-retweet"></i></span>
            </a>
            <a className="level-item">
              <span className="icon is-small"><i className="fa fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
)

export default feedItem
