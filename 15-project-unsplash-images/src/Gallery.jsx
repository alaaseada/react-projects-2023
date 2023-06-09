import { useFetchImages } from './reactQueryCustomHook';
import { useGlobalContext } from './Context';

function Gallery() {
  const { keyword } = useGlobalContext();
  const { data, isLoading, isError } = useFetchImages(keyword);

  if (isLoading) {
    return (
      <div className='image-container'>
        <h4>Loading....</h4>
      </div>
    );
  }
  if (isError) {
    return (
      <div className='image-container'>
        <h4>Something wrong occurred</h4>
      </div>
    );
  }
  if (!data?.results.length) {
    return (
      <div className='image-container'>
        <h4>No results found.</h4>
      </div>
    );
  }
  return (
    <section className='image-container'>
      {data?.results.map((image) => {
        return (
          <img
            key={image.id}
            src={image?.urls?.regular}
            className='img'
            alt={image.alt_description}
          />
        );
      })}
    </section>
  );
}

export default Gallery;
