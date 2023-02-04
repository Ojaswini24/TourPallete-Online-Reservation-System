import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Hotels </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Cabins</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Discover </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Seasonal and holiday deals </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Car rental </li>
          <li className="fListItem">Flight Finder</li>
          <li className="fListItem">Restaurant reservations </li>
          <li className="fListItem">Travel Agents </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Terms & conditions</li>
          <li className="fListItem">About Us</li>
          <li className="fListItem">Contact</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 TourPallete.</div>
    </div>
  );
};

export default Footer;
