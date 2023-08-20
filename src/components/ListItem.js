const ListItem = ({ item, idx, deleteHandler }) => {
  return (
    <>
      <li>
        {item}{' '}
        <span
          className="close"
          onClick={(idx) => {
            deleteHandler(idx);
          }}
        >
          ×
        </span>
      </li>
    </>
  );
};
export default ListItem;
