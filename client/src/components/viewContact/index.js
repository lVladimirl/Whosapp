export function ViewContactContainer({ handleViewContact }) {
  return (
    <div className="view-container">
      <p onClick={handleViewContact}>voltar</p>
      <div className="view-container-contact">
        <h3>Nome completo</h3>
        <p>dois primeiros telefones</p>
        <p>dois primeiros emails</p>
      </div>
    </div>
  );
}
