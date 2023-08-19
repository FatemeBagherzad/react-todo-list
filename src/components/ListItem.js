const ListItem = (props) => {
  return (
    <li key={props.idx}>
      {props.item} <span className="close">×</span>{' '}
    </li>
  );
};

export default ListItem;
