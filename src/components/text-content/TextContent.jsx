import image from "../../assets/images/Image.png";

import "./style.scss";

const featuresList = [
  {
    title: "Tellus Ullamcorper Inceptos",
  },
  {
    title: "Magna Condimentum",
    children: [
      {
        title: "Mattis Tristique",
      },
      {
        title: "Pharetra Pellentesque Dapibus",
      },
    ],
  },
  {
    title: "Aenean Inceptos",
  },
  {
    title: "Parturient Bibendum",
  },
];

const TextContent = () => {
  return (
    <div className="text-content-wrapepr">
      <h1>Quam Tristique Condimentum</h1>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus.{" "}
        <strong>Curabitur blandit</strong> tempus porttitor. Integer posuere
        erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id
        ligula porta felis euismod semper.
      </p>

      <div className="image-wrapper">
        <div>
          <h2>Fringilla Euismod Adipiscing Ipsum</h2>
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean
            lacinia bibendum nulla sed.
          </p>
        </div>
        <img src={image} />
      </div>

      <ul className="list">
        {featuresList.map((item, i) => {
          return (
            <li key={i} className="list-item">
              {item.title}
              {item.children && (
                <ul>
                  {item.children.map((child, e) => {
                    return (
                      <li key={e} className="child-list-item">
                        {child.title}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TextContent;
