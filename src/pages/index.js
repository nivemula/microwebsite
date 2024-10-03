import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  // Data for the table
  const rows = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    col1: `Data 1.${i + 1}`,
    col2: `Data 2.${i + 1}`,
    col3: `Data 3.${i + 1}`,
    col4: `Data 4.${i + 1}`,
    col5: `Data 5.${i + 1}`,
    col6: `Data 6.${i + 1}`,
  }));

  const rowsPerPage = 7;
  const totalPages = Math.ceil(rows.length / rowsPerPage);

  // Show only the rows for the current page
  const currentRows = rows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleShowModal = (row) => {
    setSelectedRowData(row);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container mt-4">
      <h2>React Table with Pagination and Modal</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.col1}</td>
              <td>{row.col2}</td>
              <td>{row.col3}</td>
              <td>{row.col4}</td>
              <td>{row.col5}</td>
              <td>
                <Button variant="primary" onClick={() => handleShowModal(row)}>
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <nav>
        <ul className="pagination">
          {[...Array(totalPages).keys()].map((num) => (
            <li
              key={num + 1}
              className={`page-item ${currentPage === num + 1 ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(num + 1)}
              >
                {num + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Row Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRowData ? (
            <>
              <p>Column 1: {selectedRowData.col1}</p>
              <p>Column 2: {selectedRowData.col2}</p>
              <p>Column 3: {selectedRowData.col3}</p>
              <p>Column 4: {selectedRowData.col4}</p>
              <p>Column 5: {selectedRowData.col5}</p>
              <p>Random Text: Here is some random text in the modal!</p>
            </>
          ) : (
            <p>No data available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;