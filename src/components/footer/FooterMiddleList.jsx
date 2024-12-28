/* eslint-disable react/prop-types */
const FooterMiddleList = ({title, listItem}) => {
  return (
    <div>
      <div>
        <h3 className="mb-2 font-bold">{title}</h3>
        <ul className="flex flex-col gap-2 font-bold">
          {listItem.map((item) =>
            item.listData.map((data, i) => (
              <li key={i} className="font-light">
                {data}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default FooterMiddleList;
