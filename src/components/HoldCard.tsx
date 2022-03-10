import { HoldInfo } from "../mocks/handlers";

interface Props {
  hold: HoldInfo;
}

const HoldCard = (props: Props) => {
  const { hold } = props;

  return (
    <div>
      <h3>{hold.name}</h3>
      <p>Capital: {hold.capital}</p>
      <p>Jarl: {hold.jarl}</p>
      <p>Allegiance: {hold.allegiance}</p>
    </div>
  );
};

export default HoldCard;
