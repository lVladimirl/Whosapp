# Whosapp
>Uma aplicação fullstack contendo back e front end em duas pastas sepadadas dentro do projeto, a aplicação tem como função ser uma agenda de contatatos onde um cliente pode criar sua conta, fazer login, ver suas informações na home, cadastrar e visualizar sua seus contatos

## Tecnologias Usadas
Backend:
- typescript
- javascript
- framework express
- typeorm
- jwt
- bcrypt
- banco de dados relacional em PostgreSQL
- yup

Frontend:
- framework react
- javascript
- css
- html
- hooks form, route 
- react context
- axios

## Passos de Instalação
- Clone o repositorio e acesse a pasta:
```Github link
https://github.com/lVladimirl/CNAB-parser-lVladimirl.git
```

> Recomendo que ao executar a aplicação localmente utilize dois terminais, uma para ativar o backend e outro para o front.
- Abra o terminal e entre na pasta api
```terminal
cd ./api
```

- Instale as dependencias nescessarias para o backend
```terminal
yarn
```

- Com outro terminal acesse a pasta client e instale as dependencias nescessarias para o front
```terminal
//acessando no mesmo terminal
cd ../
cd ./client

//acessando a pasta em outro terminal
cd ./ client

//instalando dependencias
yarn
```

## Passos para execução em ambiente de desenvolvimento (local).

- Dentro da pasta api faça uma copia do arquivo .env.example, altere o nome para apenas '.env' e preencha os dados nescessarios para a criação do banco de dados
```javascript
SECRET_KEY="segredo_que_voce_deseja"

POSTGRES_USER="seu_user_postgre"

POSTGRES_PWD="senha_do_seu_user_postgre"

POSTGRES_DB="nome_do_banco_de_dados"
```

- Crie um banco de dados PostgreSQL 
```DB manager
CREATE DATABASE nome_do_banco_de_dados
```

- Criando e rodando as migrations para o banco de dados
```terminal
//criação das migrations
yarn typeorm migration:create src/migrations/initialMigration 

//gera as querys
yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts        

//aplica no banco de dados
yarn typeorm migration:run -d src/data-source.ts
```

- Rodando a aplicação localmente entre em cada uma das pastas e use o respectivo comando para rodar a aplicação. (use dois terminais um para o back e outro para o front)
```terminal
// whosapp/api
yarn dev

// whosapp/client
yarn start
```

## Funcionamento
### login
A primeira pagina da aplicação é a tela de login, caso ja tenha feito o login um botão no canto superior direito "perfil" te levará para a home.
- O login pede apenas o nome do usuario e sua senha, caso haja um erro no formulario como um campo vazio ou uma senha com menos de 6 digitos mensagens de erro serão exibidas logo abaixo do input.
- Caso haja um erro no login como um perfil não existente um modal de erro exibira uma mensagem de acordo.
- Caso não possua uma conta, logo a baixo do botão de logar existe a opção de clickar para fazer seu registro.
- Caso o formluario seja preenchido corretamente e o login seja feito corretamente o usuario deverá ser direcionado para a homepage.

### Register
A segunda pagina é destinada a permitir a criação de um perfil na aplicação.
- O registro pede algumas informações extras mas nada muito complexo
	- nome completo
	- email ou emails
		- para adicionar mais de um email basta preencher o input com um ", " entre cada email
	- telefone ou telefones
		- assim como o email para inserir multiplos valores basta adicionar um ", " entre cada telefone
	- senha
		- no minimo 6 digitos que podem ser numeros, letras ou caracteres especiais ou todos juntos.

Caso algum campo tenha sido deixado vazio ou preenchido incorretamente uma mensagem de erro sera exibida, assim como se um email ou telefone ja existente for cadastrado um modal de erro exibira uma mensagem de acordo.


### Homepage
A ultima pagina possui um conjunto de informações e validações, caso o usuario não tenha feito login a aplicação ira redirecionar o usuario para a tela de login.

Na tela da homepage são exibidas algumas informações simples do usuario, seu nome, seus emails e telefones na esquerda, enquanto na direita estão dois botões, um abre um  formulario para o cadastro de um novo contato e outro para visualiza-los
> os contatos citados no container a direita se referem aos contatos da agenda do usuario e não os meios de contato citados no registro de usuario.

Assim como no login e registro caso algum campo esteja vazio uma mensagem de erro sera exibida logo abaixo do input.

Caso o usuario não possua contatos registrados sera exibido apenas um botão para retornar e voltar a ter as duas opções, visualização e cadastro de um contato.
