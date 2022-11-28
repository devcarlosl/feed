import React from 'react';
import PropTypes from 'prop-types';

export function Post({ author, comment }) {
  return (
    <div>
      <strong>{author}</strong>
      <p>{comment}</p>
    </div>
  );
}

Post.propTypes = {
  author: PropTypes.string,
  comment: PropTypes.string
};
