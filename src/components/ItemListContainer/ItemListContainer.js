import Container from 'react-bootstrap/Container';


 function ItemListContainer(props) {
  const {greeting, construccion} = props;

return (
    <Container fluid className="justify-content-md-center" style= {{background: "lightgrey"}}>
      <div style= {{margin:"250px auto 20px",textAlign:"center"}}>
        <h1>{greeting}</h1>
      </div>
      <div style= {{margin:"20px auto 20px",textAlign:"center"}}>
        <h2>{construccion}</h2>
      </div>
    </Container>
  );
}

export default ItemListContainer;