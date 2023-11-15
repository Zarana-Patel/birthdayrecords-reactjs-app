import react,{useState} from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './styles.css';

const Record=()=>{
    var dateValue = new Date().toLocaleDateString("en-US");
    const [tableData, setTableData]= useState([{ name: "Alias", birthdate: dateValue }]);
    const [newRow, setNewRow] = useState({ name: "", birthdate: "" });

    const handleDate =(e)=>{
        const formatedDate = new Date(e.target.value).toLocaleDateString("en-US");    
        setNewRow({ ...newRow, birthdate:formatedDate })
    }
    const addRow = (e) => {
        console.log(newRow);
        e.preventDefault();
        if (newRow.name && newRow.birthdate) {
            setTableData([...tableData, newRow]);
        }   
    };
    const handleDelete = (index,e) => {
        setTableData(tableData.filter((v, i) => i !== index));
        };
        return(
            <div>
                <Card style={{ width: '60rem' }}>
                    <Card.Body>
                    <Card.Title>Birthday Record App - React</Card.Title>
                        <Container>   
                            <Form>
                                <Row>
                                    <Form.Group className="mb-3">
                                        <Col><Form.Label>Enter Name:</Form.Label></Col> 
                                        <Col><Form.Control type="text" placeholder="enter name" value={newRow.name} onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}/></Col> 
                                    </Form.Group>
                                </Row>    
                                <Row>
                                    <Form.Group className="mb-3">
                                        <Col xs={3}><Form.Label>Enter Birthdate:</Form.Label></Col>
                                        <Col><Form.Control type="date" placeholder="enter birthdate" value={tableData.birthdate} onChange={handleDate}/></Col>
                                    </Form.Group>
                                </Row> 
                                <Row>
                                    <Form.Group className="mb-3">
                                        <Col>
                                            <Button variant="primary" onClick={addRow}>Add Row</Button>
                                        </Col>
                                    </Form.Group>
                                </Row>
                            </Form>
                            <Row>
                                <Col>
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th className="text-center">Name</th>
                                                <th className="text-center">Birthdate</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData.map((row, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">{row.name}</td>
                                                    <td className="text-center">{row.birthdate}</td>
                                                    <td className="text-center"><Button  variant="primary" onClick={e => handleDelete(index,e)}>Delete</Button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>  
    )}
export default Record;