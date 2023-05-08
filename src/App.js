import React from "react";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsDataLoaded(true);
      });
  }, []);

  if (!isDataLoaded) {
    return (
      <div>
        <h1> Loading Data... </h1>
      </div>
    );
  }
  

  return (
    <div className="App">
      <h1> Fetch data from an API in react </h1>
      {items.map((item) => (
        <ul key={item.id}>
          <li>
            User Name: {item.username}
            <br /> Full Name: {item.name}
            <br /> User Email: {item.email}
            <br />
            <br /> Phone: {item.phone}
            <br /> Address: {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}
            <br />
            <br /> Website: {item.website}
            <br />
            <br /> Company: {item.company.name}, {item.company.catchPhrase}, {item.company.bs}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default App;
