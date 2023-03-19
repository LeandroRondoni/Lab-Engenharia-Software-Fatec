function createCadForm() {
  let main = document.getElementById("main");
  if (main) {
    document.body.removeChild(main);
  }
  const form = document.createElement("form");
  form.className = "align-middle form-control container-sm";
  form.id = "main";

  const titulo = document.createElement("legend");
  titulo.innerText = "Formulário de Cadastro: ";

  const nomeDiv = document.createElement("div");
  nomeDiv.className = "input-group mb-3";
  const nomeLabel = document.createElement("span");
  nomeLabel.className = "input-group-text";
  nomeLabel.innerText = "Nome:";
  const nomeInput = document.createElement("input");
  nomeInput.type = "text";
  nomeInput.id = "nome";
  nomeInput.className = "form-control";
  nomeInput.placeholder = "Digite seu nome completo";
  nomeInput.required = true;

  const emailDiv = document.createElement("div");
  emailDiv.className = "input-group mb-3";
  const emailLabel = document.createElement("span");
  emailLabel.className = "input-group-text";
  emailLabel.innerText = "E-mail:";
  const emailInput = document.createElement("input");
  emailInput.type = "text";
  emailInput.id = "email";
  emailInput.className = "form-control";
  emailInput.placeholder = "seunome@seuemail.com";
  emailInput.required = true;

  const dataDiv = document.createElement("div");
  dataDiv.className = "input-group mb-3";
  const dataLabel = document.createElement("span");
  dataLabel.className = "input-group-text";
  dataLabel.innerText = "Data de Nascimento:";
  const dataInput = document.createElement("input");
  dataInput.type = "date";
  dataInput.id = "data";
  dataInput.className = "form-control";
  dataInput.required = true;
  dataInput.max = new Date().getFullYear();

  const telfixoDiv = document.createElement("div");
  telfixoDiv.className = "input-group mb-3";
  const telfixoLabel = document.createElement("span");
  telfixoLabel.className = "input-group-text";
  telfixoLabel.innerText = "Telefone Fixo:";
  const telfixoInput = document.createElement("input");
  telfixoInput.type = "text";
  telfixoInput.id = "telfixo";
  telfixoInput.className = "form-control";
  telfixoInput.placeholder = "(99)9999-9999";
  telfixoInput.required = true;

  const celularDiv = document.createElement("div");
  celularDiv.className = "input-group mb-3";
  const celularLabel = document.createElement("span");
  celularLabel.className = "input-group-text";
  celularLabel.innerText = "Telefone Celular:";
  const celularInput = document.createElement("input");
  celularInput.type = "text";
  celularInput.id = "celular";
  celularInput.className = "form-control";
  celularInput.placeholder = "(99)9999-9999";
  celularInput.required = true;

  const checkProfessorDiv = document.createElement("div");
  checkProfessorDiv.className = "form-check";
  const checkProfessorInput = document.createElement("input");
  checkProfessorInput.className = "form-check-input";
  checkProfessorInput.type = "radio";
  checkProfessorInput.name = "rd1";
  checkProfessorInput.value = "Professor";
  const checkProfessorLabel = document.createElement("label");
  checkProfessorLabel.innerText = "Professor";

  const checkAlunoDiv = document.createElement("div");
  checkAlunoDiv.className = "form-check mb-3";
  const checkAlunoInput = document.createElement("input");
  checkAlunoInput.className = "form-check-input";
  checkAlunoInput.type = "radio";
  checkAlunoInput.name = "rd1";
  checkAlunoInput.value = "Aluno";
  const checkAlunoLabel = document.createElement("label");
  checkAlunoLabel.innerText = "Aluno";

  const matriculaDiv = document.createElement("div");
  matriculaDiv.className = "input-group mb-3";
  const matriculaLabel = document.createElement("span");
  matriculaLabel.className = "input-group-text";
  matriculaLabel.innerText = "Matrícula:";
  const matriculaInput = document.createElement("input");
  matriculaInput.type = "text";
  matriculaInput.id = "matricula";
  matriculaInput.className = "form-control";
  matriculaInput.placeholder = "Digite sua matrícula";
  matriculaInput.required = true;

  const divBtn = document.createElement("div");
  divBtn.className = "d-grid gap-2 d-md-block text-center";

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerText = "Enviar";
  submitButton.className = "btn btn-success me-md-2";
  submitButton.onclick = () => {
    let nome = form.querySelector('input[id="nome"]').value;
    let email = form.querySelector('input[id="email"]').value;
    let data = form.querySelector('input[id="data"]').value;
    let telfixo = form.querySelector('input[id="telfixo"]').value;
    let celular = form.querySelector('input[id="celular"]').value;
    let matricula = form.querySelector('input[id="matricula"]').value;
    let role = form.querySelector('input[name="rd1"]:checked').value;

    let person;
    if (role == "Aluno") {
      let curso = form.querySelector('input[id="curso"]').value;
      person = new Aluno(nome, email, data, telfixo, celular, matricula, curso);
    } else {
      let area = form.querySelector('input[id="area"]').value;
      let lattes = form.querySelector('input[id="lattes"]').value;
      person = new Professor(
        nome,
        email,
        data,
        telfixo,
        celular,
        matricula,
        area,
        lattes
      );
    }

    const success = document.createElement("div");
    success.className = "alert alert-success";
    success.role = "alert";
    success.innerText =
      "O " + role + " " + person.nome + " foi cadastrado com sucesso!";
    document.body.appendChild(success);
  };

  const resetBtn = document.createElement("button");
  resetBtn.type = "reset";
  resetBtn.innerText = "Redefinir";
  resetBtn.className = "btn btn-secondary";

  form.appendChild(titulo);

  nomeDiv.appendChild(nomeLabel);
  nomeDiv.appendChild(nomeInput);
  form.appendChild(nomeDiv);

  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);
  form.appendChild(emailDiv);

  dataDiv.appendChild(dataLabel);
  dataDiv.appendChild(dataInput);
  form.appendChild(dataDiv);

  telfixoDiv.appendChild(telfixoLabel);
  telfixoDiv.appendChild(telfixoInput);
  form.appendChild(telfixoDiv);

  celularDiv.appendChild(celularLabel);
  celularDiv.appendChild(celularInput);
  form.appendChild(celularDiv);

  checkProfessorDiv.appendChild(checkProfessorInput);
  checkProfessorDiv.appendChild(checkProfessorLabel);
  form.appendChild(checkProfessorDiv);

  checkAlunoDiv.appendChild(checkAlunoInput);
  checkAlunoDiv.appendChild(checkAlunoLabel);
  form.appendChild(checkAlunoDiv);

  matriculaDiv.appendChild(matriculaLabel);
  matriculaDiv.appendChild(matriculaInput);
  form.appendChild(matriculaDiv);

  divBtn.appendChild(submitButton);
  divBtn.appendChild(resetBtn);
  form.appendChild(divBtn);

  checkAlunoInput.addEventListener("change", function () {
    if (checkAlunoInput.checked) {
      let areaDiv = form.querySelector("div[id='area']");
      if (areaDiv) {
        form.removeChild(areaDiv);
      }

      let cursoInput = form.querySelector("input[id='curso']");
      if (!cursoInput) {
        const cursoDiv = document.createElement("div");
        cursoDiv.className = "input-group mb-3";
        cursoDiv.id = "curso";
        const cursoLabel = document.createElement("span");
        cursoLabel.className = "input-group-text";
        cursoLabel.innerText = "Curso:";
        const cursoInput = document.createElement("input");
        cursoInput.type = "text";
        cursoInput.id = "curso";
        cursoInput.className = "form-control";
        cursoInput.placeholder = "Digite seu curso";
        cursoInput.required = true;

        const parentDiv = divBtn.parentNode;
        cursoDiv.appendChild(cursoLabel);
        cursoDiv.appendChild(cursoInput);
        parentDiv.insertBefore(cursoDiv, divBtn);
      }
    }
  });

  checkProfessorInput.addEventListener("change", function () {
    if (checkProfessorInput.checked) {
      let cursoDiv = form.querySelector("div[id='curso']");
      if (cursoDiv) {
        form.removeChild(cursoDiv);
      }

      let areaInput = form.querySelector('input[id="area"]');
      if (!areaInput) {
        const areaDiv = document.createElement("div");
        areaDiv.id = "area";
        areaDiv.className = "input-group mb-3";
        const areaLabel = document.createElement("span");
        areaLabel.className = "input-group-text";
        areaLabel.innerText = "Área:";
        const areaInput = document.createElement("input");
        areaInput.type = "text";
        areaInput.id = "area";
        areaInput.className = "form-control";
        areaInput.placeholder = "Digite sua área de atuação";
        areaInput.required = true;

        const lattesLabel = document.createElement("span");
        lattesLabel.className = "input-group-text";
        lattesLabel.innerText = "Lattes:";
        const lattesInput = document.createElement("input");
        lattesInput.type = "text";
        lattesInput.id = "lattes";
        lattesInput.className = "form-control";
        lattesInput.placeholder = "Digite sua área de atuação";
        lattesInput.required = true;

        const parentDiv = divBtn.parentNode;
        areaDiv.appendChild(lattesLabel);
        areaDiv.appendChild(lattesInput);
        areaDiv.appendChild(areaLabel);
        areaDiv.appendChild(areaInput);
        parentDiv.insertBefore(areaDiv, divBtn);
      }
    }
  });

  return document.body.appendChild(form);
}

let formulario = document.getElementById("formescola");
formulario.addEventListener("click", createCadForm);

class Person {
  constructor(nome, email, datanasc, telfixo, celular, matricula) {
    this.nome = nome;
    this.email = email;
    this.datanasc = datanasc;
    this.telfixo = telfixo;
    this.celular = celular;
    this.matricula = matricula;
  }
}

class Aluno extends Person {
  constructor(nome, email, datanasc, telfixo, celular, matricula, curso) {
    super(nome, email, datanasc, telfixo, celular, matricula);
    this.curso = curso;
  }
}

class Professor extends Person {
  constructor(
    nome,
    email,
    datanasc,
    telfixo,
    celular,
    matricula,
    area,
    lattes
  ) {
    super(nome, email, datanasc, telfixo, celular, matricula);
    this.area = area;
    this.lattes = lattes;
  }
}
