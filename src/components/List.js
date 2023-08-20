import ListItem from './ListItem';
const List = ({ items, deleteHandler }) => {
  return (
    <>
      <ul id="myUL">
        {items.map((item, idx) => (
          <ListItem
            item={item}
            idx={idx}
            key={idx}
            deleteHandler={deleteHandler}
          />
        ))}
      </ul>
    </>
  );
};
export default List;
