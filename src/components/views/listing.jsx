import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { responsePlease } from '../../API/fetch/fetch';

export const Listing = () => {
  const [videList, setVideList] = React.useState(null);

  useEffect(() => {
    responsePlease().then((data) => {
      console.log('ttt data', data);
      setVideList(data);
    });
  }, []);

  console.log('ttt videList', videList);
  return (
    <div>
      <h1>Listing</h1>
      <p>Here is a list of items</p>
      {videList ? (
        videList.map((item) => {
          return (
            <Link to={`video/${item.id}`}>
              <div key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <img src={item.thumbnail} alt={item.title} />
              </div>
            </Link>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
