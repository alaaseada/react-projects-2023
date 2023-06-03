import { useState } from 'react';

function SingleItem({ item, removeItem, completeItem }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleRemove = () => {
    removeItem(item.id);
  };

  const handleCompletion = () => {
    setIsCompleted(!isCompleted);
    completeItem(item.id);
  };

  return (
    <div className='single-item'>
      <input type='checkbox' onChange={handleCompletion} />
      <p
        style={
          isCompleted
            ? { textTransform: 'capitalize', textDecoration: 'line-through' }
            : { textTransform: 'capitalize' }
        }
      >
        {item.text}
      </p>
      <button className='btn remove-btn' onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}

export default SingleItem;
