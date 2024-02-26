//TODO: ссылки сделать через link как табы с хешемо
export const Locations = () => {
  const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {cities.map((text) => (
            <li className='locations__item' key={text}>
              <a className='locations__item-link tabs__item' href='#'>
                <span>{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
