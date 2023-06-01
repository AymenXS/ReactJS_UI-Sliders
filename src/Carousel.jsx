import { useEffect, useState } from 'react';
import { shortList, list, longList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };

  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderID = setInterval(() => {
      nextSlide();
    }, 2000);

    return clearInterval(sliderID);
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{ transform: `translateX(${100 * (personIndex - currentPerson)}%)` }}
            key={id}
          >
            <img src={image} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight />
          </article>
        );
      })}
      <button className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
