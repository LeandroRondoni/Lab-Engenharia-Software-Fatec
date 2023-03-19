function createCarForm() {
  const form = document.createElement("form");
  form.className = "align-middle form-control container-sm";

  const marcaDiv = document.createElement("div");
  marcaDiv.className = "input-group mb-3";
  const marcaLabel = document.createElement("label");
  marcaLabel.innerText = "Marca:";
  const marcaInput = document.createElement("input");
  marcaInput.type = "text";
  marcaInput.id = "marca";
  marcaInput.className = "form-control";
  marcaInput.required = true;

  const modeloDiv = document.createElement("div");
  modeloDiv.className = "input-group mb-3";
  const modeloLabel = document.createElement("label");
  modeloLabel.innerText = "Modelo:";
  const modeloInput = document.createElement("input");
  modeloInput.type = "text";
  modeloInput.id = "modelo";
  modeloInput.className = "form-control";
  modeloInput.required = true;

  const anoDiv = document.createElement("div");
  anoDiv.className = "input-group mb-3";
  const anoLabel = document.createElement("label");
  anoLabel.innerText = "Ano:";
  const anoInput = document.createElement("input");
  anoInput.type = "number";
  anoInput.id = "ano";
  anoInput.className = "form-control";
  anoInput.required = true;
  anoInput.min = 1900;
  anoInput.max = new Date().getFullYear();

  const corDiv = document.createElement("div");
  corDiv.className = "input-group mb-3";
  const corLabel = document.createElement("label");
  corLabel.innerText = "Cor:";
  const corInput = document.createElement("input");
  corInput.type = "text";
  corInput.id = "cor";
  corInput.className = "form-control";
  corInput.required = true;

  const kmDiv = document.createElement("div");
  kmDiv.className = "input-group mb-3";
  const kmLabel = document.createElement("label");
  kmLabel.innerText = "Km:";
  const kmInput = document.createElement("input");
  kmInput.type = "number";
  kmInput.id = "km";
  kmInput.className = "form-control";
  kmInput.required = true;
  kmInput.min = 0;

  const vfipeDiv = document.createElement("div");
  vfipeDiv.className = "input-group mb-3";
  const valorFipeLabel = document.createElement("label");
  valorFipeLabel.innerText = "Valor FIPE:";
  const valorFipeInput = document.createElement("input");
  valorFipeInput.type = "number";
  valorFipeInput.id = "valor_fipe";
  valorFipeInput.className = "form-control mb-3";
  valorFipeInput.required = true;
  valorFipeInput.min = 0;

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerText = "Calcular";
  submitButton.className = "btn btn-primary mb-3";
  submitButton.onclick = () => {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let ano = document.getElementById("ano").value;
    let cor = document.getElementById("cor").value;
    let km = document.getElementById("km").value;
    let fipe = document.getElementById("valor_fipe").value;
    const c1 = new createCar(marca, modelo, ano, cor, km, fipe);

    let r = document.createElement("div");
    r.className = "alert alert-info";
    r.innerText = "O veículo está " + c1.anosUtilizacao() + " anos em uso.";
    document.body.appendChild(r);

    let x = document.createElement("div");
    x.className = "alert alert-primary";
    x.innerText = "O veículo vale R$ " + c1.valorMercado() + " .";
    document.body.appendChild(x);
  };

  form.appendChild(marcaDiv);
  form.appendChild(marcaLabel);
  form.appendChild(marcaInput);

  form.appendChild(modeloDiv);
  form.appendChild(modeloLabel);
  form.appendChild(modeloInput);

  form.appendChild(anoDiv);
  form.appendChild(anoLabel);
  form.appendChild(anoInput);

  form.appendChild(corDiv);
  form.appendChild(corLabel);
  form.appendChild(corInput);

  form.appendChild(kmDiv);
  form.appendChild(kmLabel);
  form.appendChild(kmInput);

  form.appendChild(vfipeDiv);
  form.appendChild(valorFipeLabel);
  form.appendChild(valorFipeInput);

  form.appendChild(submitButton);

  return document.body.appendChild(form);
}

function createCar(marca, modelo, ano, cor, km, valor_fipe) {
  return {
    _marca: marca,
    _modelo: modelo,
    _ano: ano,
    _cor: cor,
    _km: km,
    _valor_fipe: valor_fipe,

    get marca() {
      return this._marca;
    },

    set marca(newMarca) {
      this._marca = newMarca;
    },

    get modelo() {
      return this._modelo;
    },

    set modelo(newModelo) {
      this._modelo = newModelo;
    },

    get ano() {
      return this._ano;
    },

    set ano(newAno) {
      this._ano = newAno;
    },

    get cor() {
      return this._cor;
    },

    set cor(newCor) {
      this._cor = newCor;
    },

    get km() {
      return this._km;
    },

    set km(newKm) {
      this._km = newKm;
    },

    get valor_fipe() {
      return this._valor_fipe;
    },

    set valor_fipe(newValorFipe) {
      this._valor_fipe = newValorFipe;
    },

    anosUtilizacao() {
      let data = new Date();
      let anoAtual = data.getFullYear();
      return anoAtual - this._ano;
    },

    valorMercado() {
      if (this._km < 30000) {
        return this._valor_fipe * 1.1;
      } else if (this._km >= 30000 && this._km < 50000) {
        return this._valor_fipe * 1;
      } else {
        return this._valor_fipe * 0.9;
      }
    },
  };
}
