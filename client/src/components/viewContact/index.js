import "./style.css";
export function ViewContactContainer({ handleViewContact, user }) {
  console.log(user);
  return (
    <div className="container">
      <div className="contacts">
        <h2>Seus Contatos</h2>
        <div className="contact-list">
          {user?.contacts?.map((elem, index) => (
            <div key={index} className="container-contact">
              <h3>{elem.nome}</h3>
              <p>{elem.email[0]}</p>
              <p>{elem.telefone[0]}</p>
            </div>
          ))}
        </div>
        <button onClick={handleViewContact} >voltar</button>
      </div>
    </div>
  );
}
